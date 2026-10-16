import { Router } from "express";
import { celebrate } from "celebrate";
import {
  loginUser,
  logoutUser,
  refreshUserSession,
  registerUser,
  requestResetEmail,
  resetPassword,
} from "../controllers/authController.js";
import {
  loginUserSchema,
  registerUserSchema,
  requestResetEmailSchema,
  resetPasswordSchema,
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

authRouter.post(
  "/auth/reset-password",
  celebrate(resetPasswordSchema),
  resetPassword,
);

export default authRouter;
