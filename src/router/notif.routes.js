import express from "express"
import { createNotif } from "../controllers/notif-controller/create-notif.js";
import { getNotifications } from "../controllers/notif-controller/get-notification.js";
import { deleteNotif } from "../controllers/notif-controller/delete-notif.js";

export const notifRouter = express.Router();

notifRouter.get("/", getNotifications);
notifRouter.post("/", createNotif)
notifRouter.delete("/:id", deleteNotif);