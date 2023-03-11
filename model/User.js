import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Creating Schema

const userSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    birth: {
        type:String,
        required:true
    },
    address: {
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
        
    },
    creation_date:{
        type:String,
        required:true

    },
     email:{
        type:String,
        required:true,
        unique:true

    },
    blogs:[{type: mongoose.Types.ObjectId,ref:"Blog",required:true}],

});
// Export collection

export default mongoose.model("User",userSchema);

