const express=require("express");
const { addmovie, allmovie, Deletemovie, Editmovie } = require("../Controller/movieController");




const M_router=express.Router()
M_router.post("/add",addmovie)
M_router.get("/all", allmovie);
M_router.delete("/:id",Deletemovie)
M_router.patch("/:id",Editmovie)
module.exports=M_router