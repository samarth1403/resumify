"use client";
import Heading from "@/components/SubComponents/Heading";
import Section from "@/components/SubComponents/Section";
import { templateType } from "@/constants";
import { resumeTemplateData } from "@/constants/Resume";
import axios from "axios";
import { useEffect, useState } from "react";

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

  console.log("templates", templates);

  const templateList = () => {
    if (templates.length > 0) {
      return templates.map((template, index) => {
        let renderedTemplate = template.jsx;
        template.dynamicFields.forEach((field: string) => {
          const regex = new RegExp(`{${field}}`, "g");
          renderedTemplate = renderedTemplate.replace(regex, "Hello");
        });
        return (
          <div
            key={template._id}
            className="flex-center flex w-72 scale-50 flex-col gap-4 rounded-xl bg-white p-4 shadow-2xl shadow-shades-2 lg:w-[21rem] lg:gap-6   "
          >
            <div dangerouslySetInnerHTML={{ __html: renderedTemplate }} />
            <p className="body-1">{template.name}</p>
          </div>
        );
      });
    } else {
      return null;
    }
  };

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
          <div className="mt-8 flex w-full flex-wrap items-start justify-start gap-6 lg:mt-12">
            {templateList()}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ChooseTemplateComponent;
