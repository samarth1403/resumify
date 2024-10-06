import mongoose from "mongoose";

const exampleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    userData: {},
    templateId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Template",
    },
  },
  {
    timestamps: true,
  }
);

const Example =
  mongoose.models.Example || mongoose.model("Example", exampleSchema);
export default Example;
