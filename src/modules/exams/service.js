import { InsertExam, fetchExams, UpdateExamData, deleteExam } from "./dal";
import { getQuestionsByIds } from "./../questions/dal";
import mongoose from "./../../connection";
import { findChild, combineObjects } from "./../../utils";

const createExam = payload => {
  const { body, userId } = payload;
  body["created_by"] = userId;
  body["updated_by"] = userId;
  return InsertExam(body)
    .then(res => res)
    .catch(err => err);
};

const getExams = async () => {
  try {
    const exams = await fetchExams();
    let questionIds = [];
    exams.forEach((exam, index) => {
      questionIds = [...questionIds, ...exam.questions];
    });
    const allquestions = questionIds.map(question =>
      mongoose.Types.ObjectId(question)
    );
    const filter = {
      $in: allquestions
    };
    const questionsData = await getQuestions(filter);
    const result = filterExams(questionsData, exams);
    return result;
  } catch (err) {
    return err;
  }
};

const filterExams = (questions, examsData) => {
  let exams = [];
  examsData.forEach(exam => {
    exam.questions.forEach(question => {
      const child = findChild(
        questions,
        "_id",
        mongoose.Types.ObjectId(question)
      );
      exam.items.push(child);
    });
    delete exam.questions;
    exams.push(exam);
  });
  return exams;
};

const getQuestions = async filter => {
  return getQuestionsByIds(filter)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

const updateExam = async payload => {
  const { body, userId, id } = payload;
  body["updated_by"] = userId;
  return UpdateExamData({ body, id })
    .then(res => res)
    .catch(err => err);
};

const deleteExamById = async payload =>
  deleteExam(payload)
    .then(res => res)
    .catch(err => err);

module.exports = {
  createExam,
  getExams,
  updateExam,
  deleteExamById
};
