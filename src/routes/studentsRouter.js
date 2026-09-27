import { Router } from "express";
import {
  getAllStudents,
  getStudentById,
  addStudent,
  deleteStudentById,
} from "../controllers/studentsController.js";

const studentsRouter = Router();

studentsRouter.get("/", getAllStudents);
studentsRouter.get("/:id", getStudentById);
studentsRouter.post("/", addStudent);
studentsRouter.delete("/:id", deleteStudentById);

export default studentsRouter;
