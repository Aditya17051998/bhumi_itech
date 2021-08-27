// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const submissionSchema = new Schema({
//   userId: {
//     type: Schema.Types.ObjectId,
//     ref: "users"
//   },
//   file: {
//     type: String
//   },
//   submittedDate: {
//     type: String
//   }
// });

// const assignmentSchema = new Schema(
//   {
//     title: { type: String, required: true },
//     number: { type: Number, require: true },
//     description: { type: String, required: true },
//     media: { type: String },
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
//     },
//     startDate: {
//       type: String,
//       require: true
//     },
//     endDate: {
//       type: String,
//       required: true
//     },
//     submissions: [submissionSchema]
//   },
//   {
//     timestamps: {
//       createdAt: "createdAt",
//       updatedAt: "updatedAt",
//     },
//   }
// );




// const addMultiple = (args, callback) => {
//   Assignment.insertMany(args.assignmentDetails, { ordered: false })
//     .then((res) => callback(null, res))
//     .catch((err) => new Error(JSON.stringify(err)));
// };

// const find = (args, callback) => {
//   Assignment.find(args.assignmentQueries)
//     .then((res) => callback(null, res))
//     .catch((err) => new Error(JSON.stringify(err)));
// };

// const findOne = (args, callback) => {
//   Assignment.findOne(args.assignmentQueries)
//     .then((res) => callback(null, res))
//     .catch((err) => new Error(JSON.stringify(err)));
// };

// const update = (args, callback) => {
//   Assignment.updateMany(args.assignmentQueries, { $set: args.assignmentDetails })
//     .then((res) => callback(null, res))
//     .catch((err) => new Error(JSON.stringify(err)));
// };

// const join = (args, callback) => {
//   Assignment.updateMany(args.assignmentQueries, { $addToSet: args.assignmentDetails })
//     .then((res) => callback(null, res))
//     .catch((err) => new Error(JSON.stringify(err)));
// };

// const remove = (args, callback) => {
//   Assignment.updateMany(args.assignmentQueries, { $pull: args.assignmentDetails })
//     .then((res) => callback(null, res))
//     .catch((err) => new Error(JSON.stringify(err)));
// };

// const del = (args, callback) => {
//   Assignment.deleteOne(args.assignmentQueries)
//     .then((res) => callback(null, res))
//     .catch((err) => new Error(JSON.stringify(err)));
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