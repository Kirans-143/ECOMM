const { mockRequestObject, mockResponseObject } = require("./../interceptor");
const db = require("./../../../model");
const productController = require("./../../../controller/product.controller");

describe("Product controller", () => {
  let req, res;
  beforeEach(() => {
    req = mockRequestObject();
    res = mockResponseObject();
  });

  let testPayload = {
    categoryId: 1,
    name: "Samsung Galaxy Note",
    price: 18000,
  };

  test("should test the addNew method with payload", async () => {
    const spy = jest.spyOn(db.product, "create").mockImplementation(
      (testPayload) =>
        new Promise((resolve, reject) => {
          resolve(testPayload);
        })
    );

    req.body = testPayload;
    await productController.addNewProduct(req, res);

    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(testPayload);
  });
});
