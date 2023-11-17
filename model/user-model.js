import {Schema, model} from "mongoose";

const userSchema = new Schema({
    firstname: {type: Schema.Types.String},
    lastName: {type: Schema.Types.String},
    email:{type: Schema.Types.String},
    password: {type:Schema.Types.String}
})

const userModel = model("User", userSchema)

export default userModel;