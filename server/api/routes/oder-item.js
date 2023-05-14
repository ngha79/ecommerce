const express = require("express");
const oderItemController = require("../controller/oderItemController");
const router = express.Router();

router.post("/", oderItemController.createOderItem);
router.put("/", oderItemController.updateOderItem);
router.delete("/", oderItemController.deleteOderItem);
router.get("/:oderId", oderItemController.getAllOderItemByOder);

module.exports = router;
