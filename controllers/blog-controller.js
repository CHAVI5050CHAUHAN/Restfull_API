
import Blog from "../model/Blog";
import User from "../model/User";


export const getAllBlogs = async(req, res,next)=> {
    let blogs;
    try{
        blogs = await Blog.find();
    } catch (err){
        return console.log(err);
    }
    if(!blogs){

        return res.status(404).json({message:"No Blogs found"});
    }
    return res.status(200).json({blogs});
};

export const addBlog = async (req,res) => {
    const {name,email, birth,discription,address,creation_date} = req.body;

    const blog = new Blog({
        name,
        email,
        birth,
        discription,
        address,
        creation_date
    });
    
    try{
        await blog.save();

    }catch(err){
        return console.log(err);
    }
    return res.status(200).json({blog});
        
    };
   

    //Udate blog
    export const updateBlog = async (req,res,next) =>{
        const{email,address} = req.body;
        const blogId = req.params.id;
        let blog;
       try{
        blog = await Blog.findByIdAndUpdate(blogId,{
        email,
        address
        }); 
    }catch(err){
        return console.log(err);
    }
    if(!blog){
        return res.status(500).json({message: "Unable to Update the blog"});
    }
    return res.status(200).json({blog});
};


//GetId
export const getById = async (req,res) => {
    const id = req.params.id;
    let blog;
    try{
        blog = await Blog.findById(id);
    }catch(err){
        return console.log(err);
    }
    if(!blog){
        return res.status(404).json({message: "No blog Found"});
    }
    return res.status(200).json({blog});
};


//delete blog
export const deleteBlog = async(req,res) => {
    const id = req.params.id;

    let blog;
    try{
        blog = await Blog.findByIdAndRemove(id)
    }catch(err){
        console.log(err);

    }if(!blog){
        return res.status(400).json({message:"Unable to Delete"});
    }
    return res.status(200).json({message:"Succesfull delete"});
};