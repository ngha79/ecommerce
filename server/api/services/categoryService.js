const db = require("../models");

class CategoryService {
  async createCategory(data, image) {
    if (image) {
      data.image_url = image.path;
    }
    const category = await db.Category.create(data);
    return category;
  }

  async updateCategory(data, image, categoryId) {
    if (image) {
      data.image_url = image.path;
    }
    const category = await db.Category.update(data, {
      where: { id: categoryId },
    });
    return category;
  }

  async deleteCategory(categoryId) {
    const category = await db.Category.destroy({ where: { id: +categoryId } });
    return category;
  }

  async getCategory(categoryId) {
    const category = await db.Category.findOne({ where: { id: categoryId } });
    return category;
  }

  async getAllCategory() {
    const category = await db.Category.findAll();
    return category;
  }
}

module.exports = new CategoryService();
