const db = require("../models");

const adminAuth = async (req, res, next) => {
  const user = db.User.findOne({ where: { email: req.email } });
  const { isAdmin } = user;
  if (!isAdmin) {
    res.status(401).json({
      status: 401,
      message: "Forbidden to access this resource",
    });
  }
  next();
};

module.exports = adminAuth;
