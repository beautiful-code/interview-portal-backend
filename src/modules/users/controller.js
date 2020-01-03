import { getJoiError, handleResponse } from "./../../utils";
import { createUser, getDetails, updateUser, updateData } from "./service";

const create = (req, res) => {
  const {
    headers: { userid }
  } = req;
  handleResponse(res, createUser, { body: req.body, userid });
};

const get = (req, res) => {
  const {
    params: { id }
  } = req;
  handleResponse(res, getDetails, { id });
};

const updateByUser = (req, res) => {
  const {
    params: { id },
    body
  } = req;
  handleResponse(res, updateUser, { id, body });
};

const update = (req, res) => {
  const {
    params: { id },
    body
  } = req;
  handleResponse(res, updateData, { id, body });
};

module.exports = { create, get, update, updateByUser };
