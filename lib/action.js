'use server'
import bcrypt from 'bcryptjs'
import connectDB from "@/Db/db"
import { signIn, signOut } from "@/lib/auth"
import { User } from '@/lib/model'

export const handleGitHubLogin= async()=>{  
 await signIn('github')
 }

export const handleLogout= async()=>{  
  await signOut()
  } 


//previousState use in case of useFormState otherwise, only one arg formdata
export const register = async(previousState, formdata)=>{
 console.log(formdata, 'Action formdata')
 console.log(previousState, 'Action previousState')
 const {username, email, password, passwordConfirm, image} = Object.fromEntries(formdata)


 if ( !username || !email || !password || !passwordConfirm || !image){
  return ({error: 'Missing Field'})
  }



if (password !== passwordConfirm){
return ({error: 'Password and Confirm Password does not match'})
}

try {
 await connectDB()
 const user = await User.findOne({username})

 if (user){
  return ({error: 'Already Exist this username, kindly choose other username'})
 }

 const salt = await bcrypt.genSalt(10)
 const hashPassword = await bcrypt.hash(password, salt)
 console.log(hashPassword)
 const userAdd = new User({username, email, password: hashPassword, image})
 await userAdd.save()
 return ({success: true})
} catch (error) {
 return ({error: error.message})
}
}


export const login = async(previousState, formdata)=>{
const { username, password } = Object.fromEntries(formdata)

try {
  await signIn('credentials' , {username, password,  redirectTo: '/'})   //redirect: false , redirectTo: '/'
  
} catch (error) {
  console.log(error.message, 'Something Wrong in Signin With Credentials')
  if (error.message.includes('CredentialsSignin')){
  return ({error: 'Invalid User ID and Password'})
  }

  
  // If successfully authenticated throw error 'Next_Redirect
  if (error.message.includes('NEXT_REDIRECT')){
     // return ({success: true})
    throw error
    }

  return ({error: error.message})

}

}

  