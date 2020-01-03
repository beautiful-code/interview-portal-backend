import Joi from "joi";
import { validateJoi } from "./../../utils";

const examCreateSchema = Joi.object().keys({
  questions: Joi.array().items(
    Joi.string()
      .required()
      .length(24)
  ),
  time: Joi.number()
    .required()
    .min(1),
  role: Joi.string()
    .valid("TRAINEE", "SWE", "SSE", "Lead", "PARTNERS", "STAR")
    .required(),
  difficulty: Joi.number()
    .min(1)
    .max(5)
    .required()
});

const validateCreatePayload = async payload => {
  return await validateJoi(examCreateSchema, payload);
};

module.exports = {
  validateCreatePayload
};
