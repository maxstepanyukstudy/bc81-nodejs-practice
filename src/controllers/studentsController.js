import createHttpError from "http-errors";
import { Student } from "../models/student.js";
import { PER_PAGE_DEFAULT } from "../constants/paginationConstants.js";
import {
  SORT_FIELD_DEFAULT,
  SORT_ORDER_DEFAULT,
} from "../constants/sortConstants.js";

export async function getStudents(req, res) {
  const {
    page = 1,
    perPage = PER_PAGE_DEFAULT,
    gender,
    minAvgMark,
    search,
    sortBy = SORT_FIELD_DEFAULT,
    sortOrder = SORT_ORDER_DEFAULT,
  } = req.query;

  const skip = (page - 1) * perPage;

  const studentsQuery = Student.find(); // no await yet
  if (gender) {
    studentsQuery.where("gender").equals(gender);
  }
  if (minAvgMark) {
    studentsQuery.where("avgMark").gte(minAvgMark);
  }
  if (search) {
    studentsQuery.where({
      name: { $regex: search, $options: "i" },
    });
  }
  const [totalItems, students] = await Promise.all([
    studentsQuery.clone().countDocuments(), // .clone() because of mongoose
    studentsQuery
      .skip(skip)
      .limit(perPage)
      .sort({ [sortBy]: sortOrder }),
  ]);

  const totalPages = Math.ceil(totalItems / perPage);

  res.status(200).json({
    page,
    perPage,
    totalItems,
    totalPages,
    students,
  });
}

export async function getStudentById(req, res) {
  const { id } = req.params;
  const student = await Student.findById(id);
  // // if (!student) {
  // //   // // common version
  // //   // return res.status(404).json({
  // //   //   message: "Student not found",
  // //   // });
  // //   // step-by-step version
  // //   res.status(404).json({
  // //     message: "Student not found",
  // //   });
  // //   return; // stop function
  // // }
  // if (!student) throw new Error("Student not found");
  if (!student) throw new createHttpError(404, "Student not found");

  res.status(200).json(student);
}

export async function addStudent(req, res) {
  const student = await Student.create(req.body);
  res.status(201).json(student);
}

export async function deleteStudentById(req, res) {
  const { id } = req.params;
  // const student = await Student.findOneAndDelete({ _id: id }); // find document with these fields ie if any fields match -> delete. imo not the best option
  const student = await Student.findByIdAndDelete(id);
  if (!student) throw createHttpError(404, "Student not found");
  // res.status(204).json(); // http 204 wont send any body anyway
  res.status(200).json(student);
}

export async function updateStudentById(req, res) {
  const { id } = req.params;
  // // find by fields
  // const student = await Student.findOneAndUpdate(
  //   { _id: id },
  //   req.body,
  //   { returnDocument: "after" }, // aka after update
  // );
  const student = await Student.findByIdAndUpdate(
    id,
    req.body,
    { returnDocument: "after" }, // aka after update
  );
  if (!student) throw createHttpError(404, "Student not found");
  res.status(200).json(student);
}
