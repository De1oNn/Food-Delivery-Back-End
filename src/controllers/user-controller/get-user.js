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
 export const getAllUsers = async (req, res) => {
   try {
     const { page = 1, limit = 10 } = req.query;
     const skip = (page - 1) * limit;
     const users = await UserModel.find()
       .select("-password")
       .skip(skip)
       .limit(parseInt(limit));
     const totalUsers = await UserModel.countDocuments();

     res.status(200).json({
       users,
       pagination: {
         currentPage: parseInt(page),
         totalPages: Math.ceil(totalUsers / limit),
         totalUsers,
         limit: parseInt(limit),
       },
     });
   } catch (error) {
     res.status(500).json({ error: error.message });
   }
 };
 