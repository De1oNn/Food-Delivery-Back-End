import { foodModel } from "../../models/food.model.js"

export const getFood = async (req, res) => {
  try {
    const foods = await foodModel.find().populate("category");
    res.json(foods);
  } catch (error) {
    console.error("Error fetching foods:", error);
    res.status(500).json({
      message: "Error fetching foods",
      error: error.message,
    });
  }
};