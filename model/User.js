let dbConnection = require("../config/db.config");
let sequelize = require("sequelize");

const User = dbConnection.define(
  "users",
  {
    userName: {
      type: sequelize.STRING,
    },
    email: {
      type: sequelize.STRING,
    },
    password: {
      type: sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = User;
