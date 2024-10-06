"use client";
import {
  Section,
  StepperComponent,
  TemplateShowCard,
} from "@/components/SubComponents";
import { stepperData } from "@/constants/CoverLetter";
import { useGlobalContext } from "@/context/GlobalProvider";
import useGetTemplateData from "@/utils/useGetTemplateData";
import { ReactNode } from "react";

const CoverLetterCreateLayout = ({ children }: { children: ReactNode }) => {
  const { data } = useGlobalContext();
  const { isLoading, templateData } = useGetTemplateData();

  console.log({ data, templateData });

  return (
    <Section
      className="mt-[4.25rem] size-full "
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="steps"
    >
      <div className="flex-start gap-4 lg:gap-8 ">
        <div className="w-48 p-4">
          <StepperComponent stepperData={stepperData} />
        </div>
        <div className="flex-1">{children}</div>
        <TemplateShowCard
          templateContentData={data}
          isLoading={isLoading}
          template={templateData}
          cardTitle={templateData.name}
          type="cover-letter"
        />
      </div>
    </Section>
  );
};

export default CoverLetterCreateLayout;
