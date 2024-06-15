import React, { forwardRef } from "react";

interface RenderHtmlContentProps {
  className: string;
  dynamicFields: string[];
  sampleData: { [key: string]: string };
  html: string;
}

const RenderHtmlContent = forwardRef<HTMLDivElement, RenderHtmlContentProps>(
  function RenderHtmlContent(
    { dynamicFields, sampleData, html, className },
    ref
  ) {
    let renderedTemplate = html;
    dynamicFields?.forEach((field: string) => {
      const regex = new RegExp(`{${field}}`, "g");
      const fieldValue = sampleData[field as keyof typeof sampleData];
      renderedTemplate = renderedTemplate.replace(regex, fieldValue as string);
    });

    return (
      <div
        dangerouslySetInnerHTML={{ __html: renderedTemplate }}
        className={className}
        ref={ref}
      />
    );
  }
);

RenderHtmlContent.displayName = "RenderHtmlContent";

export default RenderHtmlContent;
