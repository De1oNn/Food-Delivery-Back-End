import { foodOrderModel } from "../../models/food-order-model.js";

export const getOrder = async (req, res) => {
  try {
    const { username } = req.query;
    let query = {};
    if (username) {
      query = {
        user: {
          $in: await foodOrderModel
            .find({ "user.name": username })
            .distinct("user"),
        },
      };
    }

    const orders = await foodOrderModel
      .find(query)
      .populate("user", "name")
      .populate("foodOrderItems.food", "foodName price image")
      .sort({ createdAt: -1 });

    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No orders found" });
    }

    res.status(200).json({
      message: "Orders retrieved successfully",
      orders,
    });
  } catch (error) {
    console.error("Get orders error:", error);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const validStatuses = ["PENDING", "CANCELED", "DELIVERED"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        message: "Invalid status value",
      });
    }

    const order = await foodOrderModel
      .findByIdAndUpdate(orderId, { status }, { new: true })
      .populate("user", "name")
      .populate("foodOrderItems.food", "foodName price image");

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    res.status(200).json({
      message: "Order status updated successfully",
      order,
    });
  } catch (error) {
    console.error("Update order status error:", error);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
