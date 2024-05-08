import TemplateHeroComponent from "@/components/SubComponents/ChooseTemplateComponent";
import { resumeTemplateData } from "@/constants/Resume";
import React from "react";

const TemplateHero = () => {
  return (
    <TemplateHeroComponent
      title="Explore our Professional CV Templates"
      templateData={resumeTemplateData}
    />
  );
};

export default TemplateHero;
