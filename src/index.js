import http from "http";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import initializeDb from "./db";
import middleware from "./middleware";
import api from "./api";
import config from "./config.json";
import dotenv from "dotenv";
import expressOasGenerator from "express-oas-generator";
import _ from "loadsh";
import passport from "passport";
import "./config/passport";

import validate from "./middleware/validate";

dotenv.config();

let app = express();
expressOasGenerator.init(app, function(spec) {
  _.set(spec, "info.title", "BC Hack");
  _.set(spec, "paths['/path'].get.parameters[0].example", 2);
  return spec;
});

app.server = http.createServer(app);

// logger
app.use(morgan("dev"));

app.use(validate);

// passport initialize
app.use(passport.initialize());

// 3rd party middleware
app.use(
  cors({
    exposedHeaders: config.corsHeaders
  })
);

app.use(
  bodyParser.json({
    limit: config.bodyLimit
  })
);

// connect to db
initializeDb(db => {
  // internal middleware
  app.use(middleware({ config, db }));

  // api router
  app.use("/api", api({ config, db }));

  app.server.listen(process.env.PORT || config.port, () => {
    console.log(`Started on port ${app.server.address().port}`);
  });
});

export default app;
