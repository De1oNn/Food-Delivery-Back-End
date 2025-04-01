import Notification from "../../models/Notification.js";


export const deleteNotif = async (req, res) => {
  try {
    const { id } = req.params; 
    const deletedNotif = await Notification.findByIdAndDelete(id);

    if (!deletedNotif) {
      return res.status(404).json({
        message: "Notification not found",
      });
    }

    res.status(200).json({
      message: "Notification deleted successfully",
      notification: deletedNotif,
    });
  } catch (error) {
    console.log("Error deleting notification:", error);
    res.status(500).json({
      message: "Caught error while deleting notification",
      error: error.message,
    });
  }
};
