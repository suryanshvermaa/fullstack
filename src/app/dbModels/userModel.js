import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({

    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    otp:{
        type:String,
        
    },
    category:{
        type:String,
        
    },
    username:{
        type:String,
        
    },
    qualifications:{
        type:String,
        
    },
    profilePic:{
        type:String,
        
    },
    phoneNumber:{
        type:String,
        
    },
   
    schedule:[
        {
            startingTime:String,
            endingTime:String,
            topic:String

        }
    ]
    

})

const User=mongoose.models.User || mongoose.model('User',userSchema);
export default User;