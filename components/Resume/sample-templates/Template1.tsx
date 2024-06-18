"use client";
import { educationType, experienceType, templateType } from "@/constants";
import React from "react";

const Template1: React.FC = () => {
  const dataObject: templateType = {
    _id: "1",
    name: "Professional Resume",
    description:
      "A clean and professional resume template with a well-organized layout to highlight your skills and experiences effectively.",
    type: "resume",
    subtype: "professional",
    html: ` <div style="min-height: 1000px; height: 100%; width: 800px; display: flex; flex-direction: column; align-items: start; justify-content: start; background-color: white;">
<div style="height: 160px; background-color: lightgray; border-radius: 20px 20px 0 0; width: 100%; padding: 0 20px;">
<div style="display: flex; width: 100%; height: 100%; align-items: center; justify-content: center;">
<div style="display: flex; width: 100%; height: auto; flex-direction: column; gap: 16px; color: black; align-items: center; justify-content: center;">
<p style="font-size: 2.5rem; font-weight: bold">{name}</p>
<div style="display: flex; flex-direction: row; justify-content: start; align-items: start; gap: 4px; font-size: 1rem; font-weight:medium; ">
<p>{email} &nbsp; | &nbsp;</p>
<p>{phone} &nbsp; | &nbsp;</p>
<p>{address}</p>
</div>
</div>
</div>
</div>
<div style="display: flex; flex-direction: column; gap: 30px; width: 100%; padding: 30px">
<div>
<p style="font-size: 0.9rem;">{summary}</p>
</div>
<div  style="display: flex; flex-direction: column; justify-content:flex-start; align-items:flex-start; gap: 15px;" >
<h3 style="font-size: 1.5rem; font-weight:bold;">Experience</h3>
<div style="display: flex; flex-direction: column; gap: 10px;">
{experience.map((exp, index) => (
<div key={index} style="display: flex; flex-direction: column; justify-content:flex-start; align-items:flex-start; gap:10px;">
<p style="font-size: 1rem; font-weight: semibold;">{exp.jobTitle} - {exp.company}</p>
<p style="font-size: 0.8rem;">{exp.startDate} - {exp.endDate}</p>
<p style="font-size: 1rem;">{exp.jobDescription}</p>
</div>
))}
</div>
</div>
<div style="display: flex; flex-direction: column; justify-content:flex-start; align-items:flex-start; gap: 15px;">
<h3 style="font-size: 1.5rem; font-weight:bold;">Education</h3>
<div style="display: flex; flex-direction: column; gap: 10px;">
{education.map((edu, index) => (
<div key={index} style="display: flex; flex-direction: column;">
<p style="font-size: 1rem; font-weight: bold;">{edu.degree} - {edu.institution}</p>
<p style="font-size: 0.9rem; color: gray;">{edu.startDate} - {edu.endDate}</p>
<p style="font-size: 1rem;">{edu.description}</p>
</div>
))}
</div>
</div>
<div style="display: flex; flex-direction: column; justify-content:flex-start; align-items:flex-start; gap: 15px;">
<h3  style="font-size: 1.5rem; font-weight:bold;">Skills</h3>
<ul style="list-style-type: disc; margin-left: 20px;">
{skills.map((skill, index) => (
<li key={index} style="font-size: 0.9rem;">{skill}</li>
))}
</ul>
</div>
</div>

  </div>`, // Original jsx string from your code
    htmlOption: `<div style="display: flex; flex-direction: column; align-items: start; justify-content: start; min-height: 410px; width: 320px; background-color: white; border-radius: 20px;" >
  <div style="height: 80px; width: 100%; border-radius: 20px 20px 0 0; background-color: #E2E8F0; padding: 1rem 1rem 0rem 1rem;" >
    <div style="display: flex; width: 100%; height:100%; align-items: center; justify-content: center; border-top: 1px solid #9a9ca1; border-left: 1px solid #9a9ca1; border-right : 1px solid #9a9ca1; border-radius:12px 12px 0px 0px " >
      <p style="font-size: 1.2rem;">{name}</p>
    </div>
  </div>
  <div style="width: 100%; border-radius: 0 0 20px 20px; background-color: white; padding: 0rem 1rem 1rem 1rem;" >
    <div style="font-size: 0.35rem; border-radius:0px 0px 12px 12px ; display: flex; flex-direction: column; align-items: start; justify-content: start; gap: 0.5rem; border-bottom: 1px solid #9a9ca1; border-left: 1px solid #9a9ca1; border-right : 1px solid #9a9ca1; padding:0.6rem; ">
      <div style="display: flex; width: 100%; align-items: start; justify-content: space-between;">
        <p>{email} | {phone}</p>
        <div style="display: flex; flex-direction: column; gap: 0.25rem;" >
          <p>{address}</p>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.5rem;" >
        <p>Experience</p>
        <ul style="list-style-type: disc; margin-left: 20px;">
          {experience.map((exp, index) => (
            <li key={index} style="font-size: 0.35rem;">{exp.jobTitle} - {exp.company} ({exp.startDate} - {exp.endDate})</li>
          ))}
        </ul>
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.5rem;" >
        <p>Education</p>
        <ul style="list-style-type: disc; margin-left: 20px;">
          {education.map((edu, index) => (
            <li key={index} style="font-size: 0.35rem;">{edu.degree} - {edu.institution} ({edu.startDate} - {edu.endDate})</li>
          ))}
        </ul>
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.5rem;" >
        <p>Skills</p>
        <ul style="list-style-type: disc; margin-left: 20px;">
          {skills.map((skill, index) => (
            <li key={index} style="font-size: 0.35rem;">{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</div>`, // Original jsxOption string from your code
    sampleData: {
      name: "John Doe",
      profilePicture: "profile-picture-url",
      email: "john.doe@example.com",
      phone: "+1234567890",
      address: "123 Main Street, City, Country",
      summary:
        "An experienced software developer with a strong background in building scalable web applications and a passion for solving complex problems.",
      experience: [
        {
          jobTitle: "Senior Software Engineer",
          company: "XYZ Corporation",
          startDate: "2018-01-01",
          endDate: "2021-12-31",
          jobDescription:
            "Led a team of developers to build and maintain a suite of web applications, improving efficiency and user experience.",
        },
        {
          jobTitle: "Software Engineer",
          company: "ABC Company",
          startDate: "2015-06-01",
          endDate: "2017-12-31",
          jobDescription:
            "Developed new features and optimized existing ones, contributing to a 30% increase in overall system performance.",
        },
      ],
      education: [
        {
          degree: "Bachelor of Science in Computer Science",
          institution: "University of Technology",
          startDate: "2011-09-01",
          endDate: "2015-06-01",
          description:
            "Graduated with honors, specializing in software development and algorithms.",
        },
      ],
      skills: ["JavaScript", "React", "Node.js", "CSS", "HTML"],
      initials: "JD",
    },
    dynamicFields: [
      "name",
      "profilePicture",
      "email",
      "phone",
      "address",
      "summary",
      "experience",
      "education",
      "skills",
    ],
  };

  function replaceDynamicFields(dataObject: templateType) {
    const { html, sampleData, dynamicFields } = dataObject;

    let newJsx = html;

    dynamicFields.forEach((field) => {
      if (Array.isArray(sampleData[field as keyof typeof sampleData])) {
        let listString = "";
        (
          sampleData[field as keyof typeof sampleData] as
            | educationType[]
            | experienceType[]
            | string[]
        ).forEach((item, index: number) => {
          if (field === "experience" || field === "education") {
            listString += `
              <div key={${index}} style="display: flex; flex-direction: column; gap:6px;">
                <p style="font-size: 1rem; font-weight: bold;">${(item as experienceType).jobTitle || (item as educationType).degree} - ${(item as experienceType).company || (item as educationType).institution}</p>
                <p style="font-size: 0.8rem; color: gray;">${(item as experienceType).startDate} - ${(item as experienceType).endDate}</p>
                <p style="font-size: 0.9rem;">${(item as experienceType).jobDescription || (item as educationType).description}</p>
              </div>
            `;
          } else if (field === "skills") {
            listString += `<li key={${index}} style="font-size: 0.9rem;">${item}</li>`;
          }
        });
        newJsx = newJsx.replace(
          new RegExp(
            `{${field}\\.map\\(\\(\\w+, \\w+\\) => \\((.*?)\\)\\)}`,
            "gs"
          ),
          listString
        );
      } else {
        newJsx = newJsx.replace(
          new RegExp(`{${field}}`, "g"),
          sampleData[field as keyof typeof sampleData] as string
        );
      }
    });
    return newJsx;
  }

  const renderedTemplate = replaceDynamicFields(dataObject);

  return <div dangerouslySetInnerHTML={{ __html: renderedTemplate }} />;
};

export default Template1;
