"use client";
import Template1 from "@/components/CoverLetter/sample-templates/Template1";
import Template2 from "@/components/CoverLetter/sample-templates/Template2";
import Template3 from "@/components/CoverLetter/sample-templates/Template3";
import ChooseTemplateComponent from "@/components/SubComponents/ChooseTemplateComponent";
import React from "react";

const ChooseTemplate = () => {
  return (
    <>
      <ChooseTemplateComponent
        title={`Choose a template for your cover letter`}
        templateData={[]}
      />
      {/* <Template1 /> */}
      {/* <Template2 /> */}
      <Template3 />
    </>
  );
};

export default ChooseTemplate;
