"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface propTypes {
  stepperData: {
    id: string;
    title: string;
    uri: string;
  }[];
  className?: string;
}

{
  /* <span className="absolute -start-4 flex size-8 items-center justify-center rounded-full bg-green-200 ring-4 ring-white dark:bg-green-900 dark:ring-gray-900">
            <svg
              className="size-3.5 text-green-500 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          </span> */
}

const StepperComponent = ({ stepperData, className }: propTypes) => {
  const pathName = usePathname();
  const router = useRouter();
  return (
    <ol className={` flex-start flex-col ${className} `}>
      {stepperData.map((step, index) => {
        return (
          <li className="flex-start gap-3 " key={index}>
            <span className="flex-center flex-col">
              <span
                onClick={() => router.push(step.uri)}
                className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-yellow-400 duration-200 hover:scale-125 dark:bg-green-900 dark:ring-gray-900"
              >
                <span className="">{Number(step.id) + 1}</span>
              </span>
              {index !== stepperData.length - 1 && (
                <div className="h-8 w-[0.5px] bg-shades-6" />
              )}
            </span>
            <span
              onClick={() => router.push(step.uri)}
              className={`body-2 mt-1 cursor-pointer  leading-6 hover:text-blue-500 ${step.uri === pathName ? " text-blue-700 " : ""} `}
            >
              {step.title}
            </span>
          </li>
        );
      })}
    </ol>
  );
};

export default StepperComponent;
