const sequelize = require("sequelize");
const dbConnection = require("./../config/db.config");
let db = {};

db.sequelize = sequelize;
db.roles = require("./Roles")(sequelize, dbConnection);
db.user = require("./User")(sequelize, dbConnection);
db.product = require("./Product")(sequelize, dbConnection);
db.cart = require("./Cart")(sequelize, dbConnection);
db.category = require("./Category")(sequelize, dbConnection);

db.roles.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});

db.user.belongsToMany(db.roles, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});

db.product.belongsToMany(db.cart, {
  through: "cart_products",
  foreignKey: "productId",
  otherKey: "cartId",
});

db.cart.belongsToMany(db.product, {
  through: "cart_products",
  foreignKey: "cartId",
  otherKey: "productId",
});

db.Roles = ["user", "admin"];

module.exports = db;
