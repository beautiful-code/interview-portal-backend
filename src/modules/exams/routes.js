import { Router } from "express";
const route = Router();

import { create, fetch, update, deleteExam } from "./controller";

route.post("/", create);
route.get("/", fetch);
route.put("/:id", update);
route.delete("/:id", deleteExam);
module.exports = route;
