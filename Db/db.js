import mongoose from "mongoose";

const connection = {}

const connectDB = async()=>{

try {
 
 if (connection.isConnected){
  console.log('Using Existing Connection')
  return;
 }
 const db = await mongoose.connect(process.env.DB_URL)
 connection.isConnected = db.connections[0].readyState
 console.log('Connected with MongoDB')


} catch (error) {
 console.log(error.message)
 throw new Error(error.message)
}

}

export default connectDB;