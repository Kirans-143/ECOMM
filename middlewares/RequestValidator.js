const Categories = require("../model/category");

let validateRequestForCategoryName = (req, res, next) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Category Name is required",
    });
  }
  next();
};

let validateRequestForcategoryId = async (req, res, next) => {
  let categoryId = req.params.categoryId;
  if (categoryId) {
    let category = await Categories.findByPk(categoryId);
    if (!category) {
      res.status(400).send({
        message: "Category does not exist",
      });
      return;
    }
  } else {
    res.status(400).send({
      message: "Cetegory id is missing",
    });
  }
  res.end();
};

module.exports = {
  validateRequestForCategoryName,
  validateRequestForcategoryId,
};
