import mongoose from "./../../connection";

const { SchemaTypes } = mongoose;

const schema = {
  name: { type: SchemaTypes.String, required: true },
  email: { type: SchemaTypes.String, required: true },
  phone: { type: SchemaTypes.String, required: false },
  experiance: { type: SchemaTypes.String, required: false }
};
const collectionName = "users"; // Name of the collection of documents
const UsersSchema = mongoose.Schema(schema, {
  timestamps: true,
  versionKey: false
});
const Users = mongoose.model(collectionName, UsersSchema);
module.exports = Users;
