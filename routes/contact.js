const express=require('express');
const path=require('path');
const router=express.Router();
const contactController=require('../controller/contact')

router.get('/contact-us',contactController.getContact)

router.post('/contact-us',contactController.postContact)

module.exports=router;