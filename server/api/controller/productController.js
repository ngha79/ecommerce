const productService = require("../services/productService");

class ProductController {
  async createProduct(req, res, next) {
    try {
      const product = await productService.createProduct(req.body, req.files);
      return res.json(product);
    } catch (error) {
      next(error);
    }
  }

  async updateProduct(req, res, next) {
    const { productId } = req.params;
    try {
      const { message, product } = await productService.updateProduct(
        req.body,
        req.files,
        productId
      );
      return res.json({ status: 200, message, product });
    } catch (error) {
      next(error);
    }
  }

  async deleteProduct(req, res, next) {
    const { productId } = req.params;
    try {
      const { message, product } = await productService.deleteProduct(
        productId
      );
      return res.json({ status: 200, message, product });
    } catch (error) {
      next(error);
    }
  }

  async getProductById(req, res, next) {
    const { productId } = req.params;
    try {
      const { product, count } = await productService.getProductById(productId);
      return res.json({ status: 200, product, count });
    } catch (error) {
      next(error);
    }
  }

  async getProductBySlug(req, res, next) {
    const { slug, page, min, max, name, price } = req.query;
    try {
      const { product, count } = await productService.getProductBySlug(
        slug,
        page,
        min,
        max,
        name,
        price
      );
      return res.json({ status: 200, product, count });
    } catch (error) {
      next(error);
    }
  }

  async getProductBestSeller(req, res, next) {
    try {
      const { product } = await productService.getProductBestSeller();
      return res.json({ status: 200, product });
    } catch (error) {
      next(error);
    }
  }

  async getProductBundle(req, res, next) {
    try {
      const { product } = await productService.getProductBundle();
      return res.json({ status: 200, product });
    } catch (error) {
      next(error);
    }
  }

  async getProductSearch(req, res, next) {
    try {
      const { search, page, min, max, name, price } = req.query;
      const { product, count } = await productService.getProductSearch(
        search,
        page,
        min,
        max,
        name,
        price
      );
      return res.json({ status: 200, product, count });
    } catch (error) {
      next(error);
    }
  }

  async getProductFlavor(req, res, next) {
    try {
      const { type, productId } = req.params;
      const product = await productService.getProductFlavor(type, productId);
      return res.json({ status: 200, product });
    } catch (error) {
      next(error);
    }
  }

  async getAllProduct(req, res, next) {
    try {
      const { page, min, max, name, price } = req.query;
      const { product, count } = await productService.getAllProduct(
        page,
        min,
        max,
        name,
        price
      );
      return res.json({ status: 200, product, count });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ProductController();
