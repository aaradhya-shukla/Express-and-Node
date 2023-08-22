const express=require('express');
const fs=require('fs');
const route=express.Router();

route.get('/login',(req,res,next)=>{
    res.send('<form action="/login" method="POST"><input type="text" name="userName"><button type="submit">Login</button></form>');
    localStorage.setItem('username',`${req.body.userName}`);
})

route.post('/login',(req,res,next)=>{
    console.log(req.body.userName);
        res.redirect('/home_page')
        // if (typeof window !== 'undefined') {
        //     // Perform localStorage action
        //     localStorage.setItem('username',`${req.body.userName}`);
        //   }
})

module.exports=route;