import {Schema, model} from "mongoose";

const messageModel = new Schema({
    sender:{
        type: String,
        ref: "User",
       required: "true"
    },
    content: {
        type:String,
        required: "true"
    },
    timeStamp:{
        type: Date,
        default: Date.now
    }
})

export default model("Message", messageModel)