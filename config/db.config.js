let sequelize = require("sequelize");
let instance = new sequelize("ecommerce_db", "root", "Kiranshet@007", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: 0,
  pool: {
    max: 5,
    min: 0,
    acquire: 300000,
    idle: 10000,
  },
});
module.exports = instance;
