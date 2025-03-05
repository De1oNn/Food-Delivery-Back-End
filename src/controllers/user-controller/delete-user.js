import { UserModel } from "../../models/user.model.js";

export const deleteUser = async (req, res) => {
  try {
    const { email } = req.body;

    const deletedUser = await UserModel.findOneAndDelete({ email });
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully", deletedUser });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
