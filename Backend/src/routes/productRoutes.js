import { Router } from "express";
import product from "../schema/productSchema.js";

const productRoutes = Router();

productRoutes
.route("/")
.post(async(req,res,next)=>{
   try {
    let result = await product.create(req.body)
    res.json({
      success:true,
      message:"Product created Successfully."
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
      message:"Product read Successfully.",
      result:result,
    })
   } catch (error) {
    res.json({
      success:false,
      message:error.message,
    })
   }
})

productRoutes
.route("/:id")
.get(async(req,res,next)=>{
    try {
        let result= await product.findById(req.params.id);
        res.json({
          success:true,
          message:"Product read Successfully.",
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
          message:"Product Updated Successfully.",
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
          message:"Product deleted Successfully.",
          result:result,
        })
       } catch (error) {
        res.json({
          success:false,
          message:error.message,
        })
       }
})

export default productRoutes;