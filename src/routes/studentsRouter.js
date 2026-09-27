import { Router } from "express";
import {
  getAllStudents,
  getStudentById,
} from "../controllers/studentsController.js";

const studentsRouter = Router();

studentsRouter.get("/", getAllStudents);
studentsRouter.get("/:id", getStudentById);

export default studentsRouter;
