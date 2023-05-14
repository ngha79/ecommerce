const db = require("../models");
const reviewService = require("../services/reviewService");

class ReviewController {
  async createReview(req, res, next) {
    try {
      let { review, image_url } = await reviewService.createReview(
        req.body,
        req.files
      );

      return res.json({ success: "Success", review });
    } catch (error) {
      next(error);
    }
  }
  async updateReview(req, res, next) {
    try {
      const review = await reviewService.updateReview(req.body);
      return res.json({ success: "Success", review });
    } catch (error) {
      next(error);
    }
  }
  async deleteReview(req, res, next) {
    try {
      const reviewId = await reviewService.deleteReview(req.params.reviewId);
      return res.json({ success: "Success", reviewId });
    } catch (error) {
      next(error);
    }
  }
  async getAllReviewByProduct(req, res, next) {
    try {
      const { productId, page } = req.params;
      const { review, count } = await reviewService.getAllReviewByProduct(
        productId,
        page
      );
      return res.json({ success: "Success", review, count });
    } catch (error) {
      next(error);
    }
  }

  async getAllReviewByUser(req, res, next) {
    try {
      const { userId } = req.params;
      const review = await reviewService.getAllReviewByUser(userId);
      return res.json({ success: "Success", review });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new ReviewController();
