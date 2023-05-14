const db = require("../models");

class OderService {
  async createOder(data) {
    const date = Date.now();
    let { total, discountId } = data;
    let discount;
    if (discountId) {
      discount = await db.Discount.findOne({ where: { id: discountId } });
    }
    if (discount) {
      const { discountEndDate, discountValue } = discount;
      if (discountEndDate.getTime() > date) {
        total = (+total * (100 - +discountValue)) / 100;
        data.total = total;
      }
    }
    const oder = await db.Oder.create(data);
    return oder;
  }

  async updateCanceledOder(oderId) {
    const date = new Date();
    let oder = await db.Oder.update(
      { canceled_at: date, status: "cancel" },
      { where: { id: oderId } }
    );
    oder = await db.Oder.findOne({
      where: { id: oderId },
      include: ["user", "discount"],
    });
    return oder;
  }

  async updateCompletedOder(oderId) {
    const date = new Date();
    let oder = await db.Oder.update(
      { completed_at: date, status: "complete" },
      { where: { id: oderId } }
    );
    oder = await db.Oder.findOne({
      where: { id: oderId },
      include: ["user", "discount"],
    });
    return oder;
  }

  async updateDeliveryOder(oderId) {
    const date = new Date();
    let oder = await db.Oder.update(
      { delivery_at: date, status: "delivery" },
      { where: { id: oderId } }
    );
    oder = await db.Oder.findOne({
      where: { id: oderId },
      include: ["user", "discount"],
    });
    return oder;
  }

  async getOder(oderId) {
    const oder = await db.Oder.findOne({
      where: { id: oderId },
      include: ["user"],
    });
    return oder;
  }

  async getAllOderByUser(userId) {
    const oder = await db.Oder.findAll({
      where: { userId: userId },
    });
    return oder;
  }

  async listAllOder(page) {
    const oder = await db.Oder.findAll({
      include: ["user", "discount"],
      limit: 20,
      offset: 20 * +page,
    });
    return oder;
  }
}

module.exports = new OderService();
