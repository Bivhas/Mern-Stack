import { Schema, model } from "mongoose";

let schoolSchema = Schema({
    name:{
    type: String,
    required:[true,"name is required."],
    },
    address: {
        type:String,
        required:[true,"address is required."],
    },
    phone: {
       type:Number,
       required:[true,"phone is required."],
    },
    email:{
        type:String,
        required:[true,"email is required."],
    },   
    noOfRooms:{
        type:Number,
        required:[true,"noOfRooms is Required"]
    }
});

let school = model("school",schoolSchema);

export default school;