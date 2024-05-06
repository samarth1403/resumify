import TemplateHeroComponent from "@/components/SubComponents/TemplateHeroComponent";
import { resumeTemplateData } from "@/constants/Resume";
import React from "react";

const TemplateHero = () => {
  return (
    <TemplateHeroComponent
      title="Job-winning Professional Resume Templates"
      templateData={resumeTemplateData}
    />
  );
};

export default TemplateHero;
