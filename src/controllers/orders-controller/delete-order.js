import { foodOrderModel } from "../../models/food-order-model.js";

export const deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params; // Match :orderId from the route
    console.log("Backend received order ID:", orderId);

    const deletedOrder = await foodOrderModel.findByIdAndDelete(orderId);
    console.log("Deleted order:", deletedOrder);

    if (!deletedOrder) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    res.status(200).json({
      message: "Order deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting order:", error);
    res.status(500).json({
      error: error.message,
    });
  }
};
