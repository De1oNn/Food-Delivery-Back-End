import { foodCategoryModel } from '../../models/food-category.model.js';

export const getFoodCategories = async (req, res) => {
  try {
    const categories = await foodCategoryModel.find();
    res.status(200).json({
      message: "Categories retrieved successfully",
      categories: categories,
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};