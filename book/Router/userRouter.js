const express=require("express")
const {Register,GetUser,DeleteUser,EditUser} = require("../Controller/userController")



const U_router=express.Router()
U_router.post("/register",Register)
U_router.get("/all", GetUser);
U_router.delete("/:id",DeleteUser)
U_router.patch("/:id",EditUser)
module.exports=U_router