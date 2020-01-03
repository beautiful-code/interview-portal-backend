import Joi from "joi";
import { validateJoi } from "./../../utils";

const createSchemaQuestion = Joi.object().keys({
  question: Joi.string().required(),
  answer: Joi.number()
    .min(1)
    .max(16)
    .when("type", {
      is: "mcq",
      then: Joi.required(),
      otherwise: Joi.optional()
    }),
  questionType: Joi.string()
    .valid("mcq", "program")
    .required(),
  options: Joi.array()
    .items(
      Joi.object().keys({
        option: Joi.string().required(),
        option_id: Joi.number()
          .min(1)
          .max(16)
          .required()
      })
    )
    .when("type", {
      is: "mcq",
      then: Joi.required(),
      otherwise: Joi.optional()
    }),
  testCases: Joi.array()
    .items(
      Joi.object().keys({
        input: Joi.alternatives()
          .try(Joi.string(), Joi.number(), Joi.object(), Joi.array())
          .required(),
        output: Joi.alternatives()
          .try(Joi.string(), Joi.number(), Joi.object(), Joi.array())
          .required(),
        timeComplexity: Joi.number().optional(),
        hidden: Joi.boolean().required()
      })
    )
    .when("type", {
      is: "program",
      then: Joi.required(),
      otherwise: Joi.optional()
    })
});

const updateSchema = Joi.object().keys({
  id: Joi.string()
    .required()
    .length(24),
  body: Joi.object().keys({
    question: Joi.string().required(),
    answer: Joi.number()
      .min(1)
      .max(16)
      .when("type", {
        is: "mcq",
        then: Joi.required(),
        otherwise: Joi.optional()
      }),
    questionType: Joi.string()
      .valid("mcq", "program")
      .required(),
    options: Joi.array()
      .items(
        Joi.object().keys({
          option: Joi.string().required(),
          option_id: Joi.number()
            .min(1)
            .max(16)
            .required()
        })
      )
      .when("type", {
        is: "mcq",
        then: Joi.required(),
        otherwise: Joi.optional()
      }),
    testCases: Joi.array()
      .items(
        Joi.object().keys({
          input: Joi.alternatives()
            .try(Joi.string(), Joi.number(), Joi.object(), Joi.array())
            .required(),
          output: Joi.alternatives()
            .try(Joi.string(), Joi.number(), Joi.object(), Joi.array())
            .required(),
          timeComplexity: Joi.number().optional(),
          hidden: Joi.boolean().required()
        })
      )
      .when("type", {
        is: "program",
        then: Joi.required(),
        otherwise: Joi.optional()
      })
  })
});

const fetchSchemaQuestion = Joi.object().keys({
  type: Joi.string()
    .valid("mcq", "program", "")
    .required()
});

const deleteSchemaQuestion = Joi.string()
  .length(24)
  .required();

const validateCreateQuestion = async payload => {
  return await validateJoi(createSchemaQuestion, payload);
};

const validateFetchQuestion = async payload => {
  return await validateJoi(fetchSchemaQuestion, payload);
};

const validateUpdateQuestion = async payload => {
  return await validateJoi(updateSchema, payload);
};

const validateDeleteQuestion = async payload => {
  return await validateJoi(deleteSchemaQuestion, payload);
};

module.exports = {
  validateCreateQuestion,
  validateFetchQuestion,
  validateUpdateQuestion,
  validateDeleteQuestion
};
