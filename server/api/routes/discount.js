const express = require("express");
const discountController = require("../controller/discountController");
const router = express.Router();

router.post("/", discountController.createDiscount);
router.put("/:discountId", discountController.updateDiscount);
router.delete("/:discountId", discountController.deleteDiscount);
router.get("/", discountController.findDiscountByName);
router.get("/apply", discountController.applyCoupon);
router.get("/alldiscount", discountController.getAllDiscountNonExpiry);
router.get("/:discountId", discountController.findDiscountById);

module.exports = router;
