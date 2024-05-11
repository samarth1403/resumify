"use client";
import { templateType } from "@/constants";
import { resumeTemplateData } from "@/constants/Resume";
import axios from "axios";
import { useEffect, useState } from "react";
import { Heading, Section, TemplateCard } from "@/components/SubComponents";

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
  const [templates, setTemplates] = useState<templateType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const getCurrentUser = async () => {
      try {
        const { data, status } = await axios.get("/api/template/all-templates");
        if (status === 200) {
          console.log("data", data);
          setTemplates(data.data);
        }
      } catch (error: unknown) {
        setTemplates([]);
      } finally {
        setIsLoading(false);
      }
    };
    getCurrentUser();
  }, []);

  const templateList = () => {
    if (templates.length > 0) {
      return templates.map((template, index) => {
        let renderedTemplate = template.jsxOption;
        template.dynamicFields.forEach((field: string) => {
          const regex = new RegExp(`{${field}}`, "g");
          let fieldValue =
            template.sampleData[field as keyof typeof template.sampleData];
          if (fieldValue instanceof Date) {
            fieldValue = fieldValue.toISOString(); // Convert Date to string
          }
          renderedTemplate = renderedTemplate.replace(
            regex,
            fieldValue as string
          );
        });
        return <TemplateCard key={index} template={template} />;
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
      <div className="flex-center mt-4 w-full flex-col lg:mt-8 xl:mt-16">
        <Heading title={title} />
        <div className="flex-center  w-full flex-col">
          <div className="flex-center flex-wrap gap-4 lg:gap-8 xl:gap-12">
            {resumeTemplateData?.map((type, index) => (
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
          <div className="mt-8 flex w-full flex-row flex-wrap items-start justify-center gap-10">
            {templateList()}
            {templateList()}
            {/* <Section
              className="mt-4"
              crosses
              crossesOffset="lg:translate-y-[5.25rem]"
              customPaddings
              id="steps"
            >
              <Template1 />
            </Section>
            <Section
              className="mt-4"
              crosses
              crossesOffset="lg:translate-y-[5.25rem]"
              customPaddings
              id="steps"
            >
              <Template1 />
            </Section>
            <Section
              className="mt-4"
              crosses
              crossesOffset="lg:translate-y-[5.25rem]"
              customPaddings
              id="steps"
            >
              <Template1 />
            </Section> */}
            {/* <Template1 />
            <Template1 />
            <Template1 /> */}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ChooseTemplateComponent;
