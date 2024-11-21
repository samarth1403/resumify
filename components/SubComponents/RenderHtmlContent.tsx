import {
  dataType,
  educationType,
  experienceType,
  profileType,
  projectType,
} from "@/constants";
import React, { forwardRef } from "react";

interface RenderHtmlContentProps {
  className?: string;
  dynamicFields: string[];
  sampleData: dataType;
  html: string;
  type?: string;
  isModalOpen?: boolean;
  isPreview?: boolean;
}

const RenderHtmlContent = forwardRef<HTMLDivElement, RenderHtmlContentProps>(
  function RenderHtmlContent(
    {
      dynamicFields,
      sampleData,
      html,
      className,
      type,
      isModalOpen,
      isPreview = false,
    },
    ref
  ) {
    let renderedTemplate = html;
    if (type === "resume" && isModalOpen) {
      dynamicFields.forEach((field) => {
        if (Array.isArray(sampleData[field as keyof typeof sampleData])) {
          let listString = "";
          let jsxString = "";
          (
            sampleData[field as keyof typeof sampleData] as
              | educationType[]
              | experienceType[]
              | string[]
              | profileType[]
              | projectType[]
          ).forEach((item, index: number) => {
            if (field === "experience" || field === "education") {
              listString += `
              <div key={${index}} style="display: flex; flex-direction: column; gap:8px;">
                <p style="font-size: 1rem; font-weight: bold;">${(item as experienceType).jobTitle || (item as educationType).degree || ""}  - ${(item as experienceType).company || (item as educationType).institution || ""}</p>
                <p style="font-size: 0.8rem; color: #3d3d3d;">${(item as experienceType).startDate || ""}  - ${(item as experienceType).endDate || ""} </p>
                <p style="font-size: 0.9rem;">${(item as experienceType).jobDescription || (item as educationType).description || ""}</p>
              </div>
            `;
            } else if (field === "skills") {
              listString += `<li key={${index}} style="font-size: 0.9rem; margin-right: 1.6rem;  ">${item}</li>`;
            } else if (field === "profiles") {
              listString += `<li key={${index}} style="font-size: 0.9rem; margin-right: 1.6rem;"><a href=${(item as profileType)?.link || ""} target="_blank" >${(item as profileType).profile}</a></li>`;
            } else if (field === "projects") {
              listString += `
              <div key={${index}} style="display: flex; flex-direction: column; gap:3px;">
               <div style="display: flex; gap: 10px; justify-content: flex-start; align-items: center; " >
                <p style="font-size: 1rem; font-weight: bold;">${(item as projectType)?.title || ""}</p>
                <p style="font-size: 0.9rem;">${(item as projectType)?.tags || ""}</p>
                 
               </div>
                <p style="font-size: 0.9rem;">${(item as projectType).description}</p>
                <a href=${(item as projectType).link} target="_blank" style="font-size: 0.9rem; color: #4343b3;">${(item as projectType).link || ""}</a>
              </div>
            `;
            }
          });
          jsxString =
            (
              sampleData[field as keyof typeof sampleData] as
                | educationType[]
                | experienceType[]
                | string[]
                | profileType[]
                | projectType[]
            )?.length > 0
              ? `<div style="display: flex; flex-direction: column; gap: 0.8rem;" >
                   <h3 style="font-size: 1.2rem; font-weight:bold; color: ${sampleData.color};">${String(field)?.[0]?.toUpperCase() + String(field)?.slice(1) || ""}</h3>
              <ul style=" ${field === "skills" || field === "profiles" ? "margin-left: 20px; display: flex; list-style-type: disc; flex-direction: row; gap: 0.5rem; flex-wrap: wrap; justify-content: flex-start;" : " display: flex; flex-direction: column; gap: 0.8rem; justify-content: flex-start"}     ">
                  ${listString}
              </ul>
                 </div>`
              : "";
          renderedTemplate = renderedTemplate.replace(
            new RegExp(`{${field}}`, "gs"),
            jsxString
          );
        } else {
          renderedTemplate = renderedTemplate.replace(
            new RegExp(`{${field}}`, "g"),
            sampleData[field as keyof typeof sampleData] as string
          );
        }
      });
    } else if (type === "resume") {
      dynamicFields.forEach((field) => {
        if (Array.isArray(sampleData[field as keyof typeof sampleData])) {
          let listString = "";
          let jsxString = "";
          (
            sampleData[field as keyof typeof sampleData] as
              | educationType[]
              | experienceType[]
              | string[]
              | profileType[]
              | projectType[]
          ).forEach((item, index: number) => {
            if (field === "experience" || field === "education") {
              listString += `
              <div key={${index}} style="display: flex; flex-direction: column; gap:3px;">
                <p style="font-size: 0.35rem; font-weight: bold;">${(item as experienceType).jobTitle || (item as educationType).degree || ""} - ${(item as experienceType).company || (item as educationType).institution || ""}</p>
                <p style="font-size: 0.35rem;  color: #3d3d3d;">${(item as experienceType).startDate || ""} - ${(item as experienceType).endDate || ""}</p>
                <p style="font-size: 0.35rem;">${(item as experienceType)?.jobDescription || (item as educationType).description || ""}</p>
              </div>
            `;
            } else if (field === "skills") {
              listString += `<li key={${index}} style="font-size: 0.35rem; margin-right:0.8rem">${item}</li>`;
            } else if (field === "profiles") {
              listString += `<li key={${index}} style="font-size: 0.35rem; margin-right:0.8rem"><a href=${(item as profileType).link} target="_blank" >${(item as profileType).profile || ""}</a></li>`;
            } else if (field === "projects") {
              listString += `
              <div key={${index}} style="display: flex; flex-direction: column; gap:3px;">
               <div style="display: flex; gap: 0.5rem; justify-content: flex-start; align-items: center; " >
                <p style="font-size: 0.35rem; font-weight: bold;">${(item as projectType)?.title || ""}</p>
                <p style="font-size: 0.3rem;">${(item as projectType).tags || ""}</p>
               </div>
                <p style="font-size: 0.35rem;">${(item as projectType)?.description || ""}</p>
                <a href=${(item as projectType).link} target="_blank" style="font-size: 0.35rem; color: #4343b3;">${(item as projectType)?.link || ""}</a>
              </div>
            `;
            }
          });
          jsxString =
            (
              sampleData[field as keyof typeof sampleData] as
                | educationType[]
                | experienceType[]
                | string[]
                | profileType[]
                | projectType[]
            )?.length > 0
              ? `<div style="display: flex; flex-direction: column; gap: 0.2rem;" >
                   <h3 style="font-size: 0.5rem; font-weight:bold; color: ${sampleData.color};">${String(field)?.[0]?.toUpperCase() + String(field)?.slice(1)}</h3>
              <ul style="  ${field === "skills" || field === "profiles" ? "margin-left: 10px; list-style-type: disc;  display: flex; flex-direction: row; gap: 0.1rem; flex-wrap: wrap; justify-content: flex-start" : "list-style-type: disc; display: flex;flex-direction: column; gap: 0.3rem; justify-content: flex-start"}    ">
                  ${listString}
              </ul>
                 </div>`
              : "";
          renderedTemplate = renderedTemplate.replace(
            new RegExp(`{${field}}`, "gs"),
            jsxString
          );
        } else {
          renderedTemplate = renderedTemplate.replace(
            new RegExp(`{${field}}`, "g"),
            sampleData[field as keyof typeof sampleData] as string
          );
        }
      });
    } else {
      dynamicFields?.forEach((field: string) => {
        const regex = new RegExp(`{${field}}`, "g");
        const fieldValue = sampleData[field as keyof typeof sampleData] || "";
        renderedTemplate = renderedTemplate.replace(
          regex,
          fieldValue as string
        );
      });
    }
    return (
      <div
        dangerouslySetInnerHTML={{ __html: renderedTemplate }}
        // className={className}
        style={{
          margin: "0px",
          padding: "0px",
          position: "relative",
          top: "0px",
          left: "0px",
        }}
        ref={ref}
      />
    );
  }
);

RenderHtmlContent.displayName = "RenderHtmlContent";

export default RenderHtmlContent;
