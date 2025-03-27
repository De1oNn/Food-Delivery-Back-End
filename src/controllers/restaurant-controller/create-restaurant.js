import Restaurant from "../../models/restaurant.js"; // Capitalize for consistency

export const createRestaurant = async (req, res) => {
  try {
    const { location, picture, name, information, phoneNumber } = req.body;
    if (!location || !picture || !name || !information || !phoneNumber) {
      return res.status(400).json({
        message: "Please provide all the information",
      });
    }

    const newRestaurant = new Restaurant({
      location,
      picture,
      name,
      information,
      phoneNumber,
    });

    await newRestaurant.save();

    res.status(201).json({
      message: "Restaurant added successfully",
    });
  } catch (error) {
    console.log("Error adding restaurant", error);
    res.status(500).json({
      message: "Error while adding restaurant",
      error: error.message,
    });
  }
};
