import { Router } from "express";
import {
  getAllStudents,
  getStudentById,
  addStudent,
  deleteStudentById,
  updateStudentById,
} from "../controllers/studentsController.js";
import { celebrate } from "celebrate";
import { createStudentSchema } from "../validations/studentsValidation.js";

const studentsRouter = Router();

studentsRouter.get("/", getAllStudents);
studentsRouter.get("/:id", getStudentById);
studentsRouter.post("/", celebrate(createStudentSchema), addStudent);
studentsRouter.patch("/:id", updateStudentById);
studentsRouter.delete("/:id", deleteStudentById);

export default studentsRouter;
