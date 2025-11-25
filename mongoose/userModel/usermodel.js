const mongoos=require('mongoose')

const userModel=mongoos.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    }
})

const user=mongoos.model('user1',userModel)

module.exports=user