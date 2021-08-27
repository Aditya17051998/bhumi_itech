const express=require('express');
const {changeUserPassword} = require('./adminControllers/adminController');
const { addCourses ,allCourses} = require('./adminControllers/courseController');
const router=express.Router();


router.post('/password',changeUserPassword);
router.post('/createCourse',addCourses);
router.get('/allCourse',allCourses);

module.exports=router;
