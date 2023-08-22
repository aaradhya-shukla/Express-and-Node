const express=require('express');
const bodyParser=require('body-parser');

const app=express();
const login=require('./routes/login');
const home_page=require('./routes/home_page')
app.use(bodyParser.urlencoded({extended:false}));

app.use(login)
app.use(home_page)

app.listen(3000);