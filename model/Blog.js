import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const blogSchema = new Schema({
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
    
});


export default mongoose.model("Blog", blogSchema);