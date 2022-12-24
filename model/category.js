module.exports = (sequelize, dbConnection) => {
  let Categories = dbConnection.define(
    "categories",
    {
      id: {
        primaryKey: true,
        notNull: true,
        type: sequelize.DataTypes.INTEGER,
        autoIncrement: true,
      },
      name: {
        notNull: true,
        type: sequelize.DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  return Categories;
};
