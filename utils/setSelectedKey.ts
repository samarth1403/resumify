import { coverLetterType, formDataTypes } from "@/constants";
import React from "react";

export const setFormDataKey = (
  key: string,
  value: string | number | boolean | readonly string[],
  setFormData: React.Dispatch<
    React.SetStateAction<coverLetterType | formDataTypes>
  >
) => {
  setFormData((prev) => ({ ...prev, [key]: value }));
};
