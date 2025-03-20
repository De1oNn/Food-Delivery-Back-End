import express from "express";
import { createUser } from "../controllers/user-controller/create-user.js";
import { deleteUser } from "../controllers/user-controller/delete-user.js";
import { updateUser } from "../controllers/user-controller/update-user.js";
import { getUser } from "../controllers/user-controller/get-user.js";
import { login } from "../controllers/user-controller/logIn.js";
import { authorizationMiddleware } from "../middleware/authorization.js";
import { validateEmailMiddleware } from "../middleware/validateEmail.js";

export const userRouter = express.Router();

userRouter.post("/sign-up", validateEmailMiddleware, createUser);
userRouter.delete("/",authorizationMiddleware, deleteUser);
userRouter.put("/update-user", authorizationMiddleware, updateUser);
userRouter.get("/user", authorizationMiddleware, getUser);
userRouter.post("/log-in",validateEmailMiddleware, login);