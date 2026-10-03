import { Router } from "express";
import {
  getStudentById,
  addStudent,
  deleteStudentById,
  updateStudentById,
  getStudents,
} from "../controllers/studentsController.js";
import { celebrate } from "celebrate";
import {
  createStudentSchema,
  getStudentsSchema,
  studentIdParamSchema,
  updateStudentSchema,
} from "../validations/studentsValidation.js";

const studentsRouter = Router();

studentsRouter.get("/", celebrate(getStudentsSchema), getStudents);
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
