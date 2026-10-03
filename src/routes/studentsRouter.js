import { Router } from "express";
import {
  getAllStudents,
  getStudentById,
  addStudent,
  deleteStudentById,
  updateStudentById,
} from "../controllers/studentsController.js";
import { celebrate } from "celebrate";
import {
  createStudentSchema,
  studentIdParamSchema,
} from "../validations/studentsValidation.js";

const studentsRouter = Router();

studentsRouter.get("/", getAllStudents);
studentsRouter.get("/:id", celebrate(studentIdParamSchema), getStudentById);
studentsRouter.post("/", celebrate(createStudentSchema), addStudent);
studentsRouter.patch(
  "/:id",
  celebrate(studentIdParamSchema),
  updateStudentById,
);
studentsRouter.delete(
  "/:id",
  celebrate(studentIdParamSchema),
  deleteStudentById,
);

export default studentsRouter;
