const express=require('express');
const {changeUserPassword} = require('./studentControllers/studentController');
const router=express.Router();


router.post('/password',changeUserPassword);

module.exports=router;