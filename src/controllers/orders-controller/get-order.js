import { foodOrderModel } from "../../models/food-order-model.js";


export const getOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const order = foodOrderModel.findById(orderId).populate("user")
        if (!order) {
            return req.status(404).json({ message: "Order not found" })
        }
        res.json(order)
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "error", error })
    }
}