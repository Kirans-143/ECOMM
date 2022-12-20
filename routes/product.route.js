let express = require("express");
let productRouter = express.Router();
let productController = require("./../controller/product.controller");

productRouter.get("/", productController.getAllProducts);

productRouter.get("/:productId", productController.getProductById);

productRouter.post("/", productController.insertProducts);

// productRouter.post("/", productController.addNewProduct);

// productRouter.put("/:productId", productController.updateProductById);

module.exports = productRouter;
