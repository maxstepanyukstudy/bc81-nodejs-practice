import { Joi, Segments } from "celebrate";
import { objectIdValidator } from "./objectIdValidator.js";
import {
  PER_PAGE_DEFAULT,
  PER_PAGE_MAX,
  PER_PAGE_MIN,
} from "../constants/paginationConstants.js";
import { genderList } from "../constants/genderConstants.js";
import {
  SORT_FIELD_DEFAULT,
  SORT_ORDER_DEFAULT,
  SORT_ORDERS,
} from "../constants/sortConstants.js";
import { studentSortFields } from "../models/student.js";

const studentNameJoiMessages = {
  "string.base": "Name must be a string",
  "string.min": "Name should have at least {#limit} characters",
  "string.max": "Name should have at most {#limit} characters",
  "any.required": "Name is required",
};
const studentAgeJoiMessages = {
  "number.base": "Age must be a number",
  "number.min": "Age must be at least {#limit}",
  "number.max": "Age must be at most {#limit}",
  "any.required": "Age is required",
};
const studentGenderJoiMessages = {
  "any.only": "Gender must be one of: male, female, or other",
  "any.required": "Gender is required",
};
const studentAvgMarkJoiMessages = {
  "number.base": "Average mark must be a number",
  "number.min": "Average mark must be at least {#limit}",
  "number.max": "Average mark must be at most {#limit}",
  "any.required": "Average mark is required",
};
const studentOnDutyJoiMessages = {
  "boolean.base": "onDuty must be a boolean value",
};

export const studentIdParamSchema = {
  [Segments.PARAMS]: Joi.object({
    id: Joi.string().custom(objectIdValidator).required(),
  }),
};

export const getStudentsSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    perPage: Joi.number()
      .integer()
      .min(PER_PAGE_MIN)
      .max(PER_PAGE_MAX)
      .default(PER_PAGE_DEFAULT),
    gender: Joi.string().valid(...genderList),
    minAvgMark: Joi.number().positive(),
    search: Joi.string().trim().allow(""),
    sortOrder: Joi.string()
      .valid(...SORT_ORDERS)
      .default(SORT_ORDER_DEFAULT),
    sortBy: Joi.string()
      .valid(...studentSortFields)
      .default(SORT_FIELD_DEFAULT),
  }),
};

export const createStudentSchema = {
  [Segments.BODY]: Joi.object({
    name: Joi.string()
      .min(3)
      .max(30)
      .required()
      .messages(studentNameJoiMessages),
    age: Joi.number()
      .integer()
      .min(12)
      .max(65)
      .required()
      .messages(studentAgeJoiMessages),
    gender: Joi.string()
      .valid(...genderList)
      .required()
      .messages(studentGenderJoiMessages),
    avgMark: Joi.number()
      .min(2)
      .max(12)
      .required()
      .messages(studentAvgMarkJoiMessages),
    onDuty: Joi.boolean().messages(studentOnDutyJoiMessages),
  }),
};

export const updateStudentSchema = {
  [Segments.PARAMS]: Joi.object({
    id: Joi.string().custom(objectIdValidator).required(),
  }),
  [Segments.BODY]: Joi.object({
    name: Joi.string().min(3).max(30).messages(studentAgeJoiMessages),
    age: Joi.number().integer().min(12).max(65).messages(),
    gender: Joi.string()
      .valid(...genderList)
      .messages(studentGenderJoiMessages),
    avgMark: Joi.number().min(2).max(12).messages(studentAvgMarkJoiMessages),
    onDuty: Joi.boolean().messages(studentOnDutyJoiMessages),
  }),
};
