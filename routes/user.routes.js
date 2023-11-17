import express from "express";
import { Register, testHandler, deleteAllUsers } from "../controllers/user-controller.js";

const router = express.Router()

router.get("/test", testHandler);
router.post("/register", Register)
router.delete("/delete", deleteAllUsers)

export default router;