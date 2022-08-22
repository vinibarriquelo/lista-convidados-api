import { Router } from "express";
import UserController from "../controllers/UserController.js";

const userRouter = Router();

userRouter.post('/create', UserController.create);
userRouter.post('/login', UserController.login);

export { userRouter }
