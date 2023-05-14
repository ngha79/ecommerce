const error = require("http-errors");
const authService = require("../services/authService");

class AuthController {
  async register(req, res, next) {
    try {
      const { user, token } = await authService.register(req.body);
      res.json({ message: "Đăng ký tài khoản thành công.", user, token });
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const data = await authService.login(req.body);
      res.json(data);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuthController();
