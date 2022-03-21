const express = require("express");

const app = express();

app.get("/home",(req,res)=>{
    res.send('<h1>Ajay </h1>')
})

app.listen(3000,()=>{
    console.log('server running at port 3000');
})