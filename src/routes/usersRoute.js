import { Router } from "express";
import {
  addUser,
  getAllUsers,
  getUserById,
} from "../controllers/userControllers.js";

const usersRouter = Router();

usersRouter.get("/", getAllUsers);
usersRouter.get("/:userId", getUserById);
usersRouter.post("/", addUser);

export default usersRouter;
