const express=require('express')
const db=require('./config/db')
const U_Router = require('./Routes/userRouter')
const Product_Router = require('./Routes/productRouter')
const Category_Router = require('./Routes/categoryRouter')
const app=express()
app.use(express.json())

app.use("/user",U_Router)
app.use('/product',Product_Router)
app.use('/category',Category_Router)

app.listen(8200,()=>{
    console.log("listen 8200")
})