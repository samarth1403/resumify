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
      className={` mx-auto mb-6 max-w-[50rem] text-center lg:mb-12 ${className}`}
    >
      {/* {tag && <Tagline className={" md:justify-center mb-4  "}>{tag}</Tagline>} */}
      {title && <h2 className="h5 md:h2 xl:text-[2rem]">{title}</h2>}
      {text && <p className="body-3 mt-1 text-shades-7">{text}</p>}
    </div>
  );
};

export default Heading;
