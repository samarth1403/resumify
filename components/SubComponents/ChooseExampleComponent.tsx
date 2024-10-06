"use client";
import { Heading, Section, TemplateShowCard } from "@/components/SubComponents";
import { masterDocumentTypes } from "@/constants";
import useGetAllExamples from "@/utils/useGetAllExamples";
import { useState } from "react";

interface propTypes {
  title: string;
  text?: string;
  type: string;
}

const ChooseExampleComponent = ({ title, text, type }: propTypes) => {
  const [activeType, setActiveType] = useState(type);
  const { examples, isLoading } = useGetAllExamples({
    type: activeType,
  });

  const exampleList = () => {
    if (examples.length > 0) {
      return examples.map((example, index) => {
        return (
          <TemplateShowCard
            key={index}
            template={example.templateId}
            templateContentData={example.userData}
            cardTitle={example.title}
            isExample
          />
        );
      });
    } else {
      return null;
    }
  };

  return (
    <Section
      className="mt-10 w-full"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="steps"
    >
      <div className="flex-center mt-4 w-full flex-col lg:mt-8 xl:mt-8">
        <Heading title={title} text={text} className="mb-8 text-center" />
        <div className="flex-center  w-full flex-col">
          <div className="flex-center flex-wrap gap-6 lg:gap-8">
            {masterDocumentTypes?.map((type, index) => (
              <div
                key={index}
                className={`flex-center relative cursor-pointer rounded-xl ${activeType === type.id ? "bg-shades-1" : "bg-shades-1/40"} hover:bg-shades-1 hover:shadow-shades-4 px-8 py-3 shadow-xl transition-all duration-300 ease-in-out `}
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
          <hr className="bg-shades-4 h-0.5 w-full" />
          <div className="mt-8 flex w-full flex-row flex-wrap items-start justify-center gap-10 ">
            {isLoading ? <div className="medium-loader" /> : exampleList()}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ChooseExampleComponent;
