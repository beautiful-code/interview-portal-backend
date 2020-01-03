import mongoose from "./../../connection";

const { SchemaTypes } = mongoose;

const schema = {
  questions: [
    {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "questions"
    }
  ],
  time: { type: SchemaTypes.Number, required: true },
  role: { type: SchemaTypes.String, required: true },
  difficulty: { type: SchemaTypes.String, required: true },
  created_by: { type: SchemaTypes.String, required: true },
  updated_by: { type: SchemaTypes.String, required: true },
  items: [] // need to find a way to remove this and add it in service file
};
const collectionName = "exams"; // Name of the collection of documents
const examsSchema = mongoose.Schema(schema, {
  timestamps: true,
  versionKey: false
});
const Exams = mongoose.model(collectionName, examsSchema);
module.exports = Exams;
