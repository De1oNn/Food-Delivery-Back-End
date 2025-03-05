import { UserModel } from "../../models/user.model.js";

 export const getUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await UserModel.findById(userId)
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user)
    } catch (error) {
        res.status(404).json("error", error)
    }
 }