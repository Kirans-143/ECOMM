let express = require("express");
let router = express.Router();
let categoryRoutes = require("./category.route");
let productRoutes = require("./product.route");

router.get("/", (req, res, next) => {
  res.write("This is the base page");
  res.end();
});

//This is for categories and products
router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);

module.exports = router;
