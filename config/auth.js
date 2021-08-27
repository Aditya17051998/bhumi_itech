
const { newToken, verifyToken }=require("./jwt");
const bcrypt=require('bcryptjs');


const signup = async (req, res) => {
    const Model = req.model;
    if (
      !req.body.email ||
      !req.body.password ||
      !req.body.firstName ||
      !req.body.lastName
    ) {
      return res.status(400).send({
        message: "Required fields missing",
      });
    }
    try {
      const savedUser=await Model.findOne({email:req.body.email})
      if(savedUser){
          console.log("save data",savedUser)
        return res.status(422).json({error:"user already exist with email"});
      }
      const hash=await bcrypt.hash(req.body.password,12);
      req.body.password=hash;


      const user = await Model.create(req.body);
      const collectionName = Model.collection.collectionName;
    //   if (collectionName === "admins" || collectionName === "Admin") {
    //     await Payment.create({ userID: user._id });
    //   }
      const token = newToken(user);
      return res.status(201).send({ status: "ok", token: token,user:user });
    } catch (e) {
    //   console.log("error",e.message);
    //   if (e.toString().includes("E11000 duplicate key error collection")) {
    //     return res.status(400).send({
    //       status: "User already exist"
    //     });
    //   }
      return res.status(400).send({ status: "Error Communicating with server" });
    }
  };
  
const signin = async (req, res) => {
    const Model = req.model;
  
    if (!req.body.email || !req.body.password)
      return res.status(400).send({ message: "Email and password required" });
    const user = await Model.findOne({ email: req.body.email }).exec();
    if (!user) {
      return res.status(400).send({ message: "Invalid Email or Password" });
    }
  
    try {
    //   const match = await user.checkPassword(req.body.password);
    //   if (!match) {
    //     return res.status(401).send({ message: "Invalid Credentials" });
    //   }
      const match=await bcrypt.compare(req.body.password,user.password);
      if(match){
        const token = newToken(user);
        return res.status(201).send({ status: "ok", token: token ,user:user});
      }
      return res.status(401).send({ message: "Not Authorized" });
      
    } catch (e) {
      console.log(e);
      return res.status(401).send({ message: "Not Authorized" });
    }
  };
  
  const protect = async (req, res, next) => {
    const Model = req.model;
    if (!req.headers.authorization) {
      return res.status(401).end();
    }
    let token = req.headers.authorization.split("Bearer ")[1];
    if (!token) {
      return res.status(401).end();
    }
    try {
      const payload = await verifyToken(token);
      // console.log("here authentucate",payload);
      const user = await Model.findById(payload.id)
        // console.log("usr",payload,user);
      req.user = user;
      next();
    } catch (e) {
      console.log("erroe",encodeURI);
      return res.status(401).end();
    }
  };
  

module.exports={signin,signup,protect}