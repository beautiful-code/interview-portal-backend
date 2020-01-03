import { Router } from "express";
const route = Router();
import { create, get, update, updateByUser } from "./controller";

route.post("/", create);
route.get("/:id", get);
route.put("/:id", update);
route.put("/update/:id", updateByUser);
module.exports = route;
