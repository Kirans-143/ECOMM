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

let getCategoryById = (req, res, next) => {
  res.write("This is for category " + req.params.categoryId);
  res.end();
};

createTable();

module.exports = { getAllCategories, getCategoryById };
