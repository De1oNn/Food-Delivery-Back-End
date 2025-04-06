import { foodModel } from "../../models/food.model";

export const deleteFood = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFood = await foodModel.findOneAndDelete({ _id: id });
    if (!deletedFood) {
      return res.status(404).json({
        message: "Food not found",
      });
    }
    res.status(200).json({
      message: "Food deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};  