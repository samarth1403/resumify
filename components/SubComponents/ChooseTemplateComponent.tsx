"use client";
import React, { useState } from "react";
import Section from "@/components/SubComponents/Section";
import Heading from "@/components/SubComponents/Heading";
import Image from "next/image";

interface propTypes {
  title: string;
  templateData: {
    id: string;
    title: string;
    templates: {
      id: string;
      title: string;
      image: string;
    }[];
  }[];
}

const ChooseTemplateComponent = ({ title, templateData }: propTypes) => {
  const [activeType, setActiveType] = useState("professional");
  return (
    <Section
      className="mt-4 w-full"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="steps"
    >
      <div className="flex-center mt-4 w-full flex-col lg:mt-8 xl:mt-16">
        <Heading title={title} />
        <div className="flex-center  w-full flex-col">
          <div className="flex-center flex-wrap gap-4 lg:gap-8 xl:gap-16">
            {templateData?.map((type, index) => (
              <div
                key={index}
                className="relative cursor-pointer pb-3"
                onClick={() => setActiveType(type.id)}
              >
                <p className={`${activeType === type.id ? "h6" : "body-2"}`}>
                  {type.title}
                </p>
                {activeType === type.id && (
                  <hr className="absolute bottom-0 left-0 h-1 w-full bg-blue-600" />
                )}
              </div>
            ))}
          </div>
          <hr className="h-0.5 w-full bg-shades-4" />
        </div>
        <div className="mt-8 flex w-full flex-wrap items-start justify-start gap-6 lg:mt-12">
          {templateData
            ?.find((item) => item.id === activeType)
            ?.templates?.map((template, index) => (
              <div
                key={template.id}
                className="flex-center flex w-72 flex-col gap-4 rounded-xl bg-white p-4 shadow-2xl shadow-shades-2 lg:w-[21rem] lg:gap-6   "
              >
                <Image
                  src={template.image}
                  alt=""
                  height={100}
                  width={100}
                  className="size-full rounded-xl object-contain"
                />
                <p className="body-1">{template.title}</p>
              </div>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default ChooseTemplateComponent;
