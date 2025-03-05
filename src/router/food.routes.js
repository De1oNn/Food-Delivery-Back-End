import { Router } from 'express'
import { createFood } from '../controllers/food-controller/create-food.js'
import { getFood } from '../controllers/food-controller/get-food.js'
import { authorizationMiddleware } from '../middleware/authorization.js'
export const foodRouter = Router()

foodRouter.post("/",authorizationMiddleware, createFood)
foodRouter.get("/", getFood)