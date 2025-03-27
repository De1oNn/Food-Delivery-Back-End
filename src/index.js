import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userRouter } from "./router/user.routes.js";
import { foodRouter } from "./router/food.routes.js";
// import { categoryRouter } from "./router/category.routes.js";
import { foodOrderRouter } from "./router/food.order.routes.js";
import cors from 'cors'
import { notifRouter } from "./router/notif.routes.js";
import { restaurantRouter } from "./router/restaurant.routes.js";


const app = express();
dotenv.config();
const PORT = 5000;
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("Connected to MongoDB");
});

app.use(cors());
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

app.use("/auth", userRouter);
app.use("/", foodRouter);
app.use("/order", foodOrderRouter)
app.use("/notif", notifRouter)
app.use("restaurant", restaurantRouter)
// app.use("/food-category", categoryRouter)

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
