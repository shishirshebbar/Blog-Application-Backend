import Blog from '../model/Blog.js';
import User from '../model/User.js';
import mongoose from 'mongoose';

export const getallBlogs = async(req,res,next)=>{
    let blogs;
    try{
        blogs = await Blog.find();
    }
    catch{
        return console.log(err);
    }
    if(!blogs){
        return res.status(404).json({message:"No blogs found!!"});
    }
    return res.status(200).json({blogs});
}
export const addBlog = async(req,res,next)=>{
    const {title,description,image,user} = req.body;
    let existingUser;
    try{
        existingUser = await User.findById(user);
    }catch(err){
        return console.log(err);
    }
    if(!existingUser){
        return res.status(400).json({message:"Unable to find user"});
    }
    const blog = new Blog({
        title,
        description,
        image,
        user,
    });
    try{
        const session= await mongoose.startSession();
        session.startTransaction();
        await blog.save();
        existingUser.blogs.push(blog);
        await existingUser.save({session});
        await session.commitTransaction();
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:err});
    }
    return res.status(200).json({blog});
}
export const updateBlog = async(req,res,next)=>{
    const {title,description} = req.body;
    const blogid = req.params.id;
    let blog;
    try{

    
    blog = await Blog.findByIdAndUpdate(blogid,{
        title,description
    })
    }
    catch(err){
        return console.log(err)
    }
    if(!blog){
    return res.status(500).json({message: "Cannot fullfill request"})
    }
    return res.status(200).json({blog});
}
export const getbyId = async(req,res,next)=>{
    const id = req.params.id;
    let blog;
    try{
        blog = await Blog.findById(id);
    }
    catch(err){
        return console.log(err);
    }if(!blog){
        return res.status(400).json({message:"No blog found"});
    }
    return res.status(200).json({blog});

};

export const deleteblog = async(req,res,next)=>{
    const id = req.params.id;
    let blog;
    try{
        const blog = await Blog.findByIdAndDelete(id);
        // .populate("user")
        // await blog.user.blogs.pull(blog);
        // await blog.user.save();
    }catch(err){
        return console.log(err);
    }if(!blog){
        return res.status(500).json({message:"Cannot delete the blog"});
    }
    return res.status(200).json({message:"Deleted Successfully!!"})
}

export const getbyuserId = async(req,res,next)=>{
    const userId = req.params.id;
    let userBlogs;
    try{
        userBlogs = await User.findById(userId).populate("blogs");

    }catch(err){
        return console.log(err);
    }
    if(!userBlogs){
        return res.status(404).json({message:"No blog found"});
    }
    return res.status(200).json({blogs:userBlogs});
}