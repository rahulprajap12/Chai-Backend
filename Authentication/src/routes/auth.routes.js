import express from 'express'
import userModel from '../models/user.model.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// router.use(express.json())

router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    const user = await userModel.create({
        username,
        password
    });

    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET
    );

    res.status(201).json({
        message: "user registered successfully",
        user,
        token
    });
});


router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const isUserExists = await userModel.findOne({
        username: username
    })



    if (!isUserExists) {
        return res.status(401).json({
            message: "user account not found [invalid username]"
        })
    }
    const isPasswordValid = password == isUserExists.password
    if (!isPasswordValid) {
        return res.status(401).json({
            message: "nvalid password"
        })
    }
    res.status(200).json({
        message: "user loggend successfully"
    })

})

router.get('/user', async (req, res) => {
    const { token } = req.body

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user=await userModel.findOne({
            _id:decoded.id  
      })
      res.status(200).json({
        message:"user data fetched successfully",
        user
      })

    }catch(err){
        return res.status(401).json({
            message:"Unauthorized - Invalid token"
        })
    }

    // console.log(token);


})




export default router;