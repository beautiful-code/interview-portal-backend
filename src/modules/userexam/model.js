import mongoose from "../../connection";

const { SchemaTypes } = mongoose;

const schema = {
  userid: { type: SchemaTypes.String, required: true },
  examid: { type: SchemaTypes.String, required: true },
  completed: { type: SchemaTypes.Boolean, default: false },
  created_by: { type: SchemaTypes.String, required: true },
  startTime: { type: SchemaTypes.String, default: "" },
  endTime: { type: SchemaTypes.String, default: "" }
};
const collectionName = "userexam"; // Name of the collection of documents
const UserExamSchema = mongoose.Schema(schema, {
  timestamps: true,
  versionKey: false
});
const UserExam = mongoose.model(collectionName, UserExamSchema);
module.exports = UserExam;
