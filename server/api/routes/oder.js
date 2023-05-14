const express = require("express");
const oderController = require("../controller/oderController");
const router = express.Router();

router.post("/", oderController.createOder);
router.put("/canceled/:oderId", oderController.updateCanceledOder);
router.put("/completed/:oderId", oderController.updateCompletedOder);
router.put("/delivery/:oderId", oderController.updateDeliveryOder);
router.get("/:oderId", oderController.getOder);
router.get("/user/:userId", oderController.getAllOderByUser);
router.get("/allOder/:page", oderController.listAllOder);

module.exports = router;
