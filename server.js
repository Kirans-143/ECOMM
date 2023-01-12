let express = require("express");
let serverConfig = require("./config/server.config");
let router = require("./routes/index");
let bodyParser = require("body-parser");
let ErrorHandler = require("./middlewares/errorHandler");
let db = require("./model");

db.category.hasMany(db.product); //create the association..This will create categoryId(foriegn) in products table

let expressApp = express();
expressApp.use(bodyParser.json());
expressApp.use(router);
expressApp.use(ErrorHandler);

db.connection.sync({ force: true }).then(() => {
  init();
});

let init = async () => {
  insertCategories();
  insertRoles();
};

let insertCategories = async () => {
  await db.category.bulkCreate([
    {
      name: "Fashion",
    },
    {
      name: "Mobiles",
    },
    {
      name: "Electronmics",
    },
    {
      name: "Appliances",
    },
  ]);
};

let insertRoles = async () => {
  db.roles.bulkCreate([
    {
      id: 1,
      name: "user",
    },
    {
      id: 2,
      name: "admin",
    },
  ]);
  console.log("Roles Added");
};

expressApp.listen(serverConfig.PORT, () => {
  console.log("Server is running on port " + serverConfig.PORT);
});
