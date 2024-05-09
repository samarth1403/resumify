"use client";
import ChooseTemplateComponent from "@/components/SubComponents/ChooseTemplateComponent";
import React from "react";

const ChooseTemplate = () => {
  return (
    <>
      <ChooseTemplateComponent
        title={`Choose a template for your cover letter`}
        templateData={[]}
      />
    </>
  );
};

export default ChooseTemplate;
