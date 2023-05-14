"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      slug: {
        type: Sequelize.STRING,
      },
      desc: {
        type: Sequelize.STRING,
      },
      image_url: {
        type: Sequelize.STRING,
      },
      size: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      sold: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.TINYINT,
      },
      featured: {
        type: Sequelize.TINYINT,
      },
      price: {
        type: Sequelize.DECIMAL,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      discountId: {
        type: Sequelize.INTEGER,
      },
      categoryId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Products");
  },
};
