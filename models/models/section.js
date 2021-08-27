// require('../lib/dbHelper');
// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const sectionSchema = new Schema({
//     courseId: {
//         type: Schema.Types.ObjectId,
//         ref: "courses",
//         required: true
//     },
//     number: {
//         type: Number
//     },
//     title: {
//         type: String
//     },
//     lectures: [
//         {
//             type: Schema.Types.ObjectId,
//             ref: "lectures"
//         },
//     ],
//     assignments: [
//         {
//             type: Schema.Types.ObjectId,
//             ref: "assignments"
//         }
//     ],
//     publicKey: {
//         type: String,
//         required: true
//     }
// });

// const Section = mongoose.model("sections", sectionSchema);

// const addMultiple = (args, callback) => {
//     Section.insertMany(args.sectionDetails, { ordered: false })
//         .then((res) => callback(null, res))
//         .catch((err) => new Error(JSON.stringify(err)));
// };

// const find = (args, callback) => {
//     Section.find(args.sectionQueries)
//         .populate("lectures")
//         .populate("assignments")
//         .then((res) => callback(null, res))
//         .catch((err) => new Error(JSON.stringify(err)));
// };

// const findOne = (args, callback) => {
//     Section.findOne(args.sectionQueries)
//         .then((res) => callback(null, res))
//         .catch((err) => new Error(JSON.stringify(err)));
// };

// const update = (args, callback) => {
//     Section.updateMany(args.sectionQueries, { $set: args.sectionDetails })
//         .then((res) => callback(null, res))
//         .catch((err) => new Error(JSON.stringify(err)));
// };

// const join = (args, callback) => {
//     Section.updateMany(args.sectionQueries, { $addToSet: args.sectionDetails })
//         .then((res) => callback(null, res))
//         .catch((err) => new Error(JSON.stringify(err)));
// };

// const remove = (args, callback) => {
//     Section.updateMany(args.sectionQueries, { $pull: args.sectionDetails })
//         .then((res) => callback(null, res))
//         .catch((err) => new Error(JSON.stringify(err)));
// };

// const del = (args, callback) => {
//     Section.deleteOne(args.sectionQueries)
//         .then((res) => callback(null, res))
//         .catch((err) => new Error(JSON.stringify(err)));
// };

// module.exports = {
//     addMultiple,
//     find,
//     findOne,
//     update,
//     remove,
//     join,
//     del,
// }
