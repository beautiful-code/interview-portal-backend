import Exam from "./model";

const InsertExam = async payload => {
  return new Promise((resolve, reject) => {
    return Exam.create(payload, (error, _) => {
      if (error != null) {
        return reject(error);
      }
      return resolve("Exam Created Successfully");
    });
  });
};

const fetchExams = async () => {
  return Exam.find({})
    .then(docs => docs)
    .catch(err => err);
};

const UpdateExamData = async payload => {
  const { id, body } = payload;
  const filter = { _id: id };
  return new Promise((resolve, reject) => {
    return Exam.findOneAndUpdate(
      filter,
      body,
      { new: true, upsert: true, setDefaultsOnInsert: true },
      (error, docs) => {
        if (error != null) {
          return reject(error);
        }
        return resolve("Exam updated successfully");
      }
    );
  });
};

const deleteExam = payload => {
  const filter = { _id: payload };
  return new Promise((resolve, reject) => {
    return Exam.findOneAndDelete(filter, (error, docs) => {
      if (error != null) {
        return reject(error);
      }
      return resolve("Exam deleted successfully");
    });
  });
};

module.exports = {
  InsertExam,
  fetchExams,
  UpdateExamData,
  deleteExam
};
