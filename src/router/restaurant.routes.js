import express from "express";
import { createRestaurant } from "../controllers/restaurant-controller/create-restaurant.js";
import { getRestaurants } from "../controllers/restaurant-controller/get-restaurant.js";
import { getRestaurant } from "../controllers/restaurant-controller/get-restaurant.js";

export const restaurantRouter = express.Router();

restaurantRouter.post("/", createRestaurant);
restaurantRouter.get("/", getRestaurants);
restaurantRouter.get("/:id", getRestaurant);
