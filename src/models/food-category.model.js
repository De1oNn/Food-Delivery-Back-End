import { Schema, model } from "mongoose";

const foodCategorySchema = new Schema(
  {
    categoryName: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export const foodCategoryModel = model("FoodCategories", foodCategorySchema);