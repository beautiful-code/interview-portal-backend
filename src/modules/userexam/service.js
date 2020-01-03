import { getDataById, update } from "./dal";
const getUserData = payload => {
  const { id } = payload;
  return getDataById(id)
    .then(data => data)
    .catch(err => err);
};

const updateData = async payload => {
  const response = await update(payload);
  return response;
};

module.exports = { getUserData, updateData };
