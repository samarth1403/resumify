import React from "react";
import { Button, RenderHtmlContent, Section } from "@/components/SubComponents";
import { coverLetterType, templateType } from "@/constants";

type PathWithTypePropertyBaseType = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  template: templateType;
  sampleData: coverLetterType;
};

const TemplateModalComponent = ({
  template,
  sampleData,
  setIsModalOpen,
}: PathWithTypePropertyBaseType) => {
  const handleModalClose = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  };
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-gray-500 bg-opacity-75">
      <div className="absolute inset-0 flex flex-col items-center justify-start  overflow-auto">
        <div className="flex-start mt-24 max-w-[1000px] flex-col flex-wrap gap-4 rounded-2xl bg-white px-8 pb-8 ">
          <div className="flex w-full items-start justify-between px-4 pt-10">
            <div className=" flex-start max-w-[700px] flex-col gap-6">
              <p className="h4">{template.name}</p>
              <p className="body-2 leading-8 ">{template.description}</p>
              <Button>Use this Template</Button>
            </div>
            <Button onClick={handleModalClose}>X</Button>
          </div>
          <Section
            className="w-full"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="steps"
          >
            <RenderHtmlContent
              className="scale-100 rounded-xl shadow-2xl shadow-gray-400"
              dynamicFields={template.dynamicFields}
              sampleData={sampleData}
              html={template.html}
            />
          </Section>
        </div>
      </div>
    </div>
  );
};

export default TemplateModalComponent;
