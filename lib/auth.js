import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import connectDB from "@/Db/db";
import { User } from "@/lib/model";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";

const login = async (credentials) => {
  try {
    await connectDB();
    const user = await User.findOne({ username: credentials.username });

    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) {
      throw new Error("Password not Correct");
    }

    return user;
  } catch (error) {
    console.log(error.message);
    throw new Error("Login failed");
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({


  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60,
  },

  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Credentials({
      name: "credentials",

      async authorize(credentials) {
        console.log(credentials, "CREDENTIALS");
        try {
          const user = await login(credentials);
          console.log("Credential Provider", user);
          return user;
        } catch (error) {
          console.log(error, "Error in auth credential");
          return null;
        }
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log(user, "USER Auth");

      if (user) {
        (token.name = user.username),
          (token.id = user.id),
          (token.isAdmin = user.isAdmin);
      }
      console.log(token, "TOKEN JWT");

      return token;
    },

    async session({ session, token }) {
      console.log(token, "TOKEN");
      if (token) {
        (session.user.id = token.id), (session.user.isAdmin = token.isAdmin);
      }
      console.log(session);
      return session;
    },

    async signIn({ account, profile }) {
      console.log(account, profile, "CALLBACKS");
      try {
        if (account.provider === "github") {
          await connectDB();
          const user = await User.findOne({ email: profile.email });

          if (!user) {
            const userData = new User({
              username: profile.login,
              email: profile.email,
              image: profile.avatar_url,
            });

            await userData.save();
          }
        }
      } catch (error) {
        console.log(error.message);
        return false;
      }
      return true;
    }
   
  },
});
