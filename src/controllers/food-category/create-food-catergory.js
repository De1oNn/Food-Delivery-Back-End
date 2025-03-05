import { foodCategoryModel } from "../../models/food-category.model.js";


export const createFoodCategory = async (req, res) => {
    try {
        const { categoryName } = req.body;
        if (!categoryName) {
            return res.status(404).json({ message: "Select category name" })
        }
        const changedChategory = new foodCategoryModel({
            categoryName,
        })
        const savedChategory = await changedChategory.save();

        res.status(201).json({
            message: "Category created successfully",
            category: savedChategory
        })
    } catch (error) {
        res.status(404).json({ message: "error", error })
    };
};