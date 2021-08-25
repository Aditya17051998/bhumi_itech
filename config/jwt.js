const jwt=require("jsonwebtoken");
const { JWT_SECRET } = require("./secret");
const {jwtExp } = require("./secret");



const newToken = (user) => {
    return jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: jwtExp,
    });
  };
  
const verifyToken = (token) =>
    new Promise((resolve, reject) => {
      jwt.verify(token, JWT_SECRET, (err, payload) => {
        if (err) return reject(err);
        resolve(payload);
      });
    });
// module.exports=(req,res,next)=>{
//     const {authorization}=req.headers;
//     //// authorization === Bearer 854848843684iehreshf7ysr4htbf7br4db47ffffffffffffffffb
//     if(!authorization){
//         res.status(401).json({error:"you must be logged in"})
//     }
//     const token=authorization.replace("Bearer ","");
//     jwt.verify(token,JWT_SECRET,(error,payload)=>{
//         if(error){
//             return res.status(401).json({error:"you must be login"});
//         }
//         const {_id}=payload;
//         User.findById(_id)
//         .then(userData=>{
//              req.user=userData;
//              next();
//         })
        

//     })
// }
module.exports={
    newToken,verifyToken
}