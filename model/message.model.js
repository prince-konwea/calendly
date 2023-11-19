import {Schema, model} from "mongoose";

const messageModel = new Schema({
    message: {type: Schema.Types.String.required}
})

export default model("Message", messageModel)