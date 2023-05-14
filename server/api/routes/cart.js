const express = require("express");
const cartController = require("../controller/cartController");
const checkAdmin = require("../middlewares/admin");
const checkAuth = require("../middlewares/auth");
const router = express.Router();

router.post("/", cartController.createCart);
router.delete("/:cartId", checkAuth, checkAdmin, cartController.deleteCart);
router.get("/", checkAuth, cartController.getCart);

module.exports = router;
