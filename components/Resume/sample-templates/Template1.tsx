"use client";
import {
  educationType,
  experienceType,
  profileType,
  projectType,
  templateType,
} from "@/constants";
import React from "react";

const Template1: React.FC = () => {
  const dataObject: templateType = {
    _id: "1",
    name: "Professional Resume",
    description:
      "A clean and professional resume template with a well-organized layout to highlight your skills and experiences effectively.",
    type: "resume",
    subtype: "professional",
    html: `
    <div style="min-height: 1000px; height: 100%; width: 800px; display: flex; flex-direction: column; align-items: start; justify-content: start; background-color: white;">
  <div style="height: 100px; background-color: #004080; color: white; width: 100%; padding: 20px 30px;">
    <div style="display: flex; width: 100%; height: 100%; align-items: center; justify-content: center;">
      <div style="display: flex; flex-direction: column; align-items: center;">
        <p style="font-size: 2.5rem; font-weight: bold;">{name}</p>
        <div style="display: flex; flex-direction: row; justify-content: center; align-items: center; gap: 10px; font-size: 1rem;">
          <p>{email}</p>
          <p>{phone}</p>
          <p>{address}</p>
        </div>
      </div>
    </div>
  </div>
  <div style="display: flex; flex-direction: column; gap: 20px; width: 100%; padding: 20px 30px;">
    <div>
      <p style="font-size: 1.2rem; font-weight: bold;">Summary</p>
      <p style="font-size: 0.9rem;">{summary}</p>
    </div>
    <div>
      <p style="font-size: 1.2rem; font-weight: bold;">Experience</p>
      {experience}
    </div>
    <div>
      <p style="font-size: 1.2rem; font-weight: bold;">Education</p>
      {education}
    </div>
    <div>
      <p style="font-size: 1.2rem; font-weight: bold;">Projects</p>
      {projects}
    </div>
    <div>
      <p style="font-size: 1.2rem; font-weight: bold;">Skills</p>
      {skills}
    </div>
    <div>
      <p style="font-size: 1.2rem; font-weight: bold;">Profiles</p>
      {profiles}
    </div>
  </div>
</div>

`, // Original jsx string from your code
    htmlOption: ``, // Original jsxOption string from your code
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
      profiles: [
        {
          profile: "LinkedIn",
          link: "https://www.linkedin.com",
        },
        {
          profile: "GitHub",
          link: "https://www.github.com",
        },
      ],
      projects: [
        {
          title: "Project 1",
          description: "A web application for managing tasks and deadlines.",
          link: "project1.com",
        },
        {
          title: "Project 2",
          description:
            "An e-commerce platform with real-time inventory tracking.",
          link: "project2.com",
        },
      ],
      skills: ["JavaScript", "React", "Node.js", "CSS", "HTML"],
      initials: "JD",
      // color: "#004080",
      // color: "#363535",
      // color: "#213b3a",
      // color: "black",
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
      "initials",
      "profiles",
      "projects",
    ],
  };

  function replaceDynamicFields(dataObject: templateType) {
    const { html, sampleData, dynamicFields } = dataObject;

    let newJsx = html;

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
              <div key={${index}} style="display: flex; flex-direction: column; gap:6px;">
                <p style="font-size: 1rem; font-weight: bold;">${(item as experienceType).jobTitle || (item as educationType).degree} - ${(item as experienceType).company || (item as educationType).institution}</p>
                <p style="font-size: 0.8rem; color: gray;">${(item as experienceType).startDate} - ${(item as experienceType).endDate}</p>
                <p style="font-size: 0.9rem;">${(item as experienceType).jobDescription || (item as educationType).description}</p>
              </div>
            `;
          } else if (field === "skills") {
            listString += `<li key={${index}} style="font-size: 0.9rem;">${item}</li>`;
          } else if (field === "profiles") {
            listString += `<li key={${index}} style="font-size: 0.9rem;"><a href=${(item as profileType).link} target="_blank" >${(item as profileType).profile}</a></li>`;
          } else if (field === "projects") {
            listString += `
              <div key={${index}} style="display: flex; flex-direction: column; gap:6px;">
                <p style="font-size: 1rem; font-weight: bold;">${(item as projectType).title}</p>
                <p style="font-size: 0.9rem;">${(item as projectType).description}</p>
                <a href=${(item as projectType).link} target="_blank" style="font-size: 0.9rem; color: ${sampleData.color};">${(item as projectType).link}</a>
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
            ? `<div style="display: flex; flex-direction: column; gap: 1rem;" >
                   <h3 style="font-size: 1.5rem; font-weight:bold; color: ${sampleData.color};">${String(field)?.[0]?.toUpperCase() + String(field)?.slice(1)}</h3>
              <ul style=" ${field === "skills" || field === "profiles" ? "margin-left : 20px;" : ""} list-style-type: disc; display: flex; flex-direction: column; gap: 1rem;  ">
                  ${listString}
              </ul>
                 </div>`
            : "";
        newJsx = newJsx.replace(new RegExp(`{${field}}`, "gs"), jsxString);
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

// Template1 :
{
  /* <div style="min-height: 1000px; height: 100%; width: 800px; display: flex; flex-direction: column; align-items: start; justify-content: start; background-color: white;">
  <div style="height: 130px; background-color: #004080; color: white; border-radius: 20px 20px 0 0; width: 100%; padding: 0 30px;">
    <div style="display: flex; width: 100%; height: 100%; align-items: center; justify-content: center;">
      <div style="display: flex; width: 100%; height: auto; flex-direction: column; gap: 4px; align-items: start; justify-content: center;">
        <p style="font-size: 2.5rem; font-weight: bold">{name}</p>
        <div style="display: flex; flex-direction: row; justify-content: start; align-items: start; gap: 4px; font-size: 1rem; font-weight:medium;">
          <p>{email} &nbsp; | &nbsp;</p>
          <p>{phone} &nbsp; | &nbsp;</p>
          <p>{address}</p>
        </div>
      </div>
    </div>
  </div>
  <div style="display: flex; flex-direction: column; gap: 30px; width: 100%; padding: 30px;">
    <div>
      <p style="font-size: 0.9rem;">{summary}</p>
    </div>
    {experience}
    {education}
    {projects}
    {skills}
    {profiles}
  </div>
</div>; */
}

// Template2 :

// <div style="min-height: 1000px; height: 100%; width: 800px; display: flex; flex-direction: column; align-items: start; justify-content: start; background-color: white;">
//   <div style="height: 150px; background-color: #363535; color: white; border-radius: 20px 20px 0 0; width: 100%; padding: 20px 30px;">
//     <div style="display: flex; width: 100%; height: 100%; align-items: center; justify-content: space-between;">
//       <div style="display: flex; flex-direction: column; gap: 4px; align-items: start;">
//         <p style="font-size: 2.5rem; font-weight: bold;">{name}</p>
//         <div style="display: flex; flex-direction: row; justify-content: start; align-items: start; gap: 10px; font-size: 1rem;">
//           <p>{email}</p>
//           <p>{phone}</p>
//           <p>{address}</p>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div style="display: flex; flex-direction: row; width: 100%; padding: 30px;">
//     <div style="width: 30%; display: flex; flex-direction: column; gap: 20px; padding-right: 20px;">
//       <div>{skills}</div>
//       <div>{profiles}</div>
//     </div>
//     <div style="width: 70%; display: flex; flex-direction: column; gap: 20px;">
//       <div>{education}</div>
//       <div>{experience}</div>

//       <div>{projects}</div>
//     </div>
//   </div>
// </div>;

// Template3 :
{
  /* <div style="min-height: 1000px; height: 100%; width: 800px; display: flex; flex-direction: column; align-items: start; justify-content: start; background-color: white;">
  <div style="height: 150px; background-color: #213b3a; color: white; border-radius: 20px 20px 0 0; width: 100%; padding: 20px 30px;">
    <div style="display: flex; width: 100%; height: 100%; align-items: center; justify-content: center;">
      <div style="display: flex; flex-direction: column; gap: 4px; align-items: center;">
        <p style="font-size: 2.5rem; font-weight: bold;">{name}</p>
        <div style="display: flex; flex-direction: row; justify-content: center; align-items: center; gap: 10px; font-size: 1rem;">
          <p>{email} | </p>
          <p>{phone} | </p>
          <p>{address}</p>
        </div>
      </div>
    </div>
  </div>
  <div style="display: flex; flex-direction: column; gap: 20px; width: 100%; padding: 20px 30px;">
    <div>{experience}</div>
    <div>{education}</div>
    <div>{projects}</div>
    <div>{skills}</div>
    <div>{profiles}</div>
  </div>
</div>; */
}

// Template 4
{
  /* <div style="min-height: 1000px; height: 100%; width: 800px; display: flex; flex-direction: column; align-items: start; justify-content: start; background-color: white;">
  <div style="height: 150px; background-color: #e0e0e0; color: black; border-radius: 20px 20px 0 0; width: 100%; padding: 20px 30px;">
    <div style="display: flex; width: 100%; height: 100%; align-items: center; justify-content: space-between;">
      <div style="display: flex; flex-direction: column; gap: 4px; align-items: start;">
        <p style="font-size: 2.5rem; font-weight: bold;">{name}</p>
        <div style="display: flex; flex-direction: row; justify-content: start; align-items: start; gap: 10px; font-size: 1rem;">
          <p>{email} |</p>
          <p>{phone} |</p>
          <p>{address}</p>
        </div>
      </div>
    </div>
  </div>
  <div style="display: flex; flex-direction: column; gap: 20px; width: 100%; padding: 20px 30px;">
    <div>{experience}</div>
    <div>{education}</div>
    <div>{projects}</div>
    <div>{skills}</div>
    <div>{profiles}</div>
  </div>
</div>; */
}
