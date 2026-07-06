import { Schema, model } from "mongoose";

let userSchema = Schema({
    name:{
        type: String,
        required: [true ,"name is required."],
    },
    address : {
        type: String,
        required: [true ,"address is required."],
    },
    email : {
        type: String,
        required: [true ,"email is required."],
    },
    password :{
        type: String,
        required: [true ,"passowrd is required."],
    },
    phone : {
        type: Number,
    },

});
let User = model("User", userSchema)
export default User;