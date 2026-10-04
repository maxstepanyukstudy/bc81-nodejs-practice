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

export const studentSortFields = ["_id", "name", "age", "avgMark"];

studentSchema.index({ gender: 1, avgMark: 1 }); // compound index

export const Student = model("Student", studentSchema);
