import { Student } from "../models/student.js";

export async function getAllStudents(req, res) {
  const students = await Student.find();
  res.status(200).json(students);
}

export async function getStudentById(req, res) {
  const { id } = req.params;
  const student = await Student.findById(id);
  // if (!student) {
  //   // // common version
  //   // return res.status(404).json({
  //   //   message: "Student not found",
  //   // });
  //   // step-by-step version
  //   res.status(404).json({
  //     message: "Student not found",
  //   });
  //   return; // stop function
  // }
  if (!student) throw new Error("Student not found");

  res.status(200).json(student);
}
