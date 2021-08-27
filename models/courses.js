const mongoose=require('mongoose');


const courseSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String
    },
    photo:{
        type:String
    },
    postBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"admins"
    }
})
module.exports=mongoose.model("courses",courseSchema);