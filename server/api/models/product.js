"use strict";
const { Model, ENUM, DECIMAL, INTEGER, TINYINT } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.hasOne(models.ImageProduct, {
        foreignKey: "productId",
      });
      Product.hasMany(models.Review, {
        foreignKey: "productId",
        as: "product",
      });
      Product.belongsTo(models.Discount, {
        foreignKey: "discountId",
        targetKey: "id",
      });
      Product.hasOne(models.CartItem, {
        foreignKey: "productId",
        targetKey: "id",
      });
      Product.hasOne(models.OderItem, {
        foreignKey: "productId",
        targetKey: "id",
      });
      Product.belongsTo(models.Category, {
        foreignKey: "categoryId",
        targetKey: "id",
      });
    }
  }
  Product.init(
    {
      name: {
        type: String,
      },
      slug: {
        type: String,
      },
      desc: {
        type: String,
      },
      image_url: {
        type: String,
      },
      size: {
        type: ENUM,
        values: ["60ml", "100ml", "300ml", "Six Pack", "Twelve Pack"],
      },
      sold: {
        type: String,
      },
      status: {
        type: TINYINT,
      },
      featured: {
        type: TINYINT,
      },
      price: {
        type: DECIMAL,
      },
      quantity: {
        type: INTEGER,
      },
      discountId: {
        type: INTEGER,
      },
      categoryId: {
        type: INTEGER,
      },
    },
    { timestamps: true, sequelize, modelName: "Product" }
  );
  return Product;
};
