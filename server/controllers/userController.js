import User from "../models/userModel.js";

export const getUsers = async(req,res)=>{
    try{
        const response = await User.findAll();
        res.status(200).json(response);
    }catch(error){
        console.log(error.message);
    }
}
export const getUserById = async(req,res)=>{
    try{
        const response = await User.findOne({
            where:{
                id:req,params,id
            }
        });
        res.status(200).json(response);
    }catch(error){
        console.log(error.message);
    }
}
export const createUser = async(req,res)=>{
    try{
       await User.create(req.body);
        res.status(201).json({msg : "User Cerated"})
        
        res.status(200).json(response);
    }catch(error){
        console.log(error.message);
    }
}
export const updateUser = async(req,res)=>{
    try{
       await User.update(req.body,{
        where:{
            id:req.params.id
        }
       });
        
        res.status(200).json({msg: " user update at"});
    }catch(error){
        console.log(error.message);
    }
}
export const deleteUser = async(req,res)=>{
    try{
       await User.destroy(req.body,{
        where:{
            id:req.params.id
        }
       });
        
        res.status(200).json({msg: " user Delete"});
    }catch(error){
        console.log(error.message);
    }
}


