let express = require("express");
let serverConfig = require("./config/server.config");
let router = require("./routes/index");
let bodyParser = require("body-parser");
let ErrorHandler = require("./middlewares/errorHandler");
let dbConnection = require("./config/db.config");
let Category = require("./model/category");
let Products = require("./model/product");
const Roles = require("./model/Roles");

Category.hasMany(Products); //create the association..This will create categoryId(foriegn) in products table

let expressApp = express();
expressApp.use(bodyParser.json());
expressApp.use(router);
expressApp.use(ErrorHandler);

let init = async () => {
  await dbConnection.sync({ force: true });
  insertCategories();
  insertRoles();
};

let insertCategories = async () => {
  await Category.bulkCreate([
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
  Roles.bulkCreate([
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
  init();
});
