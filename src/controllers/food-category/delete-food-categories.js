import { foodCategoryModel } from "../../models/food-category.model.js";

export const deleteCategories = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCategory = await foodCategoryModel.findOneAndDelete({ _id: id });
        if (!deletedCategory) {
            return res.status(404).json({
                message: "Category not found"
            });
        }
        res.status(200).json({
            message: "Category deleted successfully",
            deletedCategoryId: id
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};