"use client";
import {
  Button,
  RenderHtmlContent,
  Section,
  TemplateModalComponent,
} from "@/components/SubComponents";
import { dataType, templateType } from "@/constants";
import { useGlobalContext } from "@/context/GlobalProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdOutlineZoomIn } from "react-icons/md";

const TemplateCard = ({
  template,
  forOtherTemplatesChoose = false,
  type,
  forOtherTemplatesChooseData,
}: {
  template: templateType;
  forOtherTemplatesChoose?: boolean;
  type?: string;
  forOtherTemplatesChooseData?: dataType;
}) => {
  const router = useRouter();
  const { setSelectedTemplateId } = useGlobalContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleTemplateChoose = () => {
    if (!forOtherTemplatesChoose) {
      router.push(
        type === "cover-letter"
          ? `/cover-letter/build-letter/create/header`
          : "/resume/build-resume/create/header"
      );
    }
    setSelectedTemplateId(template._id);
    localStorage.setItem("selectedTemplateId", template._id);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <div
        className={` ${isModalOpen ? "overflow-hidden" : ""} flex-center group relative w-64 cursor-pointer flex-col gap-10 lg:w-80  `}
      >
        <div className="relative">
          <RenderHtmlContent
            className={` rounded-xl shadow-2xl shadow-gray-400 duration-500 ${!forOtherTemplatesChoose ? "hover:-translate-y-4" : ""} max-[320px]:scale-90 min-[375px]:scale-100 `}
            dynamicFields={template.dynamicFields}
            sampleData={
              forOtherTemplatesChoose
                ? (forOtherTemplatesChooseData as dataType)
                : (template.sampleData as dataType)
            }
            html={template.htmlOption}
            type={type}
          />
          <div
            onClick={handleModalOpen}
            className="lg:flex-center absolute bottom-[20px] right-[14px] z-10 hidden size-10 cursor-pointer rounded-full bg-gray-600 px-2 duration-500 hover:scale-125 hover:bg-gray-800 lg:flex"
          >
            <MdOutlineZoomIn className="size-8 rounded-full text-white " />
          </div>
          <button
            onClick={handleTemplateChoose}
            // eslint-disable-next-line max-len, tailwindcss/enforces-negative-arbitrary-values
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-xl bg-shades-8 px-4 py-2 text-xs text-white opacity-0  transition-transform  duration-500 ease-in-out hover:bg-shades-10 group-hover:-translate-y-[200px] group-hover:opacity-100"
          >
            Use this Template
          </button>
        </div>
        <p className="h6">{template.name}</p>

        {isModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-gray-500/75">
            <div className="absolute inset-0 flex flex-col items-center justify-start  overflow-auto">
              <div className="flex-start mt-24 max-w-[1000px] flex-col flex-wrap gap-4 rounded-2xl bg-white px-8 pb-8 ">
                <div className="flex w-full items-start justify-between px-4 pt-10">
                  <div className=" flex-start max-w-[700px] flex-col gap-6">
                    <p className="h4">{template.name}</p>
                    <p className="body-2 leading-8 ">{template.description}</p>
                    <Button onClick={handleTemplateChoose}>
                      Use this Template
                    </Button>
                  </div>
                  <Button onClick={handleModalClose}>X</Button>
                </div>
                <Section
                  className="w-full"
                  crosses
                  crossesOffset="lg:translate-y-[5.25rem]"
                  customPaddings
                  id="steps"
                >
                  <div className="rounded-xl shadow-2xl shadow-gray-400">
                    <TemplateModalComponent
                      sampleData={template.sampleData as dataType}
                      template={template}
                      type={type}
                    />
                  </div>
                </Section>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TemplateCard;
