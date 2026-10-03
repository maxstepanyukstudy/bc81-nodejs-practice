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
  getStudentsSchema,
  studentIdParamSchema,
  updateStudentSchema,
} from "../validations/studentsValidation.js";

const studentsRouter = Router();

studentsRouter.get("/", celebrate(getStudentsSchema), getAllStudents);
studentsRouter.get("/:id", celebrate(studentIdParamSchema), getStudentById);
studentsRouter.post("/", celebrate(createStudentSchema), addStudent);
studentsRouter.patch(
  "/:id",
  // celebrate(studentIdParamSchema),
  celebrate(updateStudentSchema),
  updateStudentById,
);
studentsRouter.delete(
  "/:id",
  celebrate(studentIdParamSchema),
  deleteStudentById,
);

export default studentsRouter;
