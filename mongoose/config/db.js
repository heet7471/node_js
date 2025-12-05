const mongoos=require('mongoose')
mongoos.connect('mongodb://localhost:27017')

const db=mongoos.connection

db.on('connected',(err,data)=>{
    if(err){
        console.log('err')
    }else{
        console.log('database Connected')
    }
})