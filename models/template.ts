import mongoose from "mongoose";

const templateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  type: {
    type: String,
    required: true,
  },
  subtype: {
    type: String,
    required: true,
  },
  jsx: {
    type: String,
    required: true,
  },
  jsxOption: {
    type: String,
    required: true,
  },
  sampleData: {
    name: String,
    initials: String,
    email: String,
    phone: String,
    address: String,
    date: Date,
    // Cover Letter Info
    recruiterName: String,
    recruiterPosition: String,
    hiringCompanyName: String,
    hiringCompanyAddress: String,
    coverLetterOpener: String,
    coverLetterBody1: String,
    coverLetterBody2: String,
    coverLetterCloser: String,
  },
  dynamicFields: [String],
});

const Template =
  mongoose.models.Template || mongoose.model("Template", templateSchema);
export default Template;
