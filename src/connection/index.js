import mongoose from "mongoose";
const dbPath = "mongodb://localhost:27017/bc-hack";
mongoose.connect(dbPath, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", () => {
  console.log("> error occurred from the database");
});
db.once("open", () => {
  console.log("> successfully opened the database");
});
module.exports = mongoose;
