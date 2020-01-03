const { OAuth2Client } = require("google-auth-library");

const oAuth2Client = new OAuth2Client(
  "184436333386-3053thg17jd8burgu5s1i0l83psfd28l.apps.googleusercontent.com",
  "uv5UTv9xjtd2V4mbByKLVtZG",
  "http://localhost:1763/api/auth/google/callback"
);

const isAuthenticated = async accessToken => {
  return oAuth2Client
    .getTokenInfo(accessToken)
    .then(res => {
      const { exp } = res;
      const moment = Math.floor(Date.now() / 1000);
      if (moment < exp) {
        return true;
      }
      return false;
    })
    .catch(err => {
      return false;
    });
};

module.exports = async function(req, res, next) {
  const {
    headers: { authorization }
  } = req;
  if (
    req.path.includes("api/auth/google") ||
    req.path.includes("api-docs") ||
    req.path.includes("health") ||
    req.path.includes("favicon.ico") ||
    req.path.includes("api/user/update") ||
    req.path.includes("api/user/submit") ||
    req.path.includes("api/usersexam/update")
  ) {
    return next();
  }
  try {
    const isValid = await isAuthenticated(authorization);
    if (req.headers["authorization"]) {
      if (isValid) {
        return next();
      } else {
        res.send({
          statusCode: 401,
          data: "Unauthorized user, Please login"
        });
      }
    } else {
      res.send({ statusCode: 401, data: "Authorization header is required" });
    }
  } catch (error) {
    res.send({
      statusCode: 401,
      data: "Unauthorized user, Please login"
    });
  }
};
