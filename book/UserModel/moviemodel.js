
const mongoose=require("mongoose")
const movieSchema=mongoose.Schema({
    movie:{
        type:String
    },
    movietype:{
        type:String
    }
})
const moviemodel=mongoose.model("movie",movieSchema)
module.exports=moviemodel