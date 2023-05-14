const db = require("../models");
const product = require("../models/product");

class CartSerice {
  async createCart(data) {
    const cart = await db.Cart.create(data);
    return cart;
  }

  async deleteCart(cartId) {
    const cart = await db.Cart.destroy({ where: { id: cartId } });
    return cart;
  }

  async getCart(userId) {
    const cart = await db.Cart.findOne({
      where: { userId: userId },
      include: ["cartItem"],
    });
    const cartItem = await db.CartItem.findAll({
      where: { cartId: cart.id },
      include: ["product"],
    });
    return { cart, cartItem };
  }
}

module.exports = new CartSerice();
