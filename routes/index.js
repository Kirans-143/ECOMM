let express = require("express");
let router = express.Router();
let categoryRoutes = require("./category.route");
let productRoutes = require("./product.route");
let authRoutes = require("./auth.route");

router.get("/", (req, res, next) => {
  res.write("This is the base page");
  res.end();
});

//This is for categories and products
router.use("/ecomm/api/v1/categories", categoryRoutes);
router.use("/ecomm/api/v1/products", productRoutes);
router.use("/ecomm/api/v1/auth", authRoutes);

module.exports = router;
