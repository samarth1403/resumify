import React from "react";
interface propTypes {
  dynamicFields: string[];
  sampleData: {
    [key: string]: string | number | Date;
  };
  html: string;
  className: string;
}

const RenderHtmlContent = ({
  dynamicFields,
  sampleData,
  html,
  className,
}: propTypes) => {
  let renderedTemplate = html;
  dynamicFields.forEach((field: string) => {
    const regex = new RegExp(`{${field}}`, "g");
    const fieldValue = sampleData[field as keyof typeof sampleData];
    renderedTemplate = renderedTemplate.replace(regex, fieldValue as string);
  });

  return (
    <div
      dangerouslySetInnerHTML={{ __html: renderedTemplate }}
      className={className}
    >
      {/* <div>{parse(renderedTemplate)}</div> */}
    </div>
  );
};

export default RenderHtmlContent;
