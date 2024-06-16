import Postjob from "../models/postJobModel.js";


export const createUser = async(req,res)=>{
    try{
       await Postjob.create(req.body);
        res.status(201).json({msg : "User Cerated"})
        
        res.status(200).json(response);
    }catch(error){
        console.log(error.message);
    }
}