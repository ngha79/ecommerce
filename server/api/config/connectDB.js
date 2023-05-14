const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("ecommerce", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
  logging: false,
});

const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to database successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
connectDatabase();

module.exports = connectDatabase;
module.exports = sequelize;
