"use client";
import { ChooseTemplateComponent } from "@/components/SubComponents";

const ChooseTemplate = () => {
  return (
    <>
      <ChooseTemplateComponent
        title={`Choose a template for your resume`}
        text="Stand out and get hired faster with our collection of free professional resume templates"
        type="resume"
      />
    </>
  );
};

export default ChooseTemplate;
