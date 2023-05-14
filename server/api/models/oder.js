"use strict";
const { Model, INTEGER, DATE } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Oder extends Model {
    static associate(models) {
      Oder.hasMany(models.OderItem, {
        foreignKey: "oderId",
        as: "oderItem",
      });
      Oder.belongsTo(models.User, {
        foreignKey: "userId",
        targetKey: "id",
        as: "user",
      });
      Oder.belongsTo(models.Discount, {
        foreignKey: "discountId",
        targetKey: "id",
        as: "discount",
      });
    }
  }
  Oder.init(
    {
      status: {
        type: String,
      },
      shippingFee: {
        type: String,
      },
      total: {
        type: Number,
      },
      paymentId: {
        type: INTEGER,
      },
      discountId: {
        type: INTEGER,
      },
      userId: {
        type: INTEGER,
      },
      canceled_at: {
        type: DATE,
      },
      completed_at: {
        type: DATE,
      },
      delivery_at: {
        type: DATE,
      },
    },
    { timestamps: true, sequelize, modelName: "Oder" }
  );
  return Oder;
};
