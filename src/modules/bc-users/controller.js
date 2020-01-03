import { getJoiError, handleResponse } from "./../../utils";
import { updateUserData } from "./service";

const authenticate = (req, res) => {
  passport.authenticate("google", { scope: ["profile", "email"] });
};

const redirect = async (req, res) => {
  const {
    user,
    user: { token }
  } = req;
  const data = await updateUserData(user);
  const { _id } = data;
  res.redirect(`http://localhost:3000?token=${token}&id=${_id}`);
};

module.exports = { authenticate, redirect };
