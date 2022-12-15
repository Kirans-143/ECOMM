let express = require("express");
let serverConfig = require("./config/server.config");
let router = require("./routes/index");
let bodyParser = require("body-parser");
let ErrorHandler = require("./middlewares/errorHandler");

let expressApp = express();
expressApp.use(bodyParser.json());
expressApp.use(router);
expressApp.use(ErrorHandler);

expressApp.listen(serverConfig.PORT, () => {
  console.log("Server is running on port " + serverConfig.PORT);
});
