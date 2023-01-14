const express = require("express");
require("./db/connect")
const playersdb = require("./models/players")
const app = express();
const port = 8000;

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.listen(port,()=>{
    console.log(`app is running on port ${port}`)
})