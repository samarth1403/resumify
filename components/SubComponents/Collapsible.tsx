"use client";
import React, { ReactNode, useState } from "react";

const Collapsible = ({
  open,
  title,
  children,
  questionStyle,
  answerStyle,
}: {
  open?: boolean;
  title: string;
  children: ReactNode;
  questionStyle?: string;
  answerStyle?: string;
}) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div>
        <div className={questionStyle}>
          <p className="text-sm lg:text-[1rem]">{title}</p>
          <button onClick={handleFilterOpening}>
            {!isOpen ? (
              <p className=" text-sm lg:text-[1.6rem]">+</p>
            ) : (
              <p className=" text-sm  lg:text-[1.6rem]">-</p>
            )}
          </button>
        </div>

        {isOpen && <div className={answerStyle}>{children}</div>}
      </div>
    </>
  );
};

export default Collapsible;
