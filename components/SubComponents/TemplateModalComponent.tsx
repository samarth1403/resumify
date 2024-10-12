import { RenderHtmlContent } from "@/components/SubComponents";
import { dataType, templateType } from "@/constants";
import React, { forwardRef } from "react";

type PathWithTypePropertyBaseType = {
  template: templateType;
  sampleData: dataType;
  ref?: React.RefObject<HTMLDivElement>;
  type?: string;
  renderHtmlOption?: boolean;
};

const TemplateModalComponent = forwardRef<
  HTMLDivElement,
  PathWithTypePropertyBaseType
>(function TemplateModalComponent(
  { template, sampleData, type, renderHtmlOption = false },
  ref
) {
  return (
    <RenderHtmlContent
      className="scale-100"
      dynamicFields={template.dynamicFields}
      sampleData={sampleData}
      html={renderHtmlOption ? template.htmlOption : template.html}
      ref={ref}
      isModalOpen={!renderHtmlOption}
      type={type}
    />
  );
});

RenderHtmlContent.displayName = "TemplateModalComponent";

export default TemplateModalComponent;
