"use strict";
const { Model, INTEGER } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Product, {
        foreignKey: "categoryId",
      });
    }
  }
  Category.init(
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
      status: {
        type: String,
      },
    },
    { timestamps: true, sequelize, modelName: "Category" }
  );
  return Category;
};
