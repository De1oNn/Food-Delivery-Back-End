import Restaurant from "../../models/restaurant.js"; // Match the import

export const getRestaurant = async (req, res) => {
  try {
    const restaurants = await Restaurant.find().sort({ createdAt: -1 });
    res.status(200).json({
      restaurants,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while fetching restaurant",
      error: error.message,
    });
  }
};
