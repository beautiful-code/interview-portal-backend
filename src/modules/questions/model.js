import mongoose from "./../../connection";

const { SchemaTypes } = mongoose;

const testCasesSchema = mongoose.Schema({
  input: { type: SchemaTypes.Mixed, required: true },
  output: { type: SchemaTypes.Mixed, required: true },
  timeComplexity: { type: SchemaTypes.Number, required: true },
  hidden: { type: SchemaTypes.Boolean, required: true }
});

const optionsSchema = mongoose.Schema({
  option: { type: SchemaTypes.String, required: true },
  option_id: { type: SchemaTypes.Number, required: true }
});

const schema = {
  question: { type: SchemaTypes.String, required: true },
  answer: { type: SchemaTypes.Number, required: false },
  questionType: { type: SchemaTypes.String, required: true },
  options: [optionsSchema],
  testCases: [testCasesSchema],
  created_by: { type: SchemaTypes.String, required: true },
  updated_by: { type: SchemaTypes.String, required: true }
};
const collectionName = "questions"; // Name of the collection of documents
const questionsSchema = mongoose.Schema(schema, {
  timestamps: true,
  versionKey: false
});
const Questions = mongoose.model(collectionName, questionsSchema);
module.exports = Questions;
