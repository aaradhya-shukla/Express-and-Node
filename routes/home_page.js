const { isUtf8 } = require('buffer');
const express=require('express');
const fs=require('fs');
const route=express.Router()
const name=""
route.get('/home_page',(req,res,next)=>{
    fs.readFile('usermessage.txt','utf-8',(err,data)=>{
        if (err){
            console.log('we here')
            console.log(err)
        }
        else{
            res.send(`<body>${data}<br><form action="/home_page" method="POST"><input type="text" name="message"><button>Send Message</button></form></body>`)
            
        }
    })
    
})

route.post('/home_page',(req,res,next)=>{
    console.log(req.body)
    let data=""
    for (i in req.body){
        data+=name+":"+req.body[i]+" "
    }
    fs.writeFile('usermessage.txt',data,{ flag: 'a+' },(err)=>{
        if (err){
            console.log(err)
        }
        res.redirect('/home_page')
    })
})


module.exports=route