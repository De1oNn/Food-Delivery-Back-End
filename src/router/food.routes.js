import { Router } from 'express'
import { createFood } from '../controllers/food-controller/create-food.js'
import { getFoods } from '../controllers/food-controller/get-food.js'
// import { createFoodCategory } from '../controllers/food-category/create-food-catergory.js'
// import { getFoodCategories } from '../controllers/food-category/get-food-category.js'
import { deleteFood } from '../controllers/food-controller/delete-food.js'
export const foodRouter = Router()

foodRouter.post("/food", createFood)
foodRouter.get("/food", getFoods)

// foodRouter.post("/food-category", createFoodCategory)
// foodRouter.get("/food-category", getFoodCategories)
 
foodRouter.delete("/:id", deleteFood)