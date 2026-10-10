import createHttpError from "http-errors";
import { User } from "../models/user.js";

export const registerUser = async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw createHttpError(409, "Email in use");
  }

  // todo:
  res.status(201).json({});
};
