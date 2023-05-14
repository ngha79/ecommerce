"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Discounts", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      discountCode: {
        type: Sequelize.STRING,
        unique: true,
      },
      discountType: {
        type: Sequelize.STRING,
      },
      discountValue: {
        type: Sequelize.DECIMAL,
      },
      discountStartDate: {
        type: Sequelize.DATE,
      },
      discountEndDate: {
        type: Sequelize.DATE,
      },
      discountMinSpend: {
        type: Sequelize.INTEGER,
      },
      discountMaxSpend: {
        type: Sequelize.INTEGER,
      },
      discountStatus: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("Discounts");
  },
};
