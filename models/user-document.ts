import mongoose from "mongoose";

const userDocumentSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    userData: {},
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    template: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Template",
    },
  },
  {
    timestamps: true,
  }
);

const UserDocument =
  mongoose.models.UserDocument ||
  mongoose.model("UserDocument", userDocumentSchema);
export default UserDocument;
