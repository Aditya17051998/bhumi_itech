const express=require('express');
const {changeUserPassword} = require('./adminController');
const router=express.Router();


router.post('/password',changeUserPassword);

module.exports=router;
