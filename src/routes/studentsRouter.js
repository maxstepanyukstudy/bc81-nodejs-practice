import { Router } from "express";
import {
  getAllStudents,
  getStudentById,
  addStudent,
  deleteStudentById,
  updateStudentById,
} from "../controllers/studentsController.js";

const studentsRouter = Router();

studentsRouter.get("/", getAllStudents);
studentsRouter.get("/:id", getStudentById);
studentsRouter.post("/", addStudent);
studentsRouter.patch("/:id", updateStudentById);
studentsRouter.delete("/:id", deleteStudentById);

export default studentsRouter;
