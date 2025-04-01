import { Router } from "express"
import { getOrder } from "../controllers/orders-controller/get-order.js";
import { createOrder } from "../controllers/orders-controller/create-order.js";
import { updateOrderStatus } from "../controllers/orders-controller/get-order.js";
import { deleteOrder } from "../controllers/orders-controller/delete-order.js";
export const foodOrderRouter = Router();

foodOrderRouter.post("/", createOrder)
foodOrderRouter.get("/", getOrder)

foodOrderRouter.patch("/:orderId", updateOrderStatus);
foodOrderRouter.delete("/:orderId", deleteOrder)
