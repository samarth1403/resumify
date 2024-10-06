import { RenderHtmlContent } from "@/components/SubComponents";
import { dataType, templateType } from "@/constants";
import React, { forwardRef } from "react";

type PathWithTypePropertyBaseType = {
  template: templateType;
  sampleData: dataType;
  ref?: React.RefObject<HTMLDivElement>;
  type?: string;
};

const TemplateModalComponent = forwardRef<
  HTMLDivElement,
  PathWithTypePropertyBaseType
>(function TemplateModalComponent({ template, sampleData, type }, ref) {
  return (
    <RenderHtmlContent
      className="scale-100"
      dynamicFields={template.dynamicFields}
      sampleData={sampleData}
      html={template.html}
      ref={ref}
      isModalOpen={true}
      type={type}
    />
  );
});

RenderHtmlContent.displayName = "TemplateModalComponent";

export default TemplateModalComponent;
