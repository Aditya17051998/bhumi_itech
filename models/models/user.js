// require('../lib/dbHelper');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, lowercase: true },
  password: { type: String, required: true },
  publicKey: { type: String, required: true },
  isBlocked: { type: Boolean, default: false },
  isVerified: { type: Boolean, required: true, default: false },
  isGranted: { type: Boolean, required: true, default: false },
  role: { type: Number, default: 0 },
  verificationToken: { type: String, required: false },
  verificationExpires: { type: Date, required: false },
  resetPasswordToken: { type: String, required: false },
  resetPasswordExpires: { type: Date, required: false },
  isNewUser: { type: Boolean, default: true }
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
});

const User = mongoose.model('users', userSchema);
module.exports=mongoose.model('users', userSchema);


// const addMultiple = (args, callback) => {
//   User.insertMany(args.userDetails, { ordered: false })
//     .then((res) => callback(null, res))
//     .catch((err) => new Error(JSON.stringify(err)));
// };

// const find = (args, callback) => {
//   User.find(args.userQueries)
//     .then((res) => callback(null, res))
//     .catch((err) => new Error(JSON.stringify(err)));
// };

// const findOne = (args, callback) => {
//   User.findOne(args.userQueries)
//     .then((res) => callback(null, res))
//     .catch((err) => new Error(JSON.stringify(err)));
// };

// const findAll = (args, callback) => {
//   User.find(args.userQueries)
//     .then((res) => callback(null, res))
//     .catch((err) => new Error(JSON.stringify(err)));
// };

// const updateOne = (args, callback) => {
//   User.updateOne(args.userQueries, { $set: args.userDetails })
//     .then((res) => callback(null, res))
//     .catch((err) => new Error(JSON.stringify(err)));
// };

// module.exports = {
//   find,
//   findAll,
//   findOne,
//   updateOne,
//   addMultiple
// };
