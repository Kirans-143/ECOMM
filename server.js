let express = require("express");
let serverConfig = require("./config/server.config");
let router = require("./routes/index");
let bodyParser = require("body-parser");

let expressApp = express();
expressApp.use(bodyParser.json());
expressApp.use(router);

expressApp.listen(serverConfig.PORT, () => {
  console.log("Server is running on port " + serverConfig.PORT);
});
