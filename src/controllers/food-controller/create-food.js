import { foodModel } from "../../models/food.model.js";
import { foodCategoryModel } from "../../models/food-category.model.js";
import mongoose from "mongoose";

export const createFood = async (req, res) => {
  try {
    const { foodName, price, image, ingredients, category } = req.body;

    if (!foodName || !price || !image || !ingredients || !category) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(category)) {
      return res.status(400).json({
        message: "Invalid category ID",
      });
    }

    const categoryExists = await foodCategoryModel.findById(category);
    if (!categoryExists) {
      return res.status(400).json({
        message: "Category does not exist",
      });
    }

    const newFood = new foodModel({
      foodName,
      price,
      image,
      ingredients,
      category,
    });

    const saveFood = await newFood.save();

    res.status(201).json({
      message: "Food created successfully",
      food: saveFood,
    });
  } catch (error) {
    console.error("Error creating food:", error);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
