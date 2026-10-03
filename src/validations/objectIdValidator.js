import { isValidObjectId } from "mongoose";

export function objectIdValidator(value, helpers) {
  return !isValidObjectId(value) ? helpers.message("Invalid id format") : value;
}
