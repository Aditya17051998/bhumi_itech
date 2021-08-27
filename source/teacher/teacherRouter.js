const express=require('express');
const {changeUserPassword} = require('./teacherControllers/teacherController');
const router=express.Router();


router.post('/password',changeUserPassword);

module.exports=router;