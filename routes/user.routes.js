import express from "express";
import { Register, testHandler, deleteAllUsers } from "../controllers/user-controller.js";
import {validateUserInput} from "../validation/userInput.js";

const router = express.Router()

router.get("/test", testHandler);
router.post("/register", validateUserInput, Register)
router.delete("/delete", deleteAllUsers)

export default router;