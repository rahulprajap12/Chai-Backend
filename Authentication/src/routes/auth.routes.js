import express from 'express'
import userModel from '../models/user.model.js';

const router =express.Router();

// router.use(express.json())

router.post('/register' ,async(req,res)=>{
    const {username,password}=req.body;

    const user=await userModel.create({
        username,password
    })
    res.status(201).json({
        message:"user registerd successfully",
        user
    })
})

router.post('/login',async(req,res)=>{
    const {username,password}=req.body;

    const isUserExists=await userModel.findOne({
        username:username
    })

    if(!isUserExists){
        return res.status(401).json({
            message:"user account not found [invalid username]"
        })
        
    }
})

export default router;