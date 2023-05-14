const { Op } = require("sequelize");
const db = require("../models");

class ProductService {
  async createProduct(data, image) {
    let product;
    if (image) {
      data.image_url = image[0].path;
      product = await db.Product.create(data);
      image.map(async (image) => {
        return await db.ImageProduct.create({
          productId: product.id,
          image_url: image.path,
        });
      });
    } else {
      product = await db.Product.create(data);
    }
    return product;
  }

  async updateProduct(data, image, productId) {
    if (image) {
      image.map(async (image) => {
        return await db.ImageProduct.create({
          productId: productId,
          image_url: image,
        });
      });
    }
    if (data.imageDelete) {
      data.imageDelete.map(async (image) => {
        return await db.ImageProduct.destroy({
          where: { id: image },
        });
      });
    }
    let product = await db.Product.update(data, {
      where: { id: +productId },
    });
    product = await db.Product.findOne({ where: { id: +productId } });
    return { message: "Update product success.", product };
  }

  async deleteProduct(productId) {
    let product = await db.Product.findOne({ where: { id: +productId } });

    db.Product.destroy({
      where: { id: +productId },
    });
    await db.ImageProduct.destroy({
      where: { productId: +productId },
    });
    return { message: "Delete product success.", product };
  }

  async getProductById(productId) {
    let product = await db.Product.findOne({
      where: { id: +productId },
    });
    return { product };
  }

  async getProductBySlug(slug, page, min, max, name, price) {
    let type = "sold",
      data = "DESC";
    if (name) {
      type = "name";
      data = name;
    }
    if (price) {
      type = "price";
      data = price;
    }
    let product = await db.Product.findAll(
      {
        where: {
          [Op.and]: [
            { slug: slug },
            { price: { [Op.between]: [+min || 0, +max || 999] } },
          ],
        },
        order: [[type, data]],
      },
      {
        limit: 16,
        offset: 16 * page,
      }
    );
    const { count } = await db.Product.findAndCountAll({
      where: { slug: slug },
      offset: 16,
      limit: 16,
    });
    return { product, count };
  }

  async getProductBestSeller() {
    let product = await db.Product.findAll({
      order: [["sold", "DESC"]],
      limit: 4,
    });
    return { product };
  }

  async getProductBundle() {
    let product = await db.Product.findAll({
      where: { slug: "bundle" },
      limit: 4,
    });
    return { product };
  }

  async getProductSearch(search, page, min, max, name, price) {
    let type = "sold",
      data = "DESC";
    if (name) {
      type = "name";
      data = name;
    }
    if (price) {
      type = "price";
      data = price;
    }
    let product = await db.Product.findAll({
      where: {
        [Op.and]: [
          { name: { [Op.like]: `%${search}%` } },
          {
            price: { [Op.between]: [+min || 0, +max || 999] },
          },
        ],
      },
      order: [[type, data]],
      limit: 16,
      offset: 16 * page,
    });
    const { count } = await db.Product.findAndCountAll({
      where: { name: { [Op.like]: `%${search}%` } },
      offset: 16,
      limit: 16,
    });
    return { product, count };
  }
  async getProductFlavor(type, productId) {
    if (type) {
      return await db.Product.findAll({
        where: {
          [Op.and]: [{ id: { [Op.notIn]: [productId] }, slug: type }],
        },
        limit: 4,
      });
    }
    return await db.Product.findAll({
      where: {
        id: { [Op.notIn]: [productId] },
      },
      limit: 4,
    });
  }

  async getAllProduct(page, min, max, name, price) {
    let type = "sold",
      data = "DESC";
    if (name) {
      type = "name";
      data = name;
    }
    if (price) {
      type = "price";
      data = price;
    }
    let product = await db.Product.findAll({
      where: {
        price: { [Op.between]: [+min || 0, +max || 999] },
      },
      order: [[type, data]],
      limit: 16,
      offset: 16 * page,
    });
    const { count } = await db.Product.findAndCountAll({
      offset: 16,
      limit: 16,
    });
    return { product, count };
  }
}

module.exports = new ProductService();
