const jwt = require("jsonwebtoken");
const tokenUtils = require("../utils/tokenUtils");
const db = require("../models");
const MyError = require("./myError");

const checkAdmin = async (req, res, next) => {
  try {
    const { email } = req.user;
    const user = await db.User.findOne({
      where: { email: email },
    });
    if (!user.isAdmin) {
      throw new MyError("Bạn không có quyền để làm việc này!");
    }
    next();
  } catch (error) {
    return res.status(401).json({
      status: 401,
      message: "Not authorized to access this resource!",
    });
  }
};

module.exports = checkAdmin;
