import React from "react";

const FormHeading = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return <span className={`h6 ${className}`}>{title}</span>;
};

export default FormHeading;
