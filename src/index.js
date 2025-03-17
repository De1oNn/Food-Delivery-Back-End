import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userRouter } from "./router/user.routes.js";
import { foodRouter } from "./router/food.routes.js";
// import { categoryRouter } from "./router/category.routes.js";
import { foodOrderRouter } from "./router/food.order.routes.js";
import cors from 'cors'


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
// app.use("/food-category", categoryRouter)
app.use("/order", foodOrderRouter)

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
