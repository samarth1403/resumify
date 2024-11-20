import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    trim: true,
    maxLength: 500, // Limiting the length of the comment
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const ReviewModel =
  mongoose.models.Review || mongoose.model("Review", reviewSchema);
export default ReviewModel;
