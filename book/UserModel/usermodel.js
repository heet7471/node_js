
const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    }
})
const user=mongoose.model("kathan123",userSchema)
module.exports=user