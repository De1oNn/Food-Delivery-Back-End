import { foodModel } from "../../models/food.model.js"

export const getFood = async (req, res) => {
    try {
        const foods = await foodModel.find().populate(['category']);
        res.json(foods)
    }   catch (error) {
        res.status(404).json({
            message: "error",
            error,
        })
    }
}