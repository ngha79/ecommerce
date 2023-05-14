const { sendEmail } = require("../helpers/sendMail");
const MyError = require("../middlewares/myError");
const db = require("../models");
const tokenPassword = require("../utils/tokenPassword");
const userValidate = require("../validate/auth");
const bcrypt = require("bcrypt");

class UserService {
  async checkAdminUser(userId) {
    let user = await db.User.findOne({ where: { id: userId } });
    if (user.isAdmin) {
      delete user.password;
      delete user.isAdmin;
      return user;
    }
    return null;
  }

  async updateInfoUser(data, userId) {
    let user = await db.User.update(data, { where: { id: userId } });
    user = await db.User.findOne({ where: { id: userId } });
    delete user.password;
    return user;
  }

  async deleteUserByAdmin(userId) {
    await db.User.destroy({ where: { id: userId } });
    return userId;
  }

  async updateInfoUserbyAdmin(data, userId) {
    let user = await db.User.update(data, { where: { id: userId } });
    user = await db.User.findOne({ where: { id: userId } });
    delete user.password;
    return user;
  }

  async getAllUser(page) {
    let user = await db.User.findAll({
      where: { isAdmin: 0 },
      limit: 20,
      offset: 20 * +page,
    });
    return user;
  }

  async forgotPassword(email) {
    const user = await db.User.findOne({ where: { email: email } });
    if (user) {
      throw new MyError("Email doesn't exist!");
    }
    const date = Date.now();
    const token = await tokenPassword.genarateTokenPassword({ email, date });
    const reserUrl = `Hi, Please follow this link to create new password for your account, click to reset password <a href='http://localhost:3000/reset-password/${token}'>Click here</a>`;
    const data = {
      to: email,
      text: `Hi ${user.name}`,
      subject: "Forgot password link",
      htm: reserUrl,
    };
    sendEmail(data);
    return token;
  }

  async resetPassword(token, password) {
    const { email, date } = await tokenPassword.verifyTokenPassword(token);
    let user = await db.User.findOne({ where: { email: email } });
    if (user) {
      throw new MyError("Email doesn't exist!");
    }
    const time = Date.now();
    if (+date + 10 * 60 < time) {
      throw new MyError("Time expired!");
    }
    const checkPassword = userValidate.checkPasswordReset(password);
    user = await db.User.update(
      { password: checkPassword },
      { where: { email: email } }
    );
    return { message: "Đổi mật khẩu thành công." };
  }

  async changePassword(userId, currentPassword, newpassword, repassword) {
    if (newpassword !== repassword) {
      throw new MyError("Mật khẩu không trùng nhau!");
    }
    const user = await db.User.findOne({ where: { id: userId } });
    const checkCurrentPassword = await bcrypt.compare(
      currentPassword,
      user.password
    );
    if (!checkCurrentPassword) {
      throw new MyError("Password incorrect!");
    }
    const checkPassword = userValidate.checkPasswordReset(newpassword);
    const hashPassword = await bcrypt.hash(checkPassword, 8);
    await db.User.update({ password: hashPassword }, { where: { id: userId } });
    return { message: "Đổi mật khẩu thành công." };
  }
}

module.exports = new UserService();
