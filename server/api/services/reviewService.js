const db = require("../models");

class ReviewService {
  async createReview(data, image) {
    let image_url = [];
    const createReview = await db.Review.create({
      productId: data.productId,
      userId: data.userId,
      rating: data.rating,
      title: data.title,
      content: data.content,
    });
    image.map(async (image) => {
      image_url.push({ image_url: image.path, reviewId: createReview.id });
      await db.ImageComment.create({
        image_url: image.path,
        reviewId: createReview.id,
      });
    });
    let review = await db.Review.findOne({
      where: {
        id: +createReview.id,
      },
      include: ["user", "image"],
      limit: 16,
    });
    review.dataValues.image = image_url;
    return { review: review.dataValues };
  }

  async updateReview(data, reviewId) {
    const review = await db.Review.update(data, {
      where: { id: reviewId },
      include: "user",
    });
    return review;
  }

  async deleteReview(reviewId) {
    await db.Review.destroy({ where: { id: reviewId } });
    await db.ImageComment.destroy({ where: { reviewId: reviewId } });
    return reviewId;
  }

  async getAllReviewByProduct(productId, page) {
    const review = await db.Review.findAll({
      where: {
        productId: +productId,
      },
      include: ["user", "image"],
      limit: 16,
      offset: 16 * +page,
    });
    const { count } = await db.Review.findAndCountAll({
      where: { productId: +productId },
      offset: 16,
      limit: 16,
    });
    return { review, count };
  }

  async getAllReviewByUser(userId) {
    const review = db.Review.findAll({
      where: { userId: userId },
      include: "user",
    });
    return review;
  }
}
module.exports = new ReviewService();
