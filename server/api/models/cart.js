"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      Cart.hasMany(models.CartItem, {
        foreignKey: "cartId",
        as: "cartItem",
      });
      Cart.belongsTo(models.User, {
        foreignKey: "userId",
        targetKey: "id",
      });
    }
  }
  Cart.init(
    {
      userId: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: true, sequelize, modelName: "Cart" }
  );
  return Cart;
};
