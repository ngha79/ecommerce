const oderItemService = require("../services/oderItemService");

class OderItemController {
  async createOderItem(req, res, next) {
    try {
      const oderItem = await oderItemService.createOderItem(req.body);
      res.json({ success: "success", oderItem });
    } catch (error) {
      next(error);
    }
  }

  async updateOderItem(req, res, next) {
    try {
      const { oderItemId } = req.params;
      const oderItem = await oderItemService.updateOderItem(oderItemId);
      res.json({ success: "success", oderItem });
    } catch (error) {
      next(error);
    }
  }

  async deleteOderItem(req, res, next) {
    try {
      const { oderItemId } = req.params;
      const oderItem = await oderItemService.deleteOderItem(oderItemId);
      res.json({ success: "success", oderItem });
    } catch (error) {
      next(error);
    }
  }

  async getAllOderItemByOder(req, res, next) {
    try {
      const { oderId } = req.params;
      const oderItem = await oderItemService.getAllOderItemByOder(oderId);
      res.json({ success: "success", oderItem });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new OderItemController();
