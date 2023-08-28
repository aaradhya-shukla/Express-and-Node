const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const name=''
app.use(bodyParser.urlencoded({extended:false}))
app.get('/home',(req,res,next)=>{
    res.send('<form action="/info" method="POST"><input type="text" name="name"><button type="submit">done</button></form>')
})

app.post('/info',(req,res,next)=>{
    namee=req.body.name;
    res.send("Hi there welcome to information page")
    
})
localStorage.setItem('name',`${req.body.name}`)
app.listen(3000)