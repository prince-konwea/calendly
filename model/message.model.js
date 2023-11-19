import {Schema, model} from "mongoose";

const messageModel = new Schema({
    message: {type: Schema.Types.String}
})

export default model("Message", messageModel)