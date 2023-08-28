const express = require('express');
const bodyParser = require('body-parser');
const path=require('path');

const app = express();

// importing my modules
const admin=require('./routes/admin');
const shop=require('./routes/shop');
const contact=require('./routes/contact');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',admin);

app.use(shop);

app.use(contact);


app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','PageNotFound.html'))
})

app.listen(3000);
