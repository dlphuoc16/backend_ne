const User = require("../models/user.model");

// Hàm lấy thông tin người dùng dựa trên ID
exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Hàm lấy thông tin người dùng dựa trên email
// auth.controller.js

exports.getUserByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user by email:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Hàm cập nhật thông tin người dùng
// Hàm cập nhật thông tin người dùng
exports.updateUserProfile = async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, email, avatarUrl } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, email, avatarUrl },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating user profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
