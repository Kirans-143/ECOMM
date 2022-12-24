module.exports = (sequelize, dbConnection) => {
  const User = dbConnection.define(
    "users",
    {
      userName: {
        type: sequelize.STRING,
      },
      email: {
        type: sequelize.STRING,
      },
      password: {
        type: sequelize.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  return User;
};
