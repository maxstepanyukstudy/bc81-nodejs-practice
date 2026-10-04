import { model, Schema } from "mongoose";
import { genderList } from "../constants/genderConstants.js";

const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      require: true,
    },
    gender: {
      type: String,
      required: true,
      enum: genderList,
    },
    avgMark: {
      type: Number,
      require: true,
    },
    onDuty: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const Student = model("Student", studentSchema);
