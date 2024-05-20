"use client";
import {
  Heading,
  Loader,
  Section,
  TemplateCard,
} from "@/components/SubComponents";
import { templateType } from "@/constants";
import { resumeTemplateData } from "@/constants/Resume";
import axios from "axios";
import { useEffect, useState } from "react";

interface propTypes {
  title: string;
  text?: string;
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

const ChooseTemplateComponent = ({ title, templateData, text }: propTypes) => {
  const [activeType, setActiveType] = useState("professional");
  const [templates, setTemplates] = useState<templateType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const getAllTemplates = async () => {
      try {
        const { data, status } = await axios.get(
          "/api/template/all-templates",
          { params: { type: "cover-letter", subtype: activeType } }
        );
        if (status === 200) {
          setTemplates(data.data);
        }
      } catch (error: unknown) {
        setTemplates([]);
      } finally {
        setIsLoading(false);
      }
    };
    getAllTemplates();
  }, [activeType]);

  const templateList = () => {
    if (templates.length > 0) {
      return templates.map((template, index) => {
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
        <Heading title={title} text={text} />
        <div className="flex-center  w-full flex-col">
          <div className="flex-center flex-wrap gap-6 lg:gap-8 xl:gap-16">
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
            {isLoading ? <Loader /> : templateList()}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ChooseTemplateComponent;
