import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
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
    templateId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Template",
    },
  },
  {
    timestamps: true,
  }
);

const Document =
  mongoose.models.Document || mongoose.model("Document", documentSchema);
export default Document;
