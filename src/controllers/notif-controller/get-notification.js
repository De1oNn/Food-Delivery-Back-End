import Notification from "../../models/Notification.js"; // Import the model

export const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find().sort({ createdAt: -1 }); // Use model
    res.status(200).json({
      notifications,
    });
  } catch (error) {
    console.log("Error fetching notifications:", error);
    res.status(500).json({
      message: "Caught error while fetching notifications",
      error: error.message,
    });
  }
};
