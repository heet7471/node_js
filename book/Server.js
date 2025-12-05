const express=require("express")

const db=require("./config/db")
const U_router = require("./Router/userRouter")
const B_router = require("./Router/bookRouter")
const app=express()
app.use(express.json())

app.use("/user",U_router)
app.use("/book",B_router)

app.listen(5070,()=>{
    console.log("port 5070")

})