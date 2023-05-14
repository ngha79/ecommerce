const cartItemService = require("../services/cartItemService");

class CartItemController {
  async createCartItem(req, res, next) {
    try {
      const cartItem = await cartItemService.createCartItem(req.body);
      return res.json({ success: "Success", cartItem });
    } catch (error) {
      next(error);
    }
  }

  async updateCartItem(req, res, next) {
    try {
      const { cartItemId } = req.params;
      const cartItem = await cartItemService.updateCartItem(
        req.body,
        cartItemId
      );
      return res.json({ success: "Success", cartItem });
    } catch (error) {
      next(error);
    }
  }

  async deleteCartItem(req, res, next) {
    try {
      const { cartItemId } = req.params;
      const cartItem = await cartItemService.deleteCartItem(cartItemId);
      return res.json({ success: "Success", cartItem });
    } catch (error) {
      next(error);
    }
  }

  async deleteAllCartItem(req, res, next) {
    try {
      const { cartId } = req.params;
      const cartItem = await cartItemService.deleteAllCartItem(cartId);
      return res.json({ success: "Success", cartItem });
    } catch (error) {
      next(error);
    }
  }

  async getAllCartItemByCart(req, res, next) {
    try {
      const { cartId } = req.params;
      const cartItem = await cartItemService.getAllCartItemByCart(cartId);
      return res.json({ success: "Success", cartItem });
    } catch (error) {
      next(error);
    }
  }

  async getAllCartItemByUser(req, res, next) {
    try {
      const { userId } = req.params;
      const cartItem = await cartItemService.getAllCartItemByUser(userId);
      return res.json({ success: "Success", cartItem });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CartItemController();
