const express = require("express");
const reviewController = require("../controller/reviewController");
const { uploadCloud } = require("../middlewares/cloudinary");
const router = express.Router();

router.post("/", uploadCloud.array("image"), reviewController.createReview);
router.put("/:reviewId", reviewController.updateReview);
router.delete("/:reviewId", reviewController.deleteReview);
router.get("/product/:productId/:page", reviewController.getAllReviewByProduct);
router.get("/user/:userId", reviewController.getAllReviewByUser);

module.exports = router;
