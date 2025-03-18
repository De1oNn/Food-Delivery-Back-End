import { foodOrderModel } from "../../models/food-order-model.js";

export const getOrder = async (req, res) => {
  try {
    const orders = await foodOrderModel
      .find()
      .populate("user", "name") 
      .populate("foodOrderItems.food", "foodName price image"); 
    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No orders found" });
    }
    res.status(200).json({
      message: "Orders retrieved successfully",
      orders,
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};