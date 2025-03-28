import Restaurant from "../../models/restaurant.js"; // Match the import

export const getRestaurants = async (req, res) => {
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
export const getRestaurant = async (req, res) => {
  try {
    const { id } = req.params; // Extract the ID from the URL
    const restaurant = await Restaurant.findById(id);

    if (!restaurant) {
      return res.status(404).json({
        message: "Restaurant not found",
      });
    }

    res.status(200).json({
      restaurant, // Return a single restaurant object
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while fetching restaurant",
      error: error.message,
    });
  }
};
