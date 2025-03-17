import { Router } from "express"
import { getOrder } from "../controllers/orders-controller/get-order.js";
import { createOrder } from "../controllers/orders-controller/create-order.js";
export const foodOrderRouter = Router();

foodOrderRouter.post("/", createOrder)
foodOrderRouter.get("/", getOrder)
