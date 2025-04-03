import Notification from "../../models/Notification.js"

export const createNotif = async (req, res) => {
  try {
    const { notif } = req.body;
    if (!notif) {
      return res.status(400).json({
        message: "Please provide a notification message",
      });
    }

    const newNotification = new Notification({
      message: notif,
    });

    await newNotification.save();

    res.status(201).json({
      message: "Notification created successfully",
      notification: newNotification,
    });
  } catch (error) {
    console.log("Error creating notification:", error);
    res.status(500).json({
      message: "Caught error while creating notification",
      error: error.message,
    });
  }
};
