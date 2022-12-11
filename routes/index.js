let express = require("express");
let router = express.Router();

router.get("/", (req, res, next) => {
  res.write("This is the base page");
  res.end();
});

router.get("/categories", (req, res, next) => {
  res.write("This is the Category page");
  res.end();
});

router.get("/categories/:categoryId", (req, res, next) => {
  res.write("This is for " + req.params.categoryId);
  res.end();
});

module.exports = router;
