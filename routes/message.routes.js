import express from "express";
import { getAllMessage,
     getMessageById, 
     sendMessage, 
     updateMessage, 
     deleteMessage } from "../controllers/message.controller.js";

const msgRouter = express.Router()

msgRouter.get("/getmessage", getAllMessage)
msgRouter.get("/:id", getMessageById )
msgRouter.post("/sendMessage", sendMessage)
msgRouter.put("/:id", updateMessage)
msgRouter.delete("/deleteMessage", deleteMessage) 

export default msgRouter;