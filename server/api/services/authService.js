const db = require("../models");
const tokenUtils = require("../utils/tokenUtils");
const userValidate = require("../validate/auth");
const bcrypt = require("bcrypt");
const error = require("http-errors");

class AuthService {
  async register(userInfo) {
    await userValidate.checkRegistryInfo(userInfo);
    const hashPassword = await bcrypt.hash(userInfo.password, 8);
    userInfo.password = hashPassword;
    const user = await db.User.create(userInfo);
    await db.Cart.create({ userId: user.id });
    const token = await tokenUtils.generateToken({ user: user.email });
    delete user.dataValues.password;
    delete user.dataValues.isAdmin;
    return { user, token };
  }

  async login(userInfo) {
    await userValidate.checkLoginUser(userInfo);
    const user = await db.User.findOne({ where: { email: userInfo.email } });
    const checkPassword = await bcrypt.compare(
      userInfo.password,
      user.password
    );
    if (!checkPassword) {
      throw new error.BadRequest("Mật khẩu không chính xác!");
    }

    const token = await tokenUtils.generateToken({ user: user.email });
    delete user.dataValues.password;
    delete user.dataValues.isAdmin;
    return { user, token };
  }
}

module.exports = new AuthService();
