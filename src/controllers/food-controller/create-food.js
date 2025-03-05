import { foodModel } from "../../models/food.model.js";

export const createFood = async (req, res) => {
    try {
        const { foodName, price, image, ingredients, category } = req.body;

        const newFood = new foodModel({
            foodName,
            price,
            image,
            ingredients,
            category
        });
        const saveFood = await newFood.save();

        res.status(201).json({
            message: "Food created successfully",
            food: saveFood,
        });
    }   catch (error) {
        res.status(500).json({
            message: "error",
            error
        })
    }
}