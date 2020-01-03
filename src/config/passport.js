import passport from "passport";
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});
passport.use(
  new GoogleStrategy(
    {
      clientID:
        "184436333386-3053thg17jd8burgu5s1i0l83psfd28l.apps.googleusercontent.com",
      clientSecret: "uv5UTv9xjtd2V4mbByKLVtZG",
      callbackURL: "http://localhost:1763/api/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      var userData = {
        email: profile.emails[0].value,
        name: profile.displayName,
        token: accessToken,
        refreshToken: refreshToken
      };
      done(null, userData);
    }
  )
);
