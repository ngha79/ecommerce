"use strict";
const { Model, DECIMAL, ENUM, INTEGER } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Discount extends Model {
    static associate(models) {
      Discount.hasMany(models.Product, {
        foreignKey: "discountId",
      });
      Discount.hasMany(models.Oder, {
        foreignKey: "discountId",
        as: "discount",
      });
    }
  }
  Discount.init(
    {
      discountCode: {
        type: String,
        unique: true,
      },
      discountType: {
        type: ENUM,
        values: ["percent", "fixed_amount"],
      },
      discountValue: {
        type: DECIMAL,
      },
      discountStartDate: {
        type: Date,
      },
      discountEndDate: {
        type: Date,
      },
      discountMinSpend: {
        type: INTEGER,
      },
      discountMaxSpend: {
        type: INTEGER,
      },
      discountStatus: {
        type: Boolean,
      },
    },
    { timestamps: true, sequelize, modelName: "Discount" }
  );
  return Discount;
};
