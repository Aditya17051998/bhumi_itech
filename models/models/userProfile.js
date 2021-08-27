// require("../lib/dbHelper");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userProfileSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "users", required: true },
    name: { type: String, required: true },
    publicKey: { type: String, required: true },
    email: { type: String, required: true },
    // courses: [{ type: Schema.Types.ObjectId, ref: "courses", default: [] }],
    // enrolledCourses: [{ type: Schema.Types.ObjectId, ref: "courses", default: [] }]
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

// const userProfile = mongoose.model("userProfiles", userProfileSchema);
module.exports =mongoose.model("userProfiles", userProfileSchema);
// const addMultiple = (args, callback) => {
//   userProfile
//     .insertMany(args.userProfileDetails, { ordered: false })
//     .then((res) => callback(null, res))
//     .catch((err) => new Error(JSON.stringify(err)));
// };

// const find = (args, callback) => {
//   userProfile
//     .find(args.userProfileQueries)
//     .sort({ createdAt: -1 })
//     .then((res) => callback(null, res))
//     .catch((err) => new Error(JSON.stringify(err)));
// };

// const findAll = (args, callback) => {
//   userProfile
//     .find(args.userProfileQueries)
//     .populate("userId")
//     .sort({ createdAt: -1 })
//     .then((res) => callback(null, res))
//     .catch((err) => new Error(JSON.stringify(err)));
// };

// const findOne = (args, callback) => {
//   userProfile
//     .findOne(args.userProfileQueries)
//     .populate("userId")
//     .then((res) => {
//       callback(null, res);
//     })
//     .catch((err) => {
//       new Error(JSON.stringify(err));
//     });
// };

// const update = (args, callback) => {
//   userProfile
//     .updateMany(args.userProfileQueries, { $set: args.userProfileDetails })
//     .then((res) => callback(null, res))
//     .catch((err) => new Error(JSON.stringify(err)));
// };

// const join = (args, callback) => {
//   userProfile
//     .updateMany(
//       args.userProfileQueries,
//       { $addToSet: args.userProfileDetails },
//       { multi: true }
//     )
//     .then((res) => callback(null, res))
//     .catch((err) => new Error(JSON.stringify(err)));
// };

// const remove = (args, callback) => {
//   userProfile
//     .updateMany(args.userProfileQueries, { $pull: args.userProfileDetails })
//     .then((res) => callback(null, res))
//     .catch((err) => new Error(JSON.stringify(err)));
// };

// module.exports = {
//   addMultiple,
//   find,
//   findOne,
//   findAll,
//   update,
//   join,
//   remove,
// };
