import dotenv from "dotenv";

import connectDB from "./data/index.js";



dotenv.config({
    path: './env'
})



/*
import express from "express"
const app = express();

import express from "express";
(async()=>{
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("error:", error);
            throw error
            
        })
        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on port ${process.env.PORT}`);
        })
    }catch(error){
        console.error("ERROR: ",error)
        throw err
    }
   
})
    */