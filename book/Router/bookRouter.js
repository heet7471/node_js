const express=require("express");
const { addbook, allbook, Deletebook, Editbook } = require("../Controller/bookController");




const B_router=express.Router()
B_router.post("/add",addbook)
B_router.get("/all", allbook);
B_router.delete("/:id",Deletebook)
B_router.patch("/:id",Editbook)
module.exports=B_router