"use client";
import {
  Button,
  RenderHtmlContent,
  Section,
  TemplateModalComponent,
} from "@/components/SubComponents";
import { templateType } from "@/constants";
import { useGlobalContext } from "@/context/GlobalProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdOutlineZoomIn } from "react-icons/md";

const TemplateCard = ({
  template,
  forOtherTemplatesChoose = false,
}: {
  template: templateType;
  forOtherTemplatesChoose?: boolean;
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
      router.push(`/cover-letter/build-letter/create/header`);
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
        className={` ${isModalOpen ? "overflow-hidden" : ""} flex-center group relative  max-w-80 cursor-pointer flex-col gap-10  `}
      >
        <div className="relative">
          <RenderHtmlContent
            className={` rounded-xl shadow-2xl shadow-gray-400 duration-500 ${!forOtherTemplatesChoose ? "hover:-translate-y-4" : ""} `}
            dynamicFields={template.dynamicFields}
            sampleData={template.sampleData}
            html={template.htmlOption}
          />
          <div
            onClick={handleModalOpen}
            className="flex-center absolute bottom-[20px] right-[14px] z-10 size-10 cursor-pointer rounded-full bg-gray-600 px-2 duration-500 hover:scale-125 hover:bg-gray-800"
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
          {/* <Button>Use this Template</Button> */}
        </div>

        <p className="h6">{template.name}</p>

        {isModalOpen && (
          // <TemplateModalComponent
          //   template={template}
          //   setIsModalOpen={setIsModalOpen}
          //   sampleData={template.sampleData}
          // />
          <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-gray-500 bg-opacity-75">
            <div className="absolute inset-0 flex flex-col items-center justify-start  overflow-auto">
              <div className="flex-start mt-24 max-w-[1000px] flex-col flex-wrap gap-4 rounded-2xl bg-white px-8 pb-8 ">
                <div className="flex w-full items-start justify-between px-4 pt-10">
                  <div className=" flex-start max-w-[700px] flex-col gap-6">
                    <p className="h4">{template.name}</p>
                    <p className="body-2 leading-8 ">{template.description}</p>
                    <Button>Use this Template</Button>
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
                      sampleData={template.sampleData}
                      template={template}
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
