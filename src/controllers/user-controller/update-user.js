import jwt from "jsonwebtoken";
import { UserModel } from "../../models/user.model.js"; 

export const updateUser = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    const { email, name, phoneNumber } = req.body;

    if (!email || !name || !phoneNumber) {
      return res
        .status(400)
        .json({
          message: "All fields (email, name, phoneNumber) are required",
        });
    }

    const updatedUser = await UserModel.findOneAndUpdate(
      { email: email },
      { name, phoneNumber },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "User updated successfully",
      updatedUser: updatedUser,
    });
  } catch (error) {
    console.error("Update user error:", error);
    return res.status(500).json({
      message: "Server error occurred while updating user",
      error: error.message,
    });
  }
};
