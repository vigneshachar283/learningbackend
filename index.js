import express from "express";
const app=express();

app.get("/",(req,res)=>{

res.send("Hello, How are you");
})

app.listen(3000,()=>{
    console.log("server has started in 3000 port");
})