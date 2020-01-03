import { getJoiError, handleResponse } from "./../../utils";
import { getUserData, updateData } from "./service";
const get = (req, res) => {
  const {
    params: { id }
  } = req;
  handleResponse(res, getUserData, { id });
};

const update = (req, res) => {
  const {
    params: { id },
    body
  } = req;
  handleResponse(res, updateData, { id, body });
};

module.exports = { get, update };
