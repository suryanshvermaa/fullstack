
import mongoose from "mongoose";

const dbConnection=async()=>{

    try {
       await mongoose.connect('mongodb://127.0.0.1:27017/test');
       console.log('db connected')
    } catch (error) {
        console.log('error in connection')
    }
}
export default dbConnection;