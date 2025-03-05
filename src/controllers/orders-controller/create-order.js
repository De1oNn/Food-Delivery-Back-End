import { foodOrderModel } from "../../models/food-order-model.js";
import { UserModel } from "../../models/user.model.js";

export const createOrder = async (req, res) => {
    try {
        const { user, totalPrice, foodOrderItems, status } = req.body;
        const newOrder = await foodOrderModel.create({
            foodOrderItems,
            totalPrice,
            status,
            user,
        });
        const userData = await UserModel.findById(user);
        console.log(newOrder);
        
        await UserModel.findOneAndUpdate({_id:user}, {orderedFoods: [...userData.orderedFoods, newOrder._id]})

        res.status(201).json({
            message: "Order created successfully!",
            order: newOrder
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            message: "Failed to create order", 
            error 
        });
    }
}