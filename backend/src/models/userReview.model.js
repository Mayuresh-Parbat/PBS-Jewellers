import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    reviewTitle: {
      type: String,
      required: true,
    },
    
