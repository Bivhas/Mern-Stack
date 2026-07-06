import { Schema, model } from "mongoose";

let productSchema = Schema({
    name:{
    type: String,
    required:[true,"name is required."],
    },
    price: {
        type:Number,
        required:[true,"price is required."],
    },
    quantity: {
       type:Number,
       required:[true,"quantity is required."],
    },
    description:{
        type:String,
        required:[true,"description is required."],
    },   
});

let product = model("product",productSchema);

export default product;