const mongoose=require('mongoose')
const ProductSchema=mongoose.Schema({
    title:{
        type:String
    },
    price:{
        type:String
    },
     categoryId:{
        type:mongoose.Schema.Types.String,
        ref:'category'
    }
})

const Productmodal=mongoose.model("product",ProductSchema)
module.exports=Productmodal