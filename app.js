const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// importing my modules
const admin=require('./routes/admin');
const shop=require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',admin);

// app.post('/product', (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');
// });

app.use(shop);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>');
})

app.listen(3000);
