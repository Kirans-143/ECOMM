let sequelizeInstance = require("./../config/db.config");
const Categories = require("./../model/category");

let getAllCategories = async (req, res, next) => {
  let categories = await Categories.findAll();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(categories));
  res.end();
};

let getCategoryById = async (req, res, next) => {
  let id = req.params.categoryId;
  // if (!id) {
  //   res.status(400).send("ID not passes");
  // }
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
  // if (!req.body.name) {
  //   res.status(400).send({
  //     message: "Category Name is required",
  //   });
  //   return;
  // } when we adding validator this is not required
  try {
    let categoryToAdd = req.body;
    await Categories.create(categoryToAdd);
    res.status(201).send("Category Added");
    res.end();
  } catch (err) {
    //res.status(400).send("Something went wrong");
    next(err); //except above line we can write this which will show HTML page error
  } //finally {
  //   res.end();
  // }
};

/*let deleteCategoryById = async (req, res, next) => {
  let id = req.params.categoryId;
  let category = await Categories.findByPk(id);
  try {
    if (!category) {
      throw new Error("Category not found");
    }
    await Categories.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send("Category deleted");
    res.end();
  } catch (err) {
    next(err);
  }
};*/
let deleteCategoryById = async (req, res, next) => {
  let id = req.params.categoryId;
  let category = await Categories.findByPk(id);
  if (category) {
    await Categories.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send("Category deleted");
  } else {
    res.status(404).send("Category not found");
  }
  res.end();
};

let updateCategoryById = async (req, res, next) => {
  if (!req.body.name) {
    res.status(500).send("please enter the Category Name");
    return;
  }
  let id = req.params.categoryId;
  // let name = req.body.name;
  let categoryToUpdate = {
    name: req.body.name,
  };
  await Categories.update(categoryToUpdate, {
    where: {
      id: id,
    },
  });

  let updateCategory = await Categories.findByPk(id);
  res.status(200).send(updateCategory);
};

module.exports = {
  getAllCategories,
  getCategoryById,
  addNewCategory,
  deleteCategoryById,
  updateCategoryById,
};
