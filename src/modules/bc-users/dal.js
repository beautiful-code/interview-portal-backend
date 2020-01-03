import BcUsers from "./model";

const upsert = async payload => {
  const { email, name, token, refreshToken } = payload;
  const filter = { email };
  const update = { name, token, refreshToken };

  return BcUsers.findOneAndUpdate(filter, update, {
    new: true,
    upsert: true
  })
    .then(res => res)
    .catch(err => err);
};

module.exports = { upsert };
