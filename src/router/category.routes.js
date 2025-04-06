import { Router } from "express";
import { createFoodCategory } from "../controllers/food-category/create-food-catergory.js";
import { getFoodCategories } from "../controllers/food-category/get-food-category.js";
import { deleteCategories } from "../controllers/food-category/delete-food-categories.js";
// import { authorizationMiddleware } from "../middleware/authorization.js";
export const categoryRouter = Router();

categoryRouter.post("/", createFoodCategory)
categoryRouter.get("/", getFoodCategories)
categoryRouter.delete("/:id", deleteCategories)