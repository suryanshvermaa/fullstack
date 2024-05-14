const mongoose=require('mongoose');


const messageSchema=new mongoose.Schema({

    sender:{
        type:mongoose.Schema.Types.ObjectId,
        type:String,

        required:true
    },
    recipient:{
        type:mongoose.Schema.Types.ObjectId,
      
        required:true
    },
    message:{

        type:String,
        required:true
    }
})

const Message=mongoose.models.Message||mongoose.model('Message',messageSchema);
export default Message;
