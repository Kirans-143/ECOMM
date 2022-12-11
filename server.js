let express = require("express");
let serverConfig = require("./config/server.config");
let expressApp = express();
let router = require("./routes/index");

expressApp.use(router);

expressApp.listen(serverConfig.PORT, () => {
  console.log("Server is running on port " + serverConfig.PORT);
});
