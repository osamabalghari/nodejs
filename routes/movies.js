const express= require('express');
const {addAllMovies,getAllMovies} =require('../controllers/movies')

const router =express.Router()

router.post("/",addAllMovies)
router.get("/",getAllMovies)

module.exports =router