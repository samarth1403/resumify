import React, { ReactNode } from "react";
import Section from "@/components/SubComponents/Section";
import Heading from "@/components/SubComponents/Heading";
import Image from "next/image";

interface stepDataTypes {
  id: string;
  title: string;
  text: string;
  logo: string;
}

interface propTypes {
  title: string;
  stepsData: stepDataTypes[];
  showText?: boolean;
  createBtn: ReactNode;
}

const StepsComponent = ({
  title,
  stepsData,
  showText,
  createBtn,
}: propTypes) => {
  return (
    <Section
      className="w-full"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="steps"
    >
      <div className="flex-center mt-6 w-full flex-col py-6 lg:mt-8 lg:py-0 xl:mt-12">
        <Heading title={title} />
        <div className="flex w-full flex-wrap items-start justify-around gap-8 lg:gap-8 ">
          {stepsData?.map((step, index) => (
            <div key={step?.id} className="flex-center w-60 flex-col gap-4 ">
              <Image
                src={step?.logo}
                alt={step.title}
                width={100}
                height={100}
                className="object-contain"
                loading="lazy"
              />
              <p className="h6 text-center">
                {index + 1}. {step.title}
              </p>
              {showText && <p className="body-3">{step.text}</p>}
            </div>
          ))}
        </div>
        <div className="mt-6 lg:mt-12">{createBtn && createBtn}</div>
      </div>
    </Section>
  );
};

export default StepsComponent;
