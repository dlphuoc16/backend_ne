const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/user/:email", authController.getUser);
router.get("/email/:email", userController.getUserByEmail); // Sửa đổi đường dẫn ở đây
router.put("/:id", userController.updateUserProfile);

module.exports = router;
