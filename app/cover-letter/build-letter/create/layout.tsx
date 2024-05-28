"use client";
import {
  Button,
  Loader,
  RenderHtmlContent,
  Section,
  StepperComponent,
  TemplateModalComponent,
} from "@/components/SubComponents";
import { stepperData } from "@/constants/CoverLetter";
import { useGlobalContext } from "@/context/GlobalProvider";
import useGetTemplateData from "@/utils/useGetTemplateData";
import { ReactNode, useState } from "react";
import { MdOutlineZoomIn } from "react-icons/md";

const CoverLetterCreateLayout = ({ children }: { children: ReactNode }) => {
  const { coverLetterData } = useGlobalContext();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { templateData, isLoading } = useGetTemplateData();

  const handleModalOpen = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
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
                <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-gray-500 bg-opacity-75">
                  <div className="absolute inset-0 flex flex-col items-center justify-start  overflow-auto">
                    <div className="flex-start mt-24 max-w-[1000px] flex-col flex-wrap gap-4 rounded-2xl bg-white px-8 pb-8 ">
                      <div className="flex w-full items-start justify-between px-4 pt-10">
                        <div className=" flex-start max-w-[700px] flex-col gap-6">
                          <p className="h4">Preview</p>
                        </div>
                        <Button onClick={handleModalClose}>X</Button>
                      </div>
                      <TemplateModalComponent
                        sampleData={coverLetterData}
                        template={templateData}
                      />
                    </div>
                  </div>
                </div>
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
