const express=require('express');

const app=express();
const cors=require('cors');
const PORT = process.env.PORT || 3000;
const mongoose=require("mongoose");
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const {MONGOURI} = require('./config/secret');
const { signup, signin,protect}=require("./config/auth")
const Admin =require("./source/admin/adminModel");
const Student =require("./source/student/studentModel");
const Teacher =require("./source/teacher/teacherModel");
const adminRouter=require("./source/admin/adminRouter");
const authRoute = require("./routes/authentication/index");




app.use(cors());


app.use(express.json());

app.use(
  session({
      name: "sid",
      secret: "qwertyuiopasdfghjklzxcvbnm",
      resave: false,
      saveUninitialized: true,
      cookie: {
          SameSite: "None",
          Secure: true,
          maxAge: 60000000
      },
  })
);
app.use(cookieParser("qwertyuiopasdfghjklzxcvbnm"));
app.use(passport.initialize());
app.use(passport.session());

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

app.use("/admin",adminModel,protect,adminRouter);

app.use("/api/authentication", authRoute);////new setup


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