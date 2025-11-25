const express = require("express");
require("./config/db");            

const U_router = require("./routes/userrouter");

const app = express();

app.use(express.json());

app.use('/user', U_router);

app.listen(8000, () => {
    console.log("listen 8000");
});
