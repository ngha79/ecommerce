"use strict";
const { Model, INTEGER } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      Review.hasMany(models.ImageComment, {
        foreignKey: "reviewId",
        as: "image",
      });
      Review.belongsTo(models.User, {
        foreignKey: "userId",
        targetKey: "id",
        as: "user",
      });
      Review.belongsTo(models.Product, {
        foreignKey: "productId",
        targetKey: "id",
        as: "product",
      });
    }
  }
  Review.init(
    {
      productId: {
        type: INTEGER,
      },
      userId: {
        type: INTEGER,
      },
      rating: {
        type: INTEGER,
      },
      title: {
        type: String,
      },
      content: {
        type: String,
      },
    },
    { timestamps: true, sequelize, modelName: "Review" }
  );
  return Review;
};
