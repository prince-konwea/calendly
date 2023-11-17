import userModel from "../model/user-model.js";
import bcrypt from "bcryptjs";


export const testHandler = (req, res) => {

 return  res.json({message:"welcome on board"})
    
}

export const Register = async (req,res) => {
    
   const {firstName,lastName, email, password}= req.body;
 let existingUser;
 try{
existingUser = await userModel.findOne({email});

 }catch(err){
   return console.log(err)
 }
 if(existingUser){
    return res.json({message: "user already exists"})
 }
const hashedPassword = bcrypt.hashSync(password)
 const user = new userModel({
   firstName, lastName, email, password: hashedPassword
 })

 try{
    await user.save()
   return res.status(201).json({user})
 }catch(err){
    return console.log(err)
 }
}

export  const deleteAllUsers = async (req, res) => {
   try{
     await userModel.deleteMany({})
     return res.status(200).json({message: "All users deleted successfully"})
   }catch(error){
     console.log(error)
     return res.status(500).json({error: "internal server error"})
   }
}