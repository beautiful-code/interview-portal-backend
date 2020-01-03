import { version } from "../../package.json";
import { Router } from "express";
import questions from "../modules/questions/routes";
import exams from "../modules/exams/routes";
import auth from "../modules/bc-users/routes";
import user from "../modules/users/routes";
import usersexam from "../modules/userexam/routes";

export default ({ config, db }) => {
  let api = Router();

  api.use("/questions", questions);
  api.use("/exams", exams);
  api.use("/auth", auth);
  api.use("/user", user);
  api.use("/usersexam", usersexam);
  api.get("/", (req, res) => {
    res.json({ version });
  });
  api.get("/health", (req, res) => {
    res.json({ name: "bc-hack", version });
  });

  return api;
};
