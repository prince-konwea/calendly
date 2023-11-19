import { Router } from "express";
import msgRouter from "./message.routes.js";
import userRouter from "./user.routes.js";

const routes = Router()

routes.use("/users", userRouter)
routes.use("/message", msgRouter)

export default routes;