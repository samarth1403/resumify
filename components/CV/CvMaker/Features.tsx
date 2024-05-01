import React from "react";
import FeaturesComponent from "@/components/SubComponents/FeaturesComponent";
import { cvAlternateData } from "@/constants/CV";

const Features = () => {
  return (
    <FeaturesComponent
      title="Features of our CV Maker"
      resumeAlternateData={cvAlternateData}
    />
  );
};

export default Features;
