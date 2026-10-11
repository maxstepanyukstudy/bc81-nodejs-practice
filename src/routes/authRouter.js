import { Router } from "express";
import { celebrate } from "celebrate";
import {
  loginUser,
  logoutUser,
  refreshUserSession,
  registerUser,
} from "../controllers/authController.js";
import {
  loginUserSchema,
  registerUserSchema,
} from "../validations/authValidation.js";

const authRouter = Router();

authRouter.post("/register", celebrate(registerUserSchema), registerUser);
authRouter.post("/login", celebrate(loginUserSchema), loginUser);
authRouter.post("/logout", logoutUser);
authRouter.post("/refresh", refreshUserSession);

export default authRouter;
