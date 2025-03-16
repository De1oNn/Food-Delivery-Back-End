import { foodModel } from '../../models/food.model.js';

export const getFoods = async (req, res) => {
  try {
    const foods = await foodModel.find().populate('category');
    res.status(200).json({
      message: "Foods retrieved successfully",
      foods: foods,
    });
  } catch (error) {
    console.error("Error fetching foods:", error);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};