import { upsert } from "./dal";
const updateUserData = async payload => {
  return upsert(payload)
    .then(res => res)
    .catch(err => err);
};

module.exports = { updateUserData };
