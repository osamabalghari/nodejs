const { json } = require("express");
const Movies=require("../models/movies")

const addAllMovies= async(req,res)=>{

try {
    const{title,genre,stock,rating}=req.body;
    const addMovies= new Movies({
        title,genre,stock,rating
    })
    const saveMovies= await addMovies.save()
    res.status(200).json(saveMovies)
} catch (error) {
    res.status(400),json({msg:"There is an Error ",error})
}

}
const getAllMovies= async(req,res)=>{

    try {
       
        const addMovies=await Movies.find()
       
        res.status(200).json(addMovies)
    } catch (error) {
        res.status(400),json({msg:"There is an Error ",error})
    }
    
    }

module.exports ={addAllMovies,getAllMovies}