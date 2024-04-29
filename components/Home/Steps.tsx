import React from "react";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import { stepsData } from "@/constants";
import Button from "@/components/Button";
import Image from "next/image";

const Steps = () => {
  return (
    <Section
      className="w-full"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="steps"
    >
      <div className="flex-center mt-4 w-full flex-col lg:mt-8 xl:mt-12">
        <Heading title="Make A Resume In 4 Simple Steps" />
        <div className="flex w-full flex-wrap items-start justify-around gap-8 lg:gap-8 ">
          {stepsData?.map((step, index) => (
            <div key={step?.id} className="flex-center w-48 flex-col gap-4 ">
              <div className="flex-center h-32 w-16">
                <Image
                  src={step?.logo}
                  alt={step.title}
                  width={100}
                  height={100}
                  className="size-full object-contain"
                />
              </div>
              <p className="h6 text-center">
                {index + 1}. {step.title}
              </p>
              <p className="body-3">{step.text}</p>
            </div>
          ))}
        </div>
        <Button
          href="/"
          className="mt-6 rounded-xl bg-shades-10 px-6 py-3 text-[1rem] text-shades-1 transition-all hover:bg-shades-4 hover:text-shades-10 lg:mt-12 "
        >
          Create your Resume
        </Button>
      </div>
    </Section>
  );
};

export default Steps;
