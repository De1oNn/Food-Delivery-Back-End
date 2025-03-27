import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    location: {
        type: String,
        require: true
    },
    picture: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    information: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
      createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model("restaurant", restaurantSchema)