//make routes
//use that routes in index.js

import { Router } from "express";

let firstRoute=Router()

firstRoute
    .route("/")
    .get((req,res,next) =>{
        console.log(req.body)
        console.log("a");
    })
    .post((req,res,next) =>{
        console.log("b");
    })

firstRoute
    .route("/job")
    .get((req,res,next) =>{
        console.log("c");
    })

firstRoute
    .route("/:id1/a/:id2")
    .get((req,res,next) =>{
        /* let data=req.params;
        console.log(data.id1); */
        console.log(req.params);
        console.log("dynamic params");
    })



export default firstRoute