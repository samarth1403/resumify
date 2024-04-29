import React from "react";

const Heading = ({
  title,
  className,
  tag,
  text,
}: {
  title: string;
  className?: string;
  tag?: string;
  text?: string;
}) => {
  return (
    <div
      className={` mx-auto mb-12 max-w-[50rem] text-center lg:mb-16 ${className}`}
    >
      {/* {tag && <Tagline className={" md:justify-center mb-4  "}>{tag}</Tagline>} */}
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-shades-7">{text}</p>}
    </div>
  );
};

export default Heading;
