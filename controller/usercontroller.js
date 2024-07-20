import User from "../model/User.js";
import bcrypt from 'bcryptjs';

 export const getAllUser = async(req,res,next) => {
    let users;
    try{
        users = await User.find();
    }catch(err){
        console.log(err);
    }
    if(!users)
        {
            return res.status(404)
            .json({message:"No users found"});
        }
    return res.status(200).json({users});
};
export const signup = async(req,res,next) =>{
    const {name,email,password} = req.body;
    let existingUser;
    try{
        existingUser = await User.findOne({email})//filter
    }catch(err){
        return console.log(err);
    }
    if (existingUser){
        return res.status(400)
        .json({message: "User already exists"});
    }
    const hashedPassword = bcrypt.hashSync(password);
    const user = new User({
        name,
        email,
        password:hashedPassword,
        blogs:[],
    }); 
    
    try{
        await user.save();
    }
    catch(err){
        return console.log(err);
    }
    return res.status(201).json({user});//201 Created: This status code means that the request was successful, and the server created a new resource.
}
export const login = async(req,res,next) =>{
    const {email,password} = req.body;
    let existingUser;
    try{
        existingUser = await User.findOne({email})//filter
    }catch(err){
        return console.log(err);
    }
    if (!existingUser){
        return res.status(404)
        .json({message: "No user found"});
    }
    const PasswordCorrect = bcrypt.compareSync(password,existingUser.password);
    if(!PasswordCorrect) {
        return res.status(400).json("Correct Password");
    }
    return res.status(200).json({message:"Login Successfull"});
}
