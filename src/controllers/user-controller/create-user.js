import bcrypt from "bcrypt";
import { UserModel } from "../../models/user.model.js";

export const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Ensure both email and password are provided
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Check if the email already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user and save to the database
    const newUser = await UserModel.create({ email, password: hashedPassword });

    // Return the response with the user information
    res.status(201).json({
      message: "User signed up successfully",
      user: {
        id: newUser._id.toString(), // Convert _id to string to ensure consistency with frontend
        email: newUser.email,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "Server error",
      error: err.message,
    });
  }
};
