import TemplateHeroComponent from "@/components/SubComponents/ChooseTemplateComponent";
import { resumeTemplateData } from "@/constants/Resume";
import React from "react";

const TemplateHero = () => {
  return (
    <TemplateHeroComponent
      title="Take A Look at our Cover Letter Templates"
      templateData={resumeTemplateData}
    />
  );
};

export default TemplateHero;
