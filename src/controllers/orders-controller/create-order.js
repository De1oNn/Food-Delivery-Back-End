import { foodOrderModel } from "../../models/food-order-model.js";
import { UserModel } from "../../models/user.model.js";

export const createOrder = async (req, res) => {
  try {
    const { user, totalPrice, foodOrderItems, status } = req.body;

    // Create the new order
    const newOrder = await foodOrderModel.create({
      foodOrderItems,
      totalPrice,
      status,
      user,
    });

    // Find the user
    const userData = await UserModel.findById(user);
    if (!userData) {
      // If user not found, still return success but log a warning
      console.warn(`User with ID ${user} not found. Order created but not linked to user.`);
      return res.status(201).json({
        message: "Order created successfully, but user not found!",
        order: newOrder,
      });
    }

    // Update user's orderedFoods
    await UserModel.findOneAndUpdate(
      { _id: user },
      { orderedFoods: [...userData.orderedFoods, newOrder._id] }
    );

    console.log("Order created and linked to user:", newOrder);
    res.status(201).json({
      message: "Order created successfully!",
      order: newOrder,
    });
  } catch (error) {
    console.error("Error in createOrder:", error);
    res.status(500).json({
      message: "Failed to create order",
      error: error.message,
    });
  }
};