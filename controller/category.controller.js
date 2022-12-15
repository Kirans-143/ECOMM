let sequelizeInstance = require("./../config/db.config");
const Categories = require("./../model/category");

let createTable = async () => {
  await sequelizeInstance.sync({ force: true });
  insertCategories();
  console.log("Table Created Successfully");
};

let insertCategories = async () => {
  await Categories.bulkCreate([
    {
      name: "Fashion",
    },
    {
      name: "Mobiles",
    },
    {
      name: "Electronmics",
    },
    {
      name: "Appliances",
    },
  ]);
};

let getAllCategories = async (req, res, next) => {
  let categories = await Categories.findAll();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(categories));
  res.end();
};

let getCategoryById = async (req, res, next) => {
  let id = req.params.categoryId;
  if (!id) {
    res.status(400).send("ID not passes");
  }
  let categories = await Categories.findAll({
    where: {
      id: id,
    },
  });
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(categories));
  res.end();
};

let addNewCategory = async (req, res, next) => {
  let categoryToAdd = req.body.name;
  await Categories.create({
    name: categoryToAdd,
  });
  res.status(201).send("Category Added");
  res.end();
};

let deleteCategoryById = async (req, res, next) => {
  let id = req.params.categoryId;
  await Categories.destroy({
    where: {
      id: id,
    },
  });
  res.status(200).send("Category deleted");
  res.end();
};


createTable();

module.exports = {
  getAllCategories,
  getCategoryById,
  addNewCategory,
  deleteCategoryById,
};
