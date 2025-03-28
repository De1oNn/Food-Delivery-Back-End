import { Schema, model } from mongoose;

export const foodOrderItemSchema = new Schema(
  {
    food: { type: Schema.Types.ObjectId, ref: "Food", required: true },
    quantity: { type: Number, required: true },
  },
  {
    _id: false,
  }
);
