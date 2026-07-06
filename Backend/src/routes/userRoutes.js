import { Router } from "express";
import User from "../schema/userSchema.js"

const userRoutes = Router()

userRoutes
  .route("/") //localHost:8000/user
  .post(async(req,res,next) =>{
   // res.json("user created sucessfully")
    //console.log(req.body)
    /*
    send data from postman
    get data sent by postman
    store data in User table
    */
   try {
    let result = await User.create(req.body)
    res.json({
      success:true,
      message:"User created Successfully."
    });
    
   } catch (error) {
    res.json({
      success:false,
      message:error.message,
    });
    
   }


    
   
  })
  .get(async(req,res,next) =>{
    try {
    let result = user.find();
    res.json({
      success:true,
      message:"User read successfully",
      result:result,
    })
  } catch (error) {
    res.json({
      success:false,
      message:error.message,
    })
  }
  })
  

userRoutes
  .route("/:id")//localHost:8000/user/
  .get(async(req,res,next) =>{
   try {
    let result= await User.findById(req.params.id);
    res.json({
      success:true,
      message:"User read Successfully.",
      result:result,
    })
   } catch (error) {
    res.json({
      success:false,
      message:error.message,
    })
   }
    
  })
  .patch(async(req,res,next) =>{
  try {
    let result= await User.findByIdAndUpdate(req.params.id,req.body);
    res.json({
      success:true,
      message:"User Updated Successfully.",
      result:result,
    })
   } catch (error) {
    res.json({
      success:false,
      message:error.message,
    })
   }
  })
  .delete(async(req,res,next) =>{
    try {
    let result= await User.findByIdAndDelete(req.params.id);
    res.json({
      success:true,
      message:"User deleted Successfully.",
      result:result,
    })
   } catch (error) {
    res.json({
      success:false,
      message:error.message,
    })
   }
  })

  export default userRoutes;