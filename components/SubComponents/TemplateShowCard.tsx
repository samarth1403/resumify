"use client";
import {
  Button,
  Loader,
  RenderHtmlContent,
  TemplateModalComponent,
} from "@/components/SubComponents";
import { dataType, templateType } from "@/constants";
import { useRef, useState } from "react";

import { useGlobalContext } from "@/context/GlobalProvider";
import html2canvas from "html2canvas";
import { jsPDF as JsPDF } from "jspdf";
import { useRouter } from "next/navigation";
import { MdOutlineDownload, MdOutlineZoomIn } from "react-icons/md";

const TemplateShowCard = ({
  templateContentData,
  isLoading,
  template,
  selfDocument = false,
  cardTitle,
  isExample = false,
  type,
}: {
  templateContentData: dataType;
  isLoading?: boolean;
  template: templateType;
  selfDocument?: boolean;
  isExample?: boolean;
  cardTitle: string;
  type?: string;
}) => {
  const router = useRouter();
  const { setSelectedTemplateId } = useGlobalContext();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const componentRef = useRef<HTMLDivElement>(null);

  const handleModalOpen = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  };

  const handleTemplateChoose = () => {
    setSelectedTemplateId(template._id);
    localStorage.setItem("selectedTemplateId", template._id);
    if (isExample || selfDocument) {
      localStorage.setItem("data", JSON.stringify(templateContentData));
    }
    router.push(
      type === "resume"
        ? `/resume/build-resume/create/header`
        : `/cover-letter/build-letter/create/header`
    );
  };

  const downloadPdf = () => {
    const input = componentRef.current!;

    html2canvas(input, { scale: 2 })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new JsPDF("p", "pt", "a4");

        const margin = 20;
        const pdfWidth = pdf.internal.pageSize.getWidth() - margin * 2;
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", margin, margin, pdfWidth, pdfHeight);
        pdf.save("download.pdf");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-80 max-[320px]:w-64">
      {!isLoading ? (
        <div
          className={` ${isModalOpen ? "overflow-hidden" : ""} flex-center group relative w-full cursor-pointer flex-col gap-6  `}
        >
          <div className="relative w-full">
            <RenderHtmlContent
              className={` rounded-xl shadow-2xl shadow-gray-400 duration-500 max-[320px]:scale-90 min-[375px]:scale-100 `}
              dynamicFields={template?.dynamicFields}
              sampleData={templateContentData}
              html={template?.htmlOption}
              ref={componentRef}
              type={type}
            />
            {selfDocument && (
              <div
                onClick={downloadPdf}
                className="flex-center absolute bottom-[20px] left-[14px] z-10 size-10 cursor-pointer rounded-full bg-gray-600 px-2 duration-500 hover:scale-125 hover:bg-gray-800"
              >
                <MdOutlineDownload className="size-8 rounded-full text-white " />
              </div>
            )}
            <div
              onClick={handleModalOpen}
              className="lg:flex-center absolute bottom-[20px] right-[14px] z-10 hidden size-10 cursor-pointer rounded-full bg-gray-600 px-2 duration-500 hover:scale-125 hover:bg-gray-800 lg:flex"
            >
              <MdOutlineZoomIn className="size-8 rounded-full text-white " />
            </div>
            {isExample || selfDocument ? (
              <button
                onClick={handleTemplateChoose}
                // eslint-disable-next-line max-len, tailwindcss/enforces-negative-arbitrary-values
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-xl  bg-shades-8 px-4 py-2 text-sm text-white opacity-0  transition-transform  duration-500 ease-in-out hover:bg-shades-10 group-hover:-translate-y-[200px] group-hover:opacity-100"
              >
                Edit this Template
              </button>
            ) : null}
          </div>
          <div className={`flex-center mt-4 w-full flex-nowrap px-1`}>
            <p className="h6">{cardTitle}</p>
          </div>

          {isModalOpen && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-gray-500/75">
              <div className="absolute inset-0 flex flex-col items-center justify-start  overflow-auto">
                <div className="flex-start mt-24 max-w-[1000px] flex-col flex-wrap gap-4 rounded-2xl bg-white px-8 pb-8 ">
                  <div className="flex w-full items-start justify-between px-4 pt-10">
                    <div className=" flex-start max-w-[700px] flex-col gap-6">
                      <p className="h4">Preview</p>
                    </div>
                    <Button onClick={handleModalClose}>X</Button>
                  </div>
                  <TemplateModalComponent
                    sampleData={templateContentData}
                    template={template}
                    type={type}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex-center size-full py-4 ">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default TemplateShowCard;
