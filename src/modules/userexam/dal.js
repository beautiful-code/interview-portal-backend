import UserExam from "./model";

const createExam = payload => {
  return UserExam.create(payload)
    .then(doc => doc)
    .catch(err => err);
};

const getDataById = async _id => {
  return UserExam.find({ _id })
    .then(docs => docs)
    .catch(err => err);
};

const update = async ({ id, body }) => {
  const filter = { _id: id };
  console.log("data", id, body);
  return UserExam.findOneAndUpdate(filter, body, {
    new: true,
    upsert: true,
    setDefaultsOnInsert: true
  })
    .then(doc => "Data updated successfully")
    .catch(err => "Something went wrong");
};

module.exports = { createExam, getDataById, update };
