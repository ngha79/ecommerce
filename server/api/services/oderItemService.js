const { Op } = require("sequelize");
const db = require("../models");

class OderItemService {
  async createOderItem(data) {
    const oder = await db.OderItem.create(data);
    await db.Product.increment(
      { sold: +data.quantity },
      {
        where: {
          id: data.productId,
        },
      }
    );
    return oder;
  }

  async updateOderItem(oderItemId) {
    const oder = await db.OderItem.update({
      where: { id: oderItemId },
    });
    return oder;
  }

  async deleteOderItem(oderItemId) {
    const oder = await db.OderItem.destroy({
      where: { id: oderItemId },
    });
    return oder;
  }

  async getAllOderItemByOder(oderId) {
    const oder = await db.OderItem.findAll({
      where: { oderId: oderId },
      include: ["product"],
    });
    return oder;
  }
}

module.exports = new OderItemService();
