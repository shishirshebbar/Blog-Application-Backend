import express from "express";
import { getallBlogs,addBlog,updateBlog,getbyId,deleteblog, getbyuserId } from "../controller/blogcontroller.js";


const blogrouter = express.Router();

blogrouter.get("/",getallBlogs);
blogrouter.post("/add",addBlog);
blogrouter.put("/update/:id",updateBlog);
blogrouter.get("/:id",getbyId);
blogrouter.delete("/:id",deleteblog);
blogrouter.get('/user/:id',getbyuserId)

export default blogrouter; 