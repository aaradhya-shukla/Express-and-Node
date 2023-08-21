const http=require('http');
// this returns us a server
const express=require('express');
const app=express();
// creating a middlewear 
app.use((req,res,next)=>{
    console.log("here in 1st middlewear")
    next()// for going to next middlewear
})
app.use((req,res,next)=>{
    console.log("in 2nd");
    res.send("<h1>hello from Express!</h1>");
})

app.listen(3000)
 
