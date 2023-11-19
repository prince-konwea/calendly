import express from "express";
import { Register, testHandler, deleteAllUsers } from "../controllers/user-controller.js";
import { validation } from "../middlewares/validationMiddleware.js";
import { userSchema } from "../validation/userValidation.js";

const userRouter = express.Router()

userRouter.get("/test", testHandler);
userRouter.post("/register",validation(userSchema), Register)
userRouter.delete("/delete", deleteAllUsers)

export default userRouter;