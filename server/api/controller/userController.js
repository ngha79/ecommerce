const userService = require("../services/userService");

class UserController {
  async checkAdminUser(req, res, next) {
    try {
      const { userId } = req.user;
      const user = await userService.checkAdminUser(userId);
      return res.json({ message: "success.", user });
    } catch (error) {
      next(error);
    }
  }

  async updateInfoUser(req, res, next) {
    try {
      const { userId } = req.user;
      const user = await userService.updateInfoUser(req.body, userId);
      return res.json({ message: "Cập nhật thông tin thành công.", user });
    } catch (error) {
      next(error);
    }
  }

  async deleteUserByAdmin(req, res, next) {
    try {
      const { userId } = req.params;
      const user = await userService.deleteUserByAdmin(userId);
      return res.json({ message: "Xóa người dùng thành công.", user });
    } catch (error) {
      next(error);
    }
  }

  async updateInfoUserbyAdmin(req, res, next) {
    try {
      const user = await userService.updateInfoUserbyAdmin(
        req.body,
        req.params.userId
      );
      return res.json({ message: "Cập nhật người dùng thành công.", user });
    } catch (error) {
      next(error);
    }
  }

  async getAllUser(req, res, next) {
    try {
      const { page } = req.query;
      const user = await userService.getAllUser(page);
      return res.json(user);
    } catch (error) {
      next(error);
    }
  }

  async forgotPassword(req, res, next) {
    try {
      const { email } = req.body;
      const token = await userService.forgotPassword(email);
      return res.json(token);
    } catch (error) {
      next(error);
    }
  }

  async resetPassword(req, res, next) {
    try {
      const { token } = req.params;
      const { password } = req.body;
      const { message } = await userService.resetPassword(token, password);
      return res.json(message);
    } catch (error) {
      next(error);
    }
  }

  async changePassword(req, res, next) {
    try {
      const { userId } = req.user;
      const { currentPassword, newpassword, repassword } = req.body;
      const { message } = await userService.changePassword(
        userId,
        currentPassword,
        newpassword,
        repassword
      );
      return res.json(message);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
