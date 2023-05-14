const discountService = require("../services/discountService");

class DiscountController {
  async createDiscount(req, res, next) {
    try {
      const discount = await discountService.createDiscount(req.body);
      return res.json({ success: "Success", discount });
    } catch (error) {
      next(error);
    }
  }

  async updateDiscount(req, res, next) {
    const discountId = req.params;
    try {
      const discount = await discountService.updateDiscount(
        req.body,
        discountId
      );
      return res.json({ success: "Success", discount });
    } catch (error) {
      next(error);
    }
  }

  async deleteDiscount(req, res, next) {
    const discountId = req.params;
    try {
      const discount = await discountService.deleteDiscount(discountId);
      return res.json({ success: "Success", discount });
    } catch (error) {
      next(error);
    }
  }

  async findDiscountByName(req, res, next) {
    try {
      const { name } = req.query;
      const discount = await discountService.findDiscountByName(name);
      return res.json({ success: "Success", discount });
    } catch (error) {
      next(error);
    }
  }

  async applyCoupon(req, res, next) {
    try {
      const { name } = req.query;
      const { message, discount } = await discountService.applyCoupon(name);
      return res.json({ success: "Success", discount, message });
    } catch (error) {
      next(error);
    }
  }

  async getAllDiscountNonExpiry(req, res, next) {
    try {
      const discount = await discountService.getAllDiscountNonExpiry();
      return res.json({ success: "Success", discount });
    } catch (error) {
      next(error);
    }
  }
  async findDiscountById(req, res, next) {
    try {
      const { discountId } = req.params;
      const discount = await discountService.findDiscountById(discountId);
      return res.json({ success: "Success", discount });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new DiscountController();
