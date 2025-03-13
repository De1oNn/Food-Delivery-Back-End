import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; // Add this import
import { UserModel } from "../../models/user.model.js";

export const createUser = async (req, res) => {
  try {
    const { email, password, name, phoneNumber } = req.body;

    if (!email || !password || !name || !phoneNumber) {
      return res.status(400).json({
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

    // Generate JWT token
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET || "secret_key_fallback",
      { expiresIn: "1h" }
    );

    // Prepare user data for response (exclude password)
    const userData = newUser.toObject();
    delete userData.password;

    res.status(201).json({
      message: "User signed up successfully",
      token, // Add token to response
      user: userData, // Return full user object (consistent with login)
    });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({
      message: "Server error",
      error: err.message,
    });
  }
};