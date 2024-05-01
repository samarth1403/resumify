import React from "react";
import FeaturesComponent from "@/components/SubComponents/FeaturesComponent";
import { coverLetterAlternateData } from "@/constants/CoverLetter";

const Features = () => {
  return (
    <FeaturesComponent
      title="Why use our online Cover Letter Builder ?"
      resumeAlternateData={coverLetterAlternateData}
    />
  );
};

export default Features;
