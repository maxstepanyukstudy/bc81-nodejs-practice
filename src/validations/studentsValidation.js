import { Joi } from "celebrate";

const bodySchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  age: Joi.number().integer().min(12).max(65).required(),
  gender: Joi.string().valid("male", "female", "other").required(),
  avgMark: Joi.number().min(1).max(12).required(),
  onDuty: Joi.boolean(),
});
