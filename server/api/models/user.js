"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Oder, {
        foreignKey: "userId",
        as: "user",
      });
      User.hasMany(models.Cart, {
        foreignKey: "userId",
      });
      User.hasMany(models.Review, {
        foreignKey: "userId",
      });
    }
  }
  User.init(
    {
      name: {
        type: String,
      },
      email: {
        type: String,
        unique: true,
        allowNull: false,
      },
      password: {
        type: String,
        allowNull: false,
      },
      phone: {
        type: String,
      },
      address: {
        type: String,
      },
      isAdmin: {
        type: String,
        defaultValue: false,
      },
    },
    { timestamps: true, sequelize, modelName: "User" }
  );
  return User;
};
