const jwt = require("jsonwebtoken");
const tokenUtils = require("../utils/tokenUtils");
const db = require("../models");
const MyError = require("./myError");

const checkAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.replace("Bearer ", "");
    const data = await tokenUtils.verifyToken(token);
    const user = await db.User.findOne({
      where: { email: data.user },
    });
    if (!user) {
      throw new MyError("Token expired!");
    }
    req.user = { email: user.email, userId: user.id };
    next();
  } catch (error) {
    return res.status(401).json({
      status: 401,
      message: "Not authorized to access this resource!",
    });
  }
};

module.exports = checkAuth;
