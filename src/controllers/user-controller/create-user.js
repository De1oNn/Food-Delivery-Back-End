import bcrypt from "bcrypt";
import { UserModel } from "../../models/user.model.js";

export const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await UserModel.create({ email, password: hashedPassword });

    res.status(202).json({
      message: "User signed up successfully",
      user: { email },
    });
  } catch (err) {
    res.status(500).json({
      message: "Server error",
      error: err.message,
    });
  }
};
