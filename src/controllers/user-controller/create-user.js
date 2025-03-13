// backend/controllers/authController.js
import bcrypt from "bcrypt";
import { UserModel } from "../../models/user.model.js";

export const createUser = async (req, res) => {
  try {
    const { email, password, name, phoneNumber } = req.body;

    if (!email || !password || !name || !phoneNumber) {
      return res
        .status(400)
        .json({
          message: "Email, password, name, and phone number are required",
        });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await UserModel.create({
      email,
      password: hashedPassword,
      name,
      phoneNumber,
    });

    res.status(201).json({
      message: "User signed up successfully",
      user: {
        id: newUser._id.toString(),
        email: newUser.email,
        name: newUser.name,
        phoneNumber: newUser.phoneNumber,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "Server error",
      error: err.message,
    });
  }
};
