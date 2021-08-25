const express=require('express');

const app=express();
const cors=require('cors');
const PORT = process.env.PORT || 3000;
const mongoose=require("mongoose");
const {MONGOURI} = require('./config/secret');
const { signup, signin,protect}=require("./config/auth")
const Admin =require("./source/admin/adminModel");
const Student =require("./source/student/studentModel");
const Teacher =require("./source/teacher/teacherModel");




app.use(cors());


app.use(express.json());

const adminModel = (req, res, next) => {
    req.model = Admin;
    next();
  };
  const studentModel = (req, res, next) => {
    req.model = Student;
    next();
  };
  
  const teacherModel = (req, res, next) => {
    req.model = Teacher;
    next();
  };


app.post("/signup_admin",adminModel,signup);
app.post("/signin_admin",adminModel,signin);
app.post("/signupTeacher", teacherModel, signup);
app.post("/signinTeacher", teacherModel, signin);
app.post("/signupStudent", studentModel, signup);
app.post("/signinStudent", studentModel, signin);


mongoose.connect(MONGOURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,

  });





mongoose.connection.on('connected',()=>{
    console.log("connected to mongodb");
})
mongoose.connection.on('error',(err)=>{
    console.log("error in connected to mongodb",err);
})
app.listen(PORT,async()=>{
    console.log("server is running on",PORT);
})