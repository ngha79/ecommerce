"use strict";
const { Model, INTEGER, DECIMAL } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OderItem extends Model {
    static associate(models) {
      OderItem.belongsTo(models.Product, {
        foreignKey: "productId",
        targetKey: "id",
        as: "product",
      });
      OderItem.belongsTo(models.Oder, {
        foreignKey: "oderId",
        targetKey: "id",
        as: "oder",
      });
    }
  }
  OderItem.init(
    {
      name: {
        type: String,
      },
      quantity: {
        type: Number,
      },
      price: {
        type: DECIMAL(10, 2),
      },
      oderId: {
        type: INTEGER,
      },
      productId: {
        type: INTEGER,
      },
    },
    { timestamps: true, sequelize, modelName: "OderItem" }
  );
  return OderItem;
};
