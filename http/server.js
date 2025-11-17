// const http= require('http')

// http.createServer((request,response)=>{
//     response.write('heet patel')
//     response.end()
// }).listen(3000)



// const http = require('http')

// http.createServer((request, response) => {

//     if (request.url === "/") {
//         response.write("Welcome to Home Page")
//     } 
//     else if (request.url === "/contact") {
//         response.write("Contact Page")
//     }
//      else if (request.url === "/about") {
//         response.write("about Page")
//     } 
//      else if (request.url === "/my profile") {
//         response.write("my profile Page")
//     }  
//     else {
//         response.write("404 Page Not Found")
//     }

//     response.end()
// }).listen(3000)








const http = require("http")

http.createServer((req, res) => {
    const path = req.url
    const method = req.method
    console.log(path, method)

    if (path.includes("/h") && method == 'GET') {
        res.write("home page")

    }

    else if (path.includes("/abc") && method == 'GET') {
        res.write("abc page")

    }
    else {
        res.write("404 Page not found")

    }

    res.end()
}).listen(9000)
