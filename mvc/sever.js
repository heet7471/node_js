const express=require('express')
const db=require('./config/db')
const usermodal = require('./model/usermodal')
const app=express()

app.use(express.json())

app.post("/insertData",async(req,res)=>{
    const data=await usermodal.create(req.body)
    res.send(data)
})

app.get('/',async(req,res)=>{
    const user1=await usermodal.find({})
    res.send(user1)
})

app.delete('/:id',async(req,res)=>{
    const id=req.params.id
    const data=await usermodal.findByIdAndDelete(id)
    res.send("success")
})

app.patch('/:id',async(req,res)=>{
    const id=req.params.id
    const data=await usermodal.findByIdAndUpdate(id,req.body)
    res.send(data)
})

app.listen(8000,()=>{
    console.log("listen 8000")
})