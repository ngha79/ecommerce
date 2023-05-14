const express = require("express");
const userController = require("../controller/userController");
const checkAuth = require("../middlewares/auth");
const checkAdmin = require("../middlewares/admin");

const router = express.Router();

router.put("/", checkAuth, userController.updateInfoUser);
router.put(
  "/user/:userId",
  checkAuth,
  checkAdmin,
  userController.updateInfoUserbyAdmin
);
router.delete(
  "/:userId",
  checkAuth,
  checkAdmin,
  userController.deleteUserByAdmin
);
router.get("/", checkAuth, checkAdmin, userController.getAllUser);
router.get("/checkAdmin", checkAuth, userController.checkAdminUser);
router.put("/forgot-password", checkAuth, userController.forgotPassword);
router.put("/reset-password", checkAuth, userController.resetPassword);
router.put("/change-password", checkAuth, userController.changePassword);

module.exports = router;
