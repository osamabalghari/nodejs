//const express =require("express")
const mongoose =require("mongoose")
require("dotenv").config()

const dataBaseConnect =async()=>{
 await mongoose.connect(process.env.MONGODB_URI)
 console.log("database Connected Successful" );
}


module.exports=dataBaseConnect;
