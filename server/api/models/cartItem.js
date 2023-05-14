"use strict";
const { Model, INTEGER, FLOAT } = require("sequelize");
const db = require(".");
const product = require("./product");
module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    static associate(models) {
      CartItem.belongsTo(models.Cart, {
        foreignKey: "cartId",
        targetKey: "id",
        as: "cart",
      });
      CartItem.belongsTo(models.Product, {
        foreignKey: "productId",
        targetKey: "id",
        as: "product",
      });
    }
  }
  CartItem.init(
    {
      cartId: {
        type: INTEGER,
      },
      productId: {
        type: INTEGER,
      },
      quantity: {
        type: INTEGER,
      },
      price: {
        type: FLOAT,
      },
    },
    { timestamps: true, sequelize, modelName: "CartItem" }
  );
  return CartItem;
};
