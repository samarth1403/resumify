"use client";
import {
  Loader,
  RenderHtmlContent,
  Section,
  StepperComponent,
  TemplateModalComponent,
} from "@/components/SubComponents";
import { initialTemplateData, templateType } from "@/constants";
import { stepperData } from "@/constants/CoverLetter";
import { useGlobalContext } from "@/context/GlobalProvider";
import axios from "axios";
import React, { ReactNode, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineZoomIn } from "react-icons/md";

const CoverLetterCreateLayout = ({ children }: { children: ReactNode }) => {
  const { selectedTemplateId, coverLetterData } = useGlobalContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [templateData, setTemplateData] =
    useState<templateType>(initialTemplateData);

  useEffect(() => {
    setIsLoading(true);
    const getAllTemplates = async () => {
      try {
        const { data, status } = await axios.get(`/api/template/get-template`, {
          params: {
            templateId: selectedTemplateId,
          },
        });
        if (status === 200) {
          setTemplateData(data.data);
        }
      } catch (error: unknown) {
        toast.error("Failed to fetch template data");
        setTemplateData(initialTemplateData);
      } finally {
        setIsLoading(false);
      }
    };
    if (selectedTemplateId) {
      getAllTemplates();
    }
  }, [selectedTemplateId]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

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
        <div className="w-80">
          {!isLoading ? (
            // <RenderHtmlContent
            //   className="rounded-xl shadow-2xl shadow-gray-400 duration-500 hover:-translate-y-4 "
            //   dynamicFields={templateData.dynamicFields}
            //   sampleData={coverLetterData}
            //   html={templateData.htmlOption}
            // />
            <div
              className={` ${isModalOpen ? "overflow-hidden" : ""} flex-center group relative w-full cursor-pointer flex-col gap-10  `}
            >
              <div className="relative">
                <RenderHtmlContent
                  className="rounded-xl shadow-2xl shadow-gray-400 duration-500 hover:-translate-y-4 "
                  dynamicFields={templateData.dynamicFields}
                  sampleData={coverLetterData}
                  html={templateData.htmlOption}
                />
                <div
                  onClick={handleModalOpen}
                  className="flex-center absolute bottom-[20px] right-[14px] z-10 size-10 cursor-pointer rounded-full bg-gray-600 px-2 duration-500 hover:scale-125 hover:bg-gray-800"
                >
                  <MdOutlineZoomIn className="size-8 rounded-full text-white " />
                </div>
              </div>

              <p className="h6">{templateData.name}</p>

              {isModalOpen && (
                <TemplateModalComponent
                  sampleData={coverLetterData}
                  template={templateData}
                  setIsModalOpen={setIsModalOpen}
                />
              )}
            </div>
          ) : (
            <div className="flex-center size-full ">
              <Loader />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default CoverLetterCreateLayout;
