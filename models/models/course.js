// require('../lib/dbHelper');
// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const courseSchema = new Schema(
//     {
//         thumbnail: {
//             type: String
//         },
//         title: {
//             type: String,
//             required: true,
//         },
//         description: {
//             type: String,
//             default: "Become an expert today.",
//         },
//         courseCode: {
//             type: String,
//             required: true
//         },
//         outline: {
//             type: String,
//         },
//         duration: {
//             type: String,
//             default: "0 Hours",
//         },
//         sections: [
//             {
//                 type: Schema.Types.ObjectId,
//                 ref: "sections",
//             },
//         ],
//         prerequisites: {
//             type: Schema.Types.String,
//         },
//         author:
//         {
//             userId: {
//                 type: Schema.Types.ObjectId,
//                 ref: "users",
//             },
//             publicKey: {
//                 type: String,
//             },
//             userProfile: {
//                 type: Schema.Types.ObjectId,
//                 ref: "userProfiles",
//             },
//         },
//         category: {
//             type: String,
//         },
//         welcomeMessage: {
//             type: String
//         },
//         conpletionMessage: {
//             type: String
//         },
//         isDraft: {
//             type: Schema.Types.Boolean,
//             default: false,
//         },
//         students: [
//             {
//                 type: Schema.Types.ObjectId,
//                 ref: "users",
//             },
//         ],
//         publicKey: {
//             type: String,
//             required: true
//         }
//     },
//     {
//         timestamps: {
//             createdAt: "createdAt",
//             updatedAt: "updatedAt",
//         },
//     }
// );

// const Course = mongoose.model("courses", courseSchema);

// const populateAllFields = (query) =>
//     query
//         .populate({
//             path: "sections",
//             populate: {
//                 path: "lectures",
//                 model: "lectures",
//             },
//         })
//         .populate("authors.userId", "-password")
//         .populate("authors.userProfile")
//         .populate("category")
//         .populate("subCategory")
//         .populate("ratings.userId", "-password")
//         .exec();

// const addMultiple = (args, callback) => {
//     Course.insertMany(args.courseDetails, { ordered: false })
//         .then((res) => callback(null, res))
//         .catch((err) => new Error(JSON.stringify(err)));
// };

// const find = (args, callback) => {
//     Course.find(args.courseQueries)
//         .populate("author.userProfile", 'name')
//         .then((res) => callback(null, res))
//         .catch((err) => new Error(JSON.stringify(err)));
// };

// const findOne = (args, callback) => {
//     Course.findOne(args.courseQueries)
//         .populate("author.userProfile", 'name')
//         .then((res) => callback(null, res))
//         .catch((err) => new Error(JSON.stringify(err)));
// };

// const update = (args, callback) => {
//     Course.updateMany(args.courseQueries, { $set: args.courseDetails })
//         .then((res) => callback(null, res))
//         .catch((err) => new Error(JSON.stringify(err)));
// };

// const join = (args, callback) => {
//     Course.updateMany(args.courseQueries, { $addToSet: args.courseDetails })
//         .then((res) => callback(null, res))
//         .catch((err) => new Error(JSON.stringify(err)));
// };

// const remove = (args, callback) => {
//     Course.updateMany(args.courseQueries, { $pull: args.courseDetails })
//         .then((res) => callback(null, res))
//         .catch((err) => new Error(JSON.stringify(err)));
// };

// const del = (args, callback) => {
//     Course.deleteOne(args.courseQueries)
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
