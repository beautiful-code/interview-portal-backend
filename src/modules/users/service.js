import { insertUser, getUser, updateByUser } from "./dal";
import { createExam } from "./../userexam/dal";
import { triggerEmail } from "./../../utils";
import getUserExamTemplate from "./../../templates/user-exam";

const createUser = async payload => {
  const {
    body,
    body: { email },
    userid
  } = payload;
  body["created_by"] = userid;
  const { examid } = body;
  delete body.examid;
  try {
    const user = await insertUser(body);
    const { _id } = user;
    const examData = { userid: _id, examid: examid, created_by: userid };
    const exam = await createExam(examData);
    const id = exam._id;
    const res = await sendMail({ email, id });
    return res;
  } catch (exe) {
    return "Something went wrong";
  }
};

const sendMail = async ({ email, id }) => {
  const msg = {
    to: email,
    html: getUserExamTemplate(id),
    from: "karthik@beautifulcode.in",
    subject: "Beautiful code Round 1: Programming"
  };
  const res = await triggerEmail(msg);
  return res;
};

const getDetails = async ({ id }) => {
  const res = await getUser({ id });
  return res;
};

const updateUser = async payload => {
  const response = await updateByUser(payload);
  return response;
};

const updateData = async ({ id, body }) => {};
module.exports = { createUser, getDetails, updateUser, updateData };
