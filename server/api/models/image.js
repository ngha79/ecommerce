"use strict";
const { Model, ENUM, DECIMAL, INTEGER, TINYINT } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ImageProduct extends Model {
    static associate(models) {
      ImageProduct.belongsTo(models.Product, {
        foreignKey: "productId",
        targetKey: "id",
      });
    }
  }
  ImageProduct.init(
    {
      image_url: {
        type: String,
      },
      productId: {
        type: INTEGER,
      },
    },
    { timestamps: true, sequelize, modelName: "ImageProduct" }
  );
  return ImageProduct;
};
