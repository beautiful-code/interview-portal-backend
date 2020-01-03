import { validateCreatePayload } from "./validations";
import { createExam, getExams, updateExam, deleteExamById } from "./service";
import { getJoiError, handleResponse } from "./../../utils";

const create = async (req, res) => {
  const { body, headers } = req;
  const [value, validation] = await validateCreatePayload(body);
  if (validation == null) {
    handleResponse(res, createExam, { body, userId: headers["userid"] });
  } else {
    res.send({ statusCode: 400, error: getJoiError(validation) });
  }
};

const fetch = async (req, res) => {
  handleResponse(res, getExams);
};

const update = async (req, res) => {
  const { body, headers, params } = req;
  const [value, validation] = await validateCreatePayload(body);
  if (validation == null) {
    handleResponse(res, updateExam, {
      body,
      userId: headers["userid"],
      id: params["id"]
    });
  } else {
    res.send({ statusCode: 400, error: getJoiError(validation) });
  }
};

const deleteExam = async (req, res) => {
  const {
    params: { id }
  } = req;
  handleResponse(res, deleteExamById, id);
};

module.exports = {
  create,
  fetch,
  update,
  deleteExam
};
