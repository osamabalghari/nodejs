const mongoose=require("mongoose")

const movies = new mongoose.Schema({

  title: {type:String,required:true},
  stock: {type:Number,},
  rating: {type:Number,},
  genre: {type:String}
 
});

module.exports = mongoose.model('movie', movies);