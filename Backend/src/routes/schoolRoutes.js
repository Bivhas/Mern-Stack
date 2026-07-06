import { Router } from "express";
import product from "../schema/schoolSchema.js";

const schoolRoutes = Router();

schoolRoutes
.route("/")
.post(async(req,res,next)=>{
   try {
    let result = await product.create(req.body)
    res.json({
      success:true,
      message:"Information successfully Registered."
    });
    
   } catch (error) {
    res.json({
      success:false,
      message:error.message,
    });
}
})
.get(async(req,res,next)=>{
    try {
    let result= await product.findById(req.params.id);
    res.json({

      success:true,
      message:"Information read Successfully.",
      result:result,
    })
   } catch (error) {
    res.json({
      success:false,
      message:error.message,
    })
   }
})
schoolRoutes
.route("/:id")
.get(async(req,res,next)=>{
    try {
        let result= await product.findById(req.params.id);
        res.json({
          success:true,
          message:"Information read Successfully.",
          result:result,
        })
       } catch (error) {
        res.json({
          success:false,
          message:error.message,
        })
       }
})
.patch(async(req,res,next)=>{
    try {
        let result= await product.findByIdAndUpdate(req.params.id,req.body);
        res.json({
          success:true,
          message:"Information Updated Successfully.",
          result:result,
        })
       } catch (error) {
        res.json({
          success:false,
          message:error.message,
        })
       }
})
.delete(async(req,res,next)=>{
    try {
        let result= await product.findByIdAndDelete(req.params.id);
        res.json({
          success:true,
          message:"Information deleted Successfully.",
          result:result,
        })
       } catch (error) {
        res.json({
          success:false,
          message:error.message,
        })
       }
})

export default schoolRoutes;