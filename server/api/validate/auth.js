const IsEmail = require("isemail");
const db = require("../models/index");
const MyError = require("../middlewares/myError");

const userValidate = {
  validateEmail: function (email) {
    if (!email) return false;

    const isEmail = IsEmail.validate(email);
    return isEmail;
  },
  validateName: function (name) {
    if (name.length < 2 || name.length > 30) {
      return false;
    }
    return true;
  },
  validatePassword: function (password) {
    if (password.length < 6 || password.length > 30) {
      return false;
    }
    return true;
  },
  checkRegistryInfo: async function (userInfo) {
    const { email, password, name } = userInfo;
    const error = {};

    if (!name || !this.validateName(name)) {
      error.name = "Tên không hợp lệ!";
    }

    if (!this.validateEmail(email)) {
      error.email = "Email không hợp lệ!";
    } else {
      const isExist = await db.User.findOne({ where: { email: email } });
      if (isExist) {
        error.email = "Email đã tồn tại!";
      }
    }

    if (!password || !this.validatePassword(password)) {
      error.password = "Mật khẩu không hợp lệ!";
    }

    if (Object.keys(error).length !== 0) {
      throw new MyError(error);
    }

    return userInfo;
  },
  checkLoginUser: async function (userInfo) {
    const { email, password } = userInfo;
    const error = {};

    if (!this.validateEmail(email)) {
      error.email = "Email không hợp lệ!";
    } else {
      const isExist = await db.User.findOne({ where: { email: email } });
      if (!isExist) {
        error.email = "Email không tồn tại!";
      }
    }

    if (!password || !this.validatePassword(password)) {
      error.password = "Mật khẩu không hợp lệ!";
    }

    if (Object.keys(error).length !== 0) {
      throw new MyError(error);
    }

    return userInfo;
  },
  checkPasswordReset: function (password) {
    if (!password) throw new MyError("Không có mật khẩu!");
    if (!this.validatePassword(password)) {
      throw new MyError("Mật khẩu không hợp lệ!");
    }
    return password;
  },
};

module.exports = userValidate;
