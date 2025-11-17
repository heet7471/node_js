const express = require("express")

const app = express()

app.set("view engine", "ejs")

app.use(express.urlencoded());
var student = [
    {
        "id":"1",
        "name":"Gopal"
    },
    {
        "id":"2",
        "name":"Sunil"
    },
    {
        "id":"3",
        "name":"Raj"
    }
];

app.get("/",(req,res)=>{
    res.render("Home",{student})

    // res.send("home")
})

app.post("/insertdata",(req,res)=>{
    const {id,name} = req.body
    const obj = {
        id,name
    }
    student.push(obj)

    res.redirect("/")
})  

app.get("/delete",(req,res)=>{
    const id = req.query.id
    const ans = student.filter((el,i)=>{
        return el.id!==id
    })
    student=ans
    res.redirect("/")
})


app.get("/edit",(req,res)=>{
    const id = req.query.id
    const ans = student.filter((el,i)=>{
        return el.id==id
    })
    res.render("edit",{editData:ans[0]})
})

app.post("/updatedata",(req,res)=>{
    const {id,name} = req.body      
    student.forEach((el,i)=>{
        if(el.id==id){
            el.name=name
        }   
    })
    res.redirect("/")
})






// app.get("/",(req,res)=>{
//     // res.send("Home Page")

     
//     res.render("Home")
// })               



app.listen(7000, ()=>{
    console.log("server runing")
})