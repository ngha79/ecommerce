const categoryService = require("../services/categoryService");

class CategoryController {
  async createCategory(req, res, next) {
    try {
      const category = await categoryService.createCategory(req.body, req.file);
      return res.json({ success: "Success", category });
    } catch (error) {
      next(error);
    }
  }

  async updateCategory(req, res, next) {
    const categoryId = req.params;
    try {
      const category = await categoryService.updateCategory(
        req.body,
        req.file,
        categoryId
      );
      return res.json({ success: "Update success", category });
    } catch (error) {
      next(error);
    }
  }

  async deleteCategory(req, res, next) {
    const categoryId = req.params;
    try {
      const category = await categoryService.deleteCategory(categoryId);
      return res.json({ success: "Delete success", category });
    } catch (error) {
      next(error);
    }
  }

  async getCategory(req, res, next) {
    const categoryId = req.params;
    try {
      const category = await categoryService.getCategory(categoryId);
      return res.json({ success: "Success", category });
    } catch (error) {
      next(error);
    }
  }

  async getAllCategory(req, res, next) {
    try {
      const category = await categoryService.getAllCategory();
      return res.json({ success: "Success", category });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CategoryController();
