import React from "react";

interface propTypes {
  dynamicFields: string[];
  sampleData: {
    [key: string]: string | number | Date;
  };
  jsx: string;
  className: string;
}

const RenderHtmlContent = ({
  dynamicFields,
  sampleData,
  jsx,
  className,
}: propTypes) => {
  let renderedTemplate = jsx;
  dynamicFields.forEach((field: string) => {
    const regex = new RegExp(`{${field}}`, "g");
    let fieldValue = sampleData[field as keyof typeof sampleData];
    if (fieldValue instanceof Date) {
      fieldValue = fieldValue.toISOString(); // Convert Date to string
    }
    renderedTemplate = renderedTemplate.replace(regex, fieldValue as string);
  });
  return (
    <div
      dangerouslySetInnerHTML={{ __html: renderedTemplate }}
      className={className}
    />
  );
};

export default RenderHtmlContent;
