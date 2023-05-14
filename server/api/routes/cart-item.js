const express = require("express");
const cartItemController = require("../controller/cartItemController");
const router = express.Router();

router.post("/", cartItemController.createCartItem);
router.put("/:cartItemId", cartItemController.updateCartItem);
router.delete("/:cartItemId", cartItemController.deleteCartItem);
router.delete("/allCartItem/:cartId", cartItemController.deleteAllCartItem);
router.post("/cart/:cartId", cartItemController.getAllCartItemByCart);
router.post("/user/:userId", cartItemController.getAllCartItemByUser);

module.exports = router;
