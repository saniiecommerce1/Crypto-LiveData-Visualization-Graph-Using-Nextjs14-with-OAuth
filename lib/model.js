import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
 username: String,
 email: String,
 password: String,
 image: String,
 isAdmin: {type: Boolean, default: false},
 date: { type: Date, default: Date.now },
 },
 {timestamps: true});
 
 export const User =
 mongoose.models?.users || mongoose.model("users", userSchema);
 