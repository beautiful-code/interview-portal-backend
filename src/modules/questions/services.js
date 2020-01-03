import {
  addQuestion,
  getQuestions,
  updateQuestion,
  deleteQuestion
} from "./dal";

const createQuestion = async payload => {
  let { body, userid } = payload;
  body["created_by"] = userid;
  body["updated_by"] = userid;
  return addQuestion(body)
    .then(res => res)
    .catch(err => {
      return err;
    });
};

const fetchQuestions = async (payload = "") => {
  return getQuestions(payload)
    .then(res => res)
    .catch(err => {
      return err;
    });
};

const updateQuestionData = async payload => {
  let { id, body, userid } = payload;
  body["updated_by"] = userid;
  return updateQuestion({ id, body })
    .then(res => res)
    .catch(err => err);
};

const deleteQuestionById = async payload =>
  deleteQuestion(payload)
    .then(res => res)
    .catch(err => err);

module.exports = {
  createQuestion,
  fetchQuestions,
  updateQuestionData,
  deleteQuestionById
};
