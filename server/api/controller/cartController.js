const cartService = require("../services/cartService");

class CartController {
  async createCart(req, res, next) {
    try {
      const cart = await cartService.createCart(req.body);
      return res.json({ success: "Success", cart });
    } catch (error) {
      next(error);
    }
  }

  async deleteCart(req, res, next) {
    try {
      const { cartId } = req.params;
      const cart = await cartService.deleteCart(cartId);
      return res.json({ success: "Success", cart });
    } catch (error) {
      next(error);
    }
  }

  async getCart(req, res, next) {
    try {
      const { userId } = req.user;
      const cart = await cartService.getCart(userId);
      return res.json({ success: "Success", cart });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CartController();
