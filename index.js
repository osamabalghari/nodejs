const express =require('express');
const app =express()
require("dotenv").config()

const dataBaseConnect=require("./db")
dataBaseConnect()
const movieRouter =require('./routes/movies')
app.use(express.json())
app.use("/movies",movieRouter)


app.listen(process.env.PORT,()=>{
    console.log(`Server Started on ${process.env.PORT}`);
})