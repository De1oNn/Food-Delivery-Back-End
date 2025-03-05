import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    id: { type: Schema.Types.ObjectId },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, },
    address: { type: String,  },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
    orderedFoods: [{ type: Schema.Types.ObjectId, ref: "Foods" }],
    name: { type: String },
    isVerified: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const UserModel = model("Users", userSchema);
