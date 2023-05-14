const jwt = require("jsonwebtoken");
const MyError = require("../middlewares/myError");

const { PASSWORD_KEY } = process.env;

const tokenPassword = {
  async genarateTokenPassword(Email) {
    if (!Email) throw new MyError("Email invalid!");
    return await jwt.sign(Email, PASSWORD_KEY, { expiresIn: "10m" });
  },

  async verifyTokenPassword(token) {
    if (!token) return new MyError("Token invalid!");
    return await jwt.verify(token, PASSWORD_KEY);
  },
};

module.exports = tokenPassword;
