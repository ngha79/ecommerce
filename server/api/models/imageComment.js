"use strict";
const { Model, ENUM, DECIMAL, INTEGER, TINYINT } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ImageComment extends Model {
    static associate(models) {
      ImageComment.belongsTo(models.Review, {
        foreignKey: "reviewId",
        targetKey: "id",
        as: "review",
      });
    }
  }
  ImageComment.init(
    {
      image_url: {
        type: String,
      },
      reviewId: {
        type: INTEGER,
      },
    },
    { timestamps: true, sequelize, modelName: "ImageComment" }
  );
  return ImageComment;
};
