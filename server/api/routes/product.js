const express = require("express");
const productController = require("../controller/productController");
const { uploadCloud } = require("../middlewares/cloudinary");
const checkAdmin = require("../middlewares/admin");
const checkAuth = require("../middlewares/auth");
const router = express.Router();

router.post(
  "/",
  uploadCloud.array("image"),
  checkAuth,
  checkAdmin,
  productController.createProduct
);
router.put(
  "/:productId",
  uploadCloud.array("image"),
  checkAuth,
  checkAdmin,
  productController.updateProduct
);
router.delete(
  "/:productId",
  checkAuth,
  checkAdmin,
  productController.deleteProduct
);
router.get("/product/:productId", productController.getProductById);
router.get("/slug/", productController.getProductBySlug);
router.get("/best-seller", productController.getProductBestSeller);
router.get("/bundle", productController.getProductBundle);
router.get("/search", productController.getProductSearch);
router.get("/flavor/:type/:productId", productController.getProductFlavor);
router.get("/", productController.getAllProduct);

module.exports = router;
