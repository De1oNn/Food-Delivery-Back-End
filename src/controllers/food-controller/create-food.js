import { foodModel } from "../../models/food.model.js";

export const createFood = async (req, res) => {
  try {
    const { foodName, price, image, ingredients, category } = req.body;

    if (!foodName || !price || !ingredients || !category) {
      return res.status(400).json({
        message: "All fields are required",
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
