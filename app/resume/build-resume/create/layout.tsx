"use client";
import {
  Section,
  StepperComponent,
  TemplateShowCard,
} from "@/components/SubComponents";
import { stepperData } from "@/constants/Resume";
import { useGlobalContext } from "@/context/GlobalProvider";
import useGetTemplateData from "@/utils/useGetTemplateData";
import { ReactNode } from "react";

const ResumeCreateLayout = ({ children }: { children: ReactNode }) => {
  const { data } = useGlobalContext();
  const { isLoading, templateData } = useGetTemplateData();

  return (
    <Section
      className="mt-[4.25rem] size-full "
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="steps"
    >
      <div className="flex w-full flex-wrap items-start justify-start gap-8 lg:gap-8 ">
        <div className="w-48 py-4">
          <StepperComponent stepperData={stepperData} />
        </div>
        <div className="hidden lg:flex lg:flex-1">{children}</div>
        <div className="flex-center lg:flex-start ">
          <TemplateShowCard
            templateContentData={data}
            isLoading={isLoading}
            template={templateData}
            cardTitle={templateData.name}
            type={"resume"}
          />
        </div>
        <div className="flex flex-1 lg:hidden">{children}</div>
      </div>
    </Section>
  );
};

export default ResumeCreateLayout;
