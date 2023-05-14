const { Op } = require("sequelize");
const db = require("../models");

class DiscountService {
  async createDiscount(data) {
    const discount = await db.Discount.create(data);
    return discount;
  }
  async updateDiscount(data, discountId) {
    const discount = await db.Discount.update(data, {
      where: { id: +discountId },
    });
    return discount;
  }
  async deleteDiscount(discountId) {
    const discount = await db.Discount.destroy(discountId);
    return discount;
  }
  async getAllDiscountNonExpiry() {
    const date = Date.now();
    const discount = await db.Discount.findAll({
      where: { discountEndDate: { [Op.gt]: date } },
    });
    return discount;
  }
  async findDiscountByName(name) {
    const discount = await db.Discount.findAll({
      where: { discountCode: { [Op.like]: `%${name}%` } },
    });
    return discount;
  }
  async applyCoupon(name) {
    const discount = await db.Discount.findOne({
      where: { discountCode: name },
    });
    if (!discount) {
      return { message: false, discount };
    }
    return { message: true, discount };
  }
  async findDiscountById(discountId) {
    const discount = await db.Discount.findOne({
      where: { id: discountId },
    });
    return discount;
  }
}

module.exports = new DiscountService();
