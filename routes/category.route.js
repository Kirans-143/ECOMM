let express = require("express");
let categoryRouter = express.Router();
let categoryController = require("./../controller/category.controller");
let requestValidator = require("./../middlewares/RequestValidator");

categoryRouter.get("/", categoryController.getAllCategories);

categoryRouter.get(
  "/:categoryId",
  [requestValidator.validateRequestForcategoryId],
  categoryController.getCategoryById
);

categoryRouter.post(
  "/",
  [requestValidator.validateRequestForCategoryName],
  categoryController.addNewCategory
);

categoryRouter.delete(
  "/:categoryId",
  [requestValidator.validateRequestForcategoryId],
  categoryController.deleteCategoryById
);

categoryRouter.put(
  "/:categoryId",
  [
    requestValidator.validateRequestForCategoryName,
    requestValidator.validateRequestForcategoryId,
  ],
  categoryController.updateCategoryById
);

module.exports = categoryRouter;
