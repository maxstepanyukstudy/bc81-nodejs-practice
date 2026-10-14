import { Router } from "express";
import { celebrate } from "celebrate";
import {
  loginUser,
  logoutUser,
  refreshUserSession,
  registerUser,
  requestResetEmail,
} from "../controllers/authController.js";
import {
  loginUserSchema,
  registerUserSchema,
  requestResetEmailSchema,
} from "../validations/authValidation.js";

const authRouter = Router();

authRouter.post("/register", celebrate(registerUserSchema), registerUser);
authRouter.post("/login", celebrate(loginUserSchema), loginUser);
authRouter.post("/logout", logoutUser);
authRouter.post("/refresh", refreshUserSession);

authRouter.post(
  "/request-reset-email",
  celebrate(requestResetEmailSchema),
  requestResetEmail,
);

export default authRouter;
