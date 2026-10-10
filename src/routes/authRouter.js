import { Router } from "express";
import { celebrate } from "celebrate";
import { loginUser, registerUser } from "../controllers/authController.js";
import {
  loginUserSchema,
  registerUserSchema,
} from "../validations/authValidation.js";

const authRouter = Router();

authRouter.post("/register", celebrate(registerUserSchema), registerUser);
authRouter.post("/login", celebrate(loginUserSchema), loginUser);

export default authRouter;
