import Joi from "joi";
import _ from "loadsh";
const MailService = require("@sendgrid/mail");
console.log("key", process.env.SENDGRID);
MailService.setApiKey(
  "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"
);

const getJoiError = error => {
  if (error === null) {
    return "Something went wrong, Please try again";
  }
  return error.details[0].message;
};

const handleResponse = (res, callback, payload) => {
  callback(payload)
    .then(response => {
      res.send({ statusCode: 201, data: response });
    })
    .catch(err => {
      res.send({ statusCode: 422, error: err });
    });
};

const validateJoi = async (schema, payload) => {
  return await Joi.validate(payload, schema, (err, value) => [value, err]);
};

const findChild = (parent, key, value) => {
  return _.find(parent, [key, value]);
};

const combineObjects = async (obj1, obj2) => {
  return new Promise((resolve, reject) => {
    return resolve(Object.assign({}, obj1, obj2));
  });
};

const triggerEmail = async msg => {
  MailService.send(msg)
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
};

module.exports = {
  getJoiError,
  handleResponse,
  validateJoi,
  findChild,
  combineObjects,
  triggerEmail
};
