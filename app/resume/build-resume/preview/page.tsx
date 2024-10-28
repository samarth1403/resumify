'use client';
import {
  Button,
  FormHeading,
  Loader,
  Section,
  TemplateCard,
  TemplateModalComponent,
} from '@/components/SubComponents';
import { useGlobalContext } from '@/context/GlobalProvider';
import useGetTemplateData from '@/utils/useGetTemplateData';
import { FaEdit } from 'react-icons/fa';
// import { MdMailOutline } from "react-icons/md";
import { dataType } from '@/constants';
import useGetAllTemplates from '@/utils/useGetAllTemplates';
import * as htmlToImage from 'html-to-image';
import { jsPDF as JsPDF } from 'jspdf';
import { usePathname, useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react';
import { LuDownload } from 'react-icons/lu';

const Preview = () => {
  const { data, selectedTemplateId } = useGlobalContext();
  const { templateData, isLoading } = useGetTemplateData();
  const [showOtherTemplates, setShowOtherTemplates] = useState<boolean>(false);
  const resumeDivRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const { isLoading: allTemplatesLoading, templates: otherTemplates } =
    useGetAllTemplates({ type: pathname?.split('/')?.[1] });

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

  // const handlePrint = useReactToPrint({
  //   content: () => resumeDivRef.current,
  //   bodyClass: 'bg-white',
  // });

  // Handle change event
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowOtherTemplates(event.target.checked);
  };

  const downloadPdf = async () => {
    if (!resumeDivRef.current) return;

    try {
      const blob = await htmlToImage.toBlob(resumeDivRef.current, {
        pixelRatio: 1.5,
      });
      if (!blob) return;
      const imgUrl = URL.createObjectURL(blob);
      const img = new Image();
      img.src = imgUrl;
      img.onload = () => {
        // Create a new jsPDF instance
        const pdf = new JsPDF({
          unit: 'px',
          format: 'a4',
          putOnlyUsedFonts: true,
        });

        // Calculate width and height
        const margin = 0;
        const pdfWidth = pdf.internal.pageSize.getWidth() - margin * 2;
        const pdfHeight = (img.height * pdfWidth) / img.width;

        // Add the image to the PDF and save it
        pdf.addImage(img, 'PNG', margin, margin, pdfWidth, pdfHeight);
        pdf.save(`${data?.name}-resume.pdf`);

        // Clean up the object URL
        URL.revokeObjectURL(imgUrl);
      };
    } catch (error) {
      console.error('Failed to generate PDF:', error);
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
            <div
              ref={resumeDivRef}
              className="absolute left-[-9999px] flex lg:static lg:left-0"
            >
              <TemplateModalComponent
                template={templateData}
                sampleData={{ ...data, color: templateData?.sampleData?.color }}
                type="resume"
                isPreview={true}
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
              onClick={() => router.push('/resume/build-resume/create/header')}
              className=""
              iconBefore={<FaEdit className="mr-1" />}
            >
              Edit
            </Button>
            <Button
              onClick={downloadPdf}
              className=""
              iconBefore={<LuDownload className="mr-1" />}
            >
              Download
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
