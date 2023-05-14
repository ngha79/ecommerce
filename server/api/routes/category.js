const express = require("express");
const { uploadCloud } = require("../middlewares/cloudinary");
const categoryController = require("../controller/categoryController");
const router = express.Router();

router.post(
  "/",
  uploadCloud.single("image"),
  categoryController.createCategory
);

router.put(
  "/:categoryId",
  uploadCloud.single("image"),
  categoryController.updateCategory
);
router.post("/:categoryId", categoryController.deleteCategory);
router.get("/:categoryId", categoryController.getCategory);
router.get("/", categoryController.getAllCategory);

module.exports = router;
