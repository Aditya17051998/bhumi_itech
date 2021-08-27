const mongoose=require('mongoose');
const { Schema, SchemaTypes, model } = mongoose;


const AdminSchema = new Schema(
    {
      email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
      },
      password: {
        type: String,
        trim: true,
      },
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
   
    },
    { timestamps: true }
  );
  

  module.exports=model("admins",AdminSchema);