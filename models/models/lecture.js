// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const lectureSchema = new Schema(
//   {
//     title: { type: String },
//     number: { type: Number },
//     description: { type: String, required: true },
//     image: { type: String },
//     video: { type: String },
//     file: { type: String },
//     sectionId: {
//       type: Schema.Types.ObjectId,
//       ref: "sections",
//       required: true
//     },
//     publicKey: {
//       type: String,
//       required: true
//     },
//     courseId: {
//       type: Schema.Types.ObjectId,
//       ref: "courses",
//       required: true
//     }
//   },
//   {
//     timestamps: {
//       createdAt: "createdAt",
//       updatedAt: "updatedAt",
//     },
//   }
// );

// const Lecture = mongoose.model("lectures", lectureSchema);

// const addMultiple = (args, callback) => {
//   Lecture.insertMany(args.lectureDetails, { ordered: false })
//       .then((res) => callback(null, res))
//       .catch((err) => new Error(JSON.stringify(err)));
// };

// const find = (args, callback) => {
//   Lecture.find(args.lectureQueries)
//       .then((res) => callback(null, res))
//       .catch((err) => new Error(JSON.stringify(err)));
// };

// const findOne = (args, callback) => {
//   Lecture.findOne(args.lectureQueries)
//       .then((res) => callback(null, res))
//       .catch((err) => new Error(JSON.stringify(err)));
// };

// const update = (args, callback) => {
//   Lecture.updateMany(args.lectureQueries, { $set: args.lectureDetails })
//       .then((res) => callback(null, res))
//       .catch((err) => new Error(JSON.stringify(err)));
// };

// const join = (args, callback) => {
//   Lecture.updateMany(args.lectureQueries, { $addToSet: args.lectureDetails })
//       .then((res) => callback(null, res))
//       .catch((err) => new Error(JSON.stringify(err)));
// };

// const remove = (args, callback) => {
//   Lecture.updateMany(args.lectureQueries, { $pull: args.lectureDetails })
//       .then((res) => callback(null, res))
//       .catch((err) => new Error(JSON.stringify(err)));
// };

// const del = (args, callback) => {
//   Lecture.deleteOne(args.lectureQueries)
//       .then((res) => callback(null, res))
//       .catch((err) => new Error(JSON.stringify(err)));
// };

// module.exports = {
//   addMultiple,
//   find,
//   findOne,
//   update,
//   remove,
//   join,
//   del,
// }