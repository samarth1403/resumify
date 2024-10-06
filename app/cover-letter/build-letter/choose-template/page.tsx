"use client";
import { ChooseTemplateComponent } from "@/components/SubComponents";

const ChooseTemplate = () => {
  return (
    <>
      <ChooseTemplateComponent
        title={`Choose a template for your cover letter`}
        text="Stand out and get hired faster with our collection of free professional cover letter templates expertly-designed to land you the perfect position."
        type="cover-letter"
      />
    </>
  );
};

export default ChooseTemplate;
