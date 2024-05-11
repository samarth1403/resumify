"use client";
import React, { useState } from "react";
import { MdOutlineZoomIn } from "react-icons/md";
import { Button, RenderHtmlContent } from "@/components/SubComponents";
import { templateType } from "@/constants";

const TemplateCard = ({ template }: { template: templateType }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  };
  return (
    <>
      <div
        className={` ${isModalOpen ? "overflow-hidden" : ""} flex-center relative  max-w-80 cursor-pointer flex-col gap-10  `}
      >
        <RenderHtmlContent
          className="rounded-xl shadow-2xl shadow-gray-400  duration-500 hover:-translate-y-4 "
          dynamicFields={template.dynamicFields}
          sampleData={template.sampleData}
          jsx={template.jsxOption}
        />
        <p className="h6">{template.name}</p>
        <div
          onClick={handleModalOpen}
          className="flex-center absolute bottom-[88px] right-[12px] z-10 size-10 cursor-pointer rounded-full bg-gray-600 px-2 duration-500 hover:scale-125 hover:bg-gray-800"
        >
          <MdOutlineZoomIn className="size-8 rounded-full text-white " />
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-gray-500 bg-opacity-75">
            <div className="absolute inset-0 flex flex-col items-center justify-start  overflow-auto">
              <div className="flex-start mt-24 max-w-[1000px] flex-col flex-wrap gap-4 rounded-2xl bg-white ">
                <div className="flex w-full items-start justify-between px-10 pt-10">
                  <div className=" flex-start max-w-[600px] flex-col gap-6">
                    <p className="h4">{template.name}</p>
                    <p className="body-2">{template.description}</p>
                    <Button>Use this Template</Button>
                  </div>
                  <Button onClick={handleModalClose}>X</Button>
                </div>
                <RenderHtmlContent
                  className="scale-90 rounded-xl shadow-2xl shadow-gray-400"
                  dynamicFields={template.dynamicFields}
                  sampleData={template.sampleData}
                  jsx={template.jsx}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TemplateCard;
