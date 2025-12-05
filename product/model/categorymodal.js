const mongoose=require('mongoose')
const CategorySchema=mongoose.Schema({
    title:{
        type:String
    },
    price:{
        type:String
    },

   

})

const Categorymodal=mongoose.model("category",CategorySchema)
module.exports=Categorymodal