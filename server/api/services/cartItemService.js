const { Op } = require("sequelize");
const db = require("../models");
const product = require("../models/product");

class CartItemSerice {
  async createCartItem(data) {
    const checkCartItem = await db.CartItem.findOne({
      where: {
        [Op.and]: [{ productId: data.productId }, { cartId: data.cartId }],
      },
    });
    if (checkCartItem) {
      await db.CartItem.update(data, {
        where: { productId: data.productId },
      });
    } else {
      await db.CartItem.create(data, {
        include: ["product"],
      });
    }
    const CartItem = await db.CartItem.findOne({
      where: { productId: data.productId },
      include: ["product"],
    });
    return CartItem;
  }

  async updateCartItem({ data }, cartItemId) {
    let CartItem = await db.CartItem.update(data, {
      where: { id: cartItemId },
    });
    CartItem = await db.CartItem.findOne({
      where: { id: cartItemId },
      include: ["product"],
    });
    return CartItem;
  }

  async deleteCartItem(cartItemId) {
    const CartItem = await db.CartItem.destroy({ where: { id: cartItemId } });
    return CartItem;
  }

  async deleteAllCartItem(cartId) {
    const CartItem = await db.CartItem.destroy({
      where: { cartId: cartId },
    });
    return CartItem;
  }

  async getAllCartItemByCart(cartId) {
    const CartItem = await db.CartItem.findAll({
      where: { cartId: cartId },
      include: ["product"],
    });
    return CartItem;
  }

  async getAllCartItemByUser(cartId) {
    const cartItem = await db.Cart.findOne({
      where: { id: cartId },
      include: ["product"],
    });
    return cartItem;
  }
}

module.exports = new CartItemSerice();
