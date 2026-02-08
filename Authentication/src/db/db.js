import mongoose from "mongoose";    

function connectDB(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("connected to the data base");
    })
    .catch((err)=>{
        console.log(err);
    })
}

export default connectDB;
