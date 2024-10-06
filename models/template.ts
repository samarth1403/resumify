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
  html: {
    type: String,
    required: true,
  },
  htmlOption: {
    type: String,
    required: true,
  },
  sampleData: {
    name: String,
    initials: String,
    email: String,
    phone: String,
    address: String,
    date: String,
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
