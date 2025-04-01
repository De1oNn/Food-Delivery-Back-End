import { foodOrderModel } from "../../models/food-order-model.js";

export const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Backend received order ID:", id);

    const deletedOrder = await foodOrderModel.findByIdAndDelete(id);
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
