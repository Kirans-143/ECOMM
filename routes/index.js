let express = require("express");
let router = express.Router();
let categoryController = require("./../controller/category.controller");

router.get("/", (req, res, next) => {
  res.write("This is the base page");
  res.end();
});

router.get("/categories", categoryController.getAllCategories);

router.get("/categories/:categoryId", categoryController.getCategoryById);

module.exports = router;
