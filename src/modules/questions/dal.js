import Questions from "./model";

const addQuestion = async payload => {
  return new Promise((resolve, reject) => {
    return Questions.create(payload, (error, _) => {
      if (error != null) {
        return reject(error);
      }
      return resolve("Question Inserted Successfully");
    });
  });
};

const getQuestions = async payload => {
  const filter = payload === "" ? {} : { questionType: `${payload}` };
  return new Promise((resolve, reject) => {
    return Questions.find(filter, (error, docs) => {
      if (error != null) {
        return reject(error);
      }
      return resolve(docs);
    });
  });
};

const getQuestionsByIds = async payload => {
  const filter = payload === "" ? {} : { _id: payload };
  return new Promise((resolve, reject) => {
    return Questions.find(filter, (error, docs) => {
      if (error != null) {
        return reject(error);
      }
      return resolve(docs);
    });
  });
};

const updateQuestion = async payload => {
  const { id, body } = payload;
  const filter = { _id: id };
  return new Promise((resolve, reject) => {
    return Questions.findOneAndUpdate(
      filter,
      body,
      { new: true, upsert: true, setDefaultsOnInsert: true },
      (error, docs) => {
        if (error != null) {
          return reject(error);
        }
        return resolve("Question updated successfully");
      }
    );
  });
};

const deleteQuestion = payload => {
  const filter = { _id: payload };
  return new Promise((resolve, reject) => {
    return Questions.findOneAndDelete(filter, (error, docs) => {
      if (error != null) {
        return reject(error);
      }
      return resolve("Question is deleted successfully");
    });
  });
};

module.exports = {
  addQuestion,
  getQuestions,
  updateQuestion,
  deleteQuestion,
  getQuestionsByIds
};
