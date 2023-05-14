const oderService = require("../services/oderService");

class OderController {
  async createOder(req, res, next) {
    try {
      const oder = await oderService.createOder(req.body);
      res.json({ success: "success", oder });
    } catch (error) {
      next(error);
    }
  }

  async getOder(req, res, next) {
    try {
      const { oderId } = req.params;
      const oder = await oderService.getOder(oderId);
      res.json({ success: "success", oder });
    } catch (error) {
      next(error);
    }
  }

  async updateCanceledOder(req, res, next) {
    try {
      const { oderId } = req.params;
      const oder = await oderService.updateCanceledOder(oderId);
      res.json({ success: "success", oder });
    } catch (error) {
      next(error);
    }
  }

  async updateCompletedOder(req, res, next) {
    try {
      const { oderId } = req.params;
      const oder = await oderService.updateCompletedOder(oderId);
      res.json({ success: "success", oder });
    } catch (error) {
      next(error);
    }
  }
  async updateDeliveryOder(req, res, next) {
    try {
      const { oderId } = req.params;
      const oder = await oderService.updateDeliveryOder(oderId);
      res.json({ success: "success", oder });
    } catch (error) {
      next(error);
    }
  }

  async getAllOderByUser(req, res, next) {
    try {
      const { userId } = req.params;
      const oder = await oderService.getAllOderByUser(userId);
      res.json({ success: "success", oder });
    } catch (error) {
      next(error);
    }
  }
  async listAllOder(req, res, next) {
    try {
      const { page } = req.params;
      const oder = await oderService.listAllOder(page);
      res.json({ success: "success", oder });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new OderController();
