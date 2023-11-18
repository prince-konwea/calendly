import express from "express";
import { Register, testHandler, deleteAllUsers } from "../controllers/user-controller.js";
import { validation } from "../middlewares/validationMiddleware.js";
import { userSchema } from "../validation/userValidation.js";

const router = express.Router()

router.get("/test", testHandler);
router.post("/register",validation(userSchema), Register)
router.delete("/delete", deleteAllUsers)

export default router;