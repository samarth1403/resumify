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
import { dataType } from "@/constants";
import useGetAllTemplates from "@/utils/useGetAllTemplates";
import axios, { isAxiosError } from "axios";
import { usePathname, useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { LuPrinter } from "react-icons/lu";
import { useReactToPrint } from "react-to-print";

const Preview = () => {
  const { data, selectedTemplateId, user } = useGlobalContext();
  const { templateData, isLoading } = useGetTemplateData();
  const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
  const [showOtherTemplates, setShowOtherTemplates] = useState<boolean>(false);
  const resumeDivRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
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
              forOtherTemplatesChoose={true}
              //   forOtherTemplatesChooseData={{
              //     ...data,
              //     color: templateData?.sampleData?.color,
              //   }}
              forOtherTemplatesChooseData={template?.sampleData as dataType}
              type="resume"
            />
          );
        });
    } else {
      return null;
    }
  };

  const handlePrint = useReactToPrint({
    content: () => resumeDivRef?.current,
    bodyClass: "bg-white",
    documentTitle: `${data?.name}'s Resume`,
    copyStyles: true,
  });

  // Handle change event
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowOtherTemplates(event.target.checked);
  };

  const createUserDocument = async () => {
    try {
      if (user?.userId) {
        const res = await axios.post("/api/document/create", {
          type: "resume",
          userData: data,
          user: user?.userId,
          template: selectedTemplateId,
        });
        if (res.status === 201) {
          if (res?.data?.message) {
            toast.success(res.data.message);
          }
        }
      }
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data?.error || "An error occurred");
      } else {
        toast.error("An error occurred");
      }
    }
  };

  const handlePdfPrint = async () => {
    setIsFormSubmitting(true);
    try {
      await createUserDocument();
      handlePrint();
      router.push("/resume/build-resume/write-resume-review");
    } catch (error) {
    } finally {
      setIsFormSubmitting(false);
    }
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
        <FormHeading title={`[ Preview of Resume ]`} />
      </div>
      <div className="flex-start mt-6 flex-1 flex-wrap gap-6">
        {!isLoading ? (
          <div className="h-auto rounded-xl shadow-2xl shadow-gray-400">
            <div className="absolute left-[-9999px] flex lg:static lg:left-0">
              <TemplateModalComponent
                template={templateData}
                sampleData={{ ...data, color: templateData?.sampleData?.color }}
                type="resume"
                isPreview={true}
                ref={resumeDivRef}
              />
            </div>
            <div className="flex lg:hidden">
              <TemplateModalComponent
                template={templateData}
                sampleData={{ ...data, color: templateData?.sampleData?.color }}
                type="resume"
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
        <div className="flex-start w-auto flex-col gap-4 ">
          <div className="flex-start  gap-2">
            {/* <Button
              onClick={handlePrint}
              className=""
              iconBefore={<FaPrint className="mr-1" />}
            >
              Print
            </Button> */}
            <Button
              onClick={() => router.push("/resume/build-resume/create/header")}
              className=""
              iconBefore={<FaEdit className="mr-1" />}
            >
              Edit
            </Button>
            <Button
              onClick={handlePdfPrint}
              className=""
              iconBefore={<LuPrinter className="mr-1" />}
              isFormSubmitting={isFormSubmitting}
            >
              Print
            </Button>
            {/* <Button
              // onClick={handleContinue}/
              className="w-full"
              iconBefore={<MdMailOutline className="mr-1" size={20} />}
            >
              Email
            </Button> */}
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
