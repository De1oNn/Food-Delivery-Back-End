import { Schema, model } from "mongoose";

const foodSchema = new Schema({
  foodName: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },
  ingredients: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "FoodCategories" },
});

export const foodModel = model("Foods", foodSchema);