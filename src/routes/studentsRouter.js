import { Router } from "express";
import {
  getAllStudents,
  getStudentById,
  addStudent,
} from "../controllers/studentsController.js";

const studentsRouter = Router();

studentsRouter.get("/", getAllStudents);
studentsRouter.get("/:id", getStudentById);
studentsRouter.post("/", addStudent);

export default studentsRouter;
