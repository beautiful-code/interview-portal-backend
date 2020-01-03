import { Router } from "express";
const route = Router();
import {
  create,
  retrieveQuestions,
  updateQuestion,
  deleteQuestion
} from "./controller";

route.post("/", create);
route.get("/:type?", retrieveQuestions);
route.put("/:id", updateQuestion);
route.delete("/:id", deleteQuestion);

module.exports = route;
