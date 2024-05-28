import { RenderHtmlContent } from "@/components/SubComponents";
import { coverLetterType, templateType } from "@/constants";
import React, { forwardRef } from "react";

type PathWithTypePropertyBaseType = {
  template: templateType;
  sampleData: coverLetterType;
  ref?: React.RefObject<HTMLDivElement>;
};

const TemplateModalComponent = forwardRef<
  HTMLDivElement,
  PathWithTypePropertyBaseType
>(function TemplateModalComponent({ template, sampleData }, ref) {
  return (
    <RenderHtmlContent
      className="scale-100"
      dynamicFields={template.dynamicFields}
      sampleData={sampleData}
      html={template.html}
      ref={ref}
    />
  );
});

RenderHtmlContent.displayName = "TemplateModalComponent";

export default TemplateModalComponent;
