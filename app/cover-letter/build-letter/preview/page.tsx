"use client";
import {
  Button,
  FormHeading,
  Loader,
  Section,
  TemplateCard,
  TemplateModalComponent,
} from "@/components/SubComponents";
import { useGlobalContext } from "@/context/GlobalProvider";
import useGetTemplateData from "@/utils/useGetTemplateData";
import { FaEdit } from "react-icons/fa";
// import { MdMailOutline } from "react-icons/md";
import { downloadPdf } from "@/utils/helpers/DownloadPdf";
import useGetAllTemplates from "@/utils/useGetAllTemplates";
import { usePathname, useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { LuDownload } from "react-icons/lu";

const Preview = () => {
  const { data, selectedTemplateId } = useGlobalContext();
  const { templateData, isLoading } = useGetTemplateData();
  const [showOtherTemplates, setShowOtherTemplates] = useState<boolean>(false);
  const coverLetterDivRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const { isLoading: allTemplatesLoading, templates: otherTemplates } =
    useGetAllTemplates({ type: pathname?.split("/")?.[1] });

  const templateList = () => {
    if (otherTemplates?.length > 0) {
      return otherTemplates
        ?.filter((template) => template?._id !== selectedTemplateId)
        ?.map((template, index) => {
          return (
            <TemplateCard
              key={index}
              template={template}
              forOtherTemplatesChoose
            />
          );
        });
    } else {
      return null;
    }
  };

  // const handlePrint = useReactToPrint({
  //   content: () => coverLetterDivRef.current,
  //   bodyClass: 'bg-white',
  // });

  // Handle change event
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowOtherTemplates(event.target.checked);
  };

  const handleDownloadPdf = async () => {
    await downloadPdf({
      componentRef: coverLetterDivRef,
      fileName: `${data?.name}-cover-letter`,
    });
  };

  return (
    <Section
      className="mt-20 w-full"
      crosses
      crossesOffset="lg:translate-y-[5.25rem] px-2"
      customPaddings
      id="steps"
      childrenClassName="lg:pl-2 lg:pr-1"
    >
      <div className="flex-between w-full">
        <FormHeading title={`[ Preview of Cover Letter ]`} />
      </div>
      <div className="flex-start mt-6 flex-1 flex-wrap gap-6">
        {!isLoading ? (
          <div
            className="h-auto rounded-xl shadow-2xl shadow-gray-400"
            ref={coverLetterDivRef}
          >
            <div className="absolute left-[-9999px] flex lg:static lg:left-0">
              <TemplateModalComponent
                template={templateData}
                sampleData={{ ...data, color: templateData?.sampleData?.color }}
                type="cover-letter"
                isPreview={true}
              />
            </div>
            <div className="flex lg:hidden" ref={coverLetterDivRef}>
              <TemplateModalComponent
                template={templateData}
                sampleData={{ ...data, color: templateData?.sampleData?.color }}
                type="cover-letter"
                renderHtmlOption={true}
                isPreview={true}
              />
            </div>
          </div>
        ) : (
          <div className="flex-center size-full ">
            <Loader />
          </div>
        )}
        <div className="flex-start w-full flex-col gap-4 lg:w-auto ">
          <div className="flex-center lg:flex-start  gap-2">
            <Button
              onClick={() =>
                router.push("/cover-letter/build-letter/create/header")
              }
              className=""
              iconBefore={<FaEdit className="mr-1" />}
            >
              Edit
            </Button>
            {/* <Button
              onClick={handlePrint}
              className=""
              iconBefore={<FaPrint className="mr-1" />}
            >
              Print
            </Button> */}
            <Button
              onClick={handleDownloadPdf}
              className=""
              iconBefore={<LuDownload className="mr-1" />}
            >
              Download
            </Button>
          </div>
          <div className="flex w-full items-center gap-4 p-4 font-bold text-black">
            <input
              type="checkbox"
              id="checkbox"
              className="size-5 cursor-pointer rounded border-2 border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#ffb624]"
              checked={showOtherTemplates}
              onChange={handleCheckboxChange}
            />
            <label
              htmlFor="checkbox"
              className="cursor-pointer text-[1rem] text-purple-900  "
            >
              Choose Other Template
            </label>
          </div>
          {!showOtherTemplates ? null : showOtherTemplates &&
            !allTemplatesLoading ? (
            <div className="flex-start h-[850px] max-w-full flex-col gap-8 overflow-y-scroll pr-2 ">
              {templateList()}
            </div>
          ) : (
            <div className="flex-center size-full">
              <Loader />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Preview;
