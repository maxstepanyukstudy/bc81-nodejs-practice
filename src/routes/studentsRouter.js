import { Router } from "express";
import { Student } from "../models/student.js";

const studentsRouter = Router();

studentsRouter.get("/students", async (req, res) => {
  const students = await Student.find();
  res.status(200).json(students);
});

studentsRouter.get("/students/:id", async (req, res) => {
  const { id } = req.params;
  const student = await Student.findById(id);
  if (!student) {
    // // common version
    // return res.status(404).json({
    //   message: "Student not found",
    // });
    // step-by-step version
    res.status(404).json({
      message: "Student not found",
    });
    return; // stop function
  }

  res.status(200).json(student);
});

export default studentsRouter;
