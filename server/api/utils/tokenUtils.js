const jwt = require("jsonwebtoken");
const MyError = require("../middlewares/myError");

const tokenUtils = {
  generateToken: async (data) => {
    if (!data) return null;
    return await jwt.sign(data, process.env.JWT_KEY, {
      expiresIn: "1d",
    });
  },
  verifyToken: async (token) => {
    if (!token) return new MyError("Token invalid!");
    return await jwt.verify(token, process.env.JWT_KEY);
  },
};

module.exports = tokenUtils;
