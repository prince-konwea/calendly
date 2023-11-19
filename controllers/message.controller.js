import messageModel from "../model/message.model.js";

export const getAllMessage = async (req, res) => {
    
    try{
         console.log("still developing function")
    }catch(error){
        return res.status(400).json({error})
    }
}

export const getMessageById = async (req, res) => {
    try{
       console.log("got message by id")
    }catch(error){
        return res.status(400).json({error})
    }
}
export const sendMessage = async (req, res) => {
    const {message} = req.body
    try {
      const msg = new messageModel({
        message
      })
      await msg.save()
      return res.status(200).json({msg})
    } catch (error) {
        return res.status(400).json({error})
    }
}

export const updateMessage = async (req, res) => {
    try{
         console.log("Edited a message")
    }catch(error){
        return res.status(400).json({error})
    }
}

export const deleteMessage = async (req, res) => {
    try{
        console.log("deleted a message")
    }catch(error){
        return res.status(400).json({error})
    }
}
