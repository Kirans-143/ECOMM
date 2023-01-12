const developmentInstance = {
  DB: "ecommerce_db",
  USER: "root",
  PASSWORD: "Kiranshet@007",
  HOST: "localhost",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 300000,
    idle: 10000,
  },
};

const testingInstance = {
  DB: "ecommerce_test_db",
  USER: "root",
  PASSWORD: "Kiranshet@007",
  HOST: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 300000,
    idle: 10000,
  },
};

module.exports = {
  development: developmentInstance,
  test: testingInstance,
};
