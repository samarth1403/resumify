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
          {window.innerWidth > 768 ? (
            <h6>{title}</h6>
          ) : (
            <p className="text-sm">{title}</p>
          )}
          <button onClick={handleFilterOpening}>
            {!isOpen ? (
              <p className=" text-[1rem] lg:text-[1.6rem]">+</p>
            ) : (
              <p className=" text-[1rem]  lg:text-[1.6rem]">-</p>
            )}
          </button>
        </div>

        {isOpen && <div className={answerStyle}>{children}</div>}
      </div>
    </>
  );
};

export default Collapsible;
