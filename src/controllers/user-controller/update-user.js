import { UserModel } from "../../models/user.model.js";

export const updateUser = async (req, res) => {
  try {
    const { gmail } = req.body;
    const updatedUser = await UserModel.findOne({ gmail });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User updated successfully", updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
