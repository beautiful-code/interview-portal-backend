import { Router } from "express";
import passport from "passport";
import { redirect } from "./controller";
const route = Router();

route.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
route.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/", session: false }),
  redirect
);

module.exports = route;
