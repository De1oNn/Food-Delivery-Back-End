import { Schema, model } from "mongoose";

const foodOrderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "Users", required: true },
  totalPrice: { type: Number, required: true },
  // image: { type: String, required: false },
  foodOrderItems: [
    {
      food: { type: Schema.Types.ObjectId, ref: "Foods", required: true },
      quantity: { type: Number, required: true },
    },
  ],
  status: {
    type: String,
    enum: ["PENDING", "CANCELED", "DELIVERED"],
    default: "PENDING",
  },
}, { timestamps: true });

export const foodOrderModel = model("FoodOrders", foodOrderSchema);