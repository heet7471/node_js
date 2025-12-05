
const mongoose=require("mongoose")
const bookSchema=mongoose.Schema({
    bookaut:{
        type:String
    },
    bookname:{
        type:String
    }
})
const bookModel=mongoose.model("book",bookSchema)
module.exports=bookModel