import mongoose from "./../../connection";

const { SchemaTypes } = mongoose;

const schema = {
  name: { type: SchemaTypes.String, required: true },
  email: { type: SchemaTypes.String, required: true },
  token: { type: SchemaTypes.String, required: true },
  refreshToken: { type: SchemaTypes.String, required: true }
};
const collectionName = "bc-users"; // Name of the collection of documents
const bcUsersSchema = mongoose.Schema(schema, {
  timestamps: true,
  versionKey: false
});
const BcUsers = mongoose.model(collectionName, bcUsersSchema);
module.exports = BcUsers;
