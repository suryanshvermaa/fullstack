
import mongoose from "mongoose";

const dbConnection=async()=>{

    try {
       await mongoose.connect('mongodb+srv://suryanshverma_1:ansh9580104753@cluster0.4b1qo6z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
       console.log('db connected')
    } catch (error) {
        console.log('error in connection')
    }
}
export default dbConnection;