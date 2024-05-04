const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

// Route xử lý yêu cầu GET đến /api/user/profile
router.get("/profile", async (req, res) => {
  try {
    // Lấy thông tin người dùng từ cơ sở dữ liệu
    const userId = req.userId; // Đây là giả định, bạn cần cung cấp cách xác định userId từ request

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Trả về thông tin người dùng
    res.json(user);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
