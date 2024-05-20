"use client";
import Template1 from "@/components/CoverLetter/sample-templates/Template1";
import ChooseTemplateComponent from "@/components/SubComponents/ChooseTemplateComponent";

const ChooseTemplate = () => {
  return (
    <>
      <ChooseTemplateComponent
        title={`Choose a template for your cover letter`}
        text="Stand out and get hired faster with our collection of free professional cover letter templates expertly-designed to land you the perfect position."
        templateData={[]}
      />
      {/* <Template1 /> */}
    </>
  );
};

export default ChooseTemplate;
