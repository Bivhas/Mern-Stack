import express, { json } from "express";
//import productRoutes from "./src/routes/productRoutes.js";
//import firstRoute from "./src/routes/firstRoutes.js";
//import userRoutes from "./src/routes/userRoutes.js";
import schoolRoutes from "./src/routes/schoolRoutes.js";
import mongoose from "mongoose";

let app=express();


app.listen(8000,() =>{
    console.log("application is listening at port 8000");
    mongoose.connect("mongodb://localhost:27017/school");
});

app.use(json()); //make our backend to take data from postman

//app.use(firstRoute)
//app.use("/product",productRoutes);
//app.use("/user",userRoutes);
app.use("/school",schoolRoutes);
/* 
School
    name
    address
    phone
    email
    noOfRooms
*/

/*
schema
routes
index
*/