// exports.uploadAvatar = (req, res) => {
//   try {
//     // Tạo URL của ảnh đã tải lên để trả về cho frontend
//     const avatarUrl = `/uploads/${req.file.filename}`;
//     res.json({ avatarUrl }); // Sử dụng biến avatarUrl để trả về URL của ảnh đã tải lên
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Lỗi khi tải ảnh lên" });
//   }
// };
