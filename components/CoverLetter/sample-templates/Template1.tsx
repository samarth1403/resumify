"use client";
import React from "react";
const Template1 = () => {
  const dataObject = {
    name: "Logo",
    description:
      "Wow employers with an elegant insignia , neat header design and thoughtful placement of contact info for maximum impact.",
    type: "cover-letter",
    subtype: "professional",
    jsx: `   <div style="min-height: 1000px; height: 100%; width: 800px; display: flex; flex-direction: column; align-items: start; justify-content: start; background-color: white; border-radius: 20px;">
    <div style="height: 160px; background-color: rgb(55, 65, 81); border-radius: 20px 20px 0 0; width: 100%; padding: 0 20px;">
      <div style="display: flex; width: 100%; height: 100%; align-items: center; justify-content: center; gap: 32px;">
        <p style="background-color: rgb(17, 24, 39); color: white; font-size: 2.5rem; padding: 24px; display: flex; justify-content: center; align-items: center; border-radius: 50%; border: 1px solid white;">{initials}</p>
        <div style="display: flex; width: 100%; height: auto; flex-direction: column; gap: 16px; color: white; align-items: start; justify-content: center;">
          <p style="font-size: 2.5rem;">{name}</p>
          <div style="display: flex; flex-direction: row; justify-content: start; align-items: start; gap: 4px; font-size: 0.9rem;">
            <p>{email} &nbsp; | &nbsp;</p>
            <p>{phone} &nbsp; | &nbsp;</p>
            <p>{address}</p>
          </div>
        </div>
      </div>
    </div>
    <div style="width: 100%; height: 100%; background-color: white; border-radius: 0 0 20px 20px;">
      <div style="display:flex; flex-direction:column; font-size: 0.8rem; padding: 32px; gap: 32px; width: 100%; height: 100%; text-align: justify;">
        <p>{date}</p>
        <div style="display: flex; flex-direction: column; align-items: start; justify-content: start; gap: 4px;">
          <p>{recruiterName} , {recruiterPosition}</p>
          <p>{hiringCompanyName}</p>
          <p>{hiringCompanyAddress}</p>
        </div>
        <p>Dear Mr. {recruiterName} ,</p>
        <p>{coverLetterOpener}</p>
        <p>{coverLetterBody1}</p>
        <p>{coverLetterBody2}</p>
        <p>{coverLetterCloser}</p>
        <div style="display: flex; flex-direction: column; align-items: start; justify-content: start;">
          <p>Sincerely,</p>
          <p>{name}</p>
        </div>
      </div>
    </div>
  </div>`,
    // eslint-disable-next-line max-len
    jsxOption: `<div style="display: flex; min-height: 410px; background-color: white; width: 320px; flex-direction: column; align-items: start; justify-content: start; border-radius: 20px;" >
  <div style="display: flex; border-radius: 20px; padding: 1rem;">
    <div style="display: flex; flex-direction: column; align-items: center; justify-start; gap: 0.5rem;" >
      <div style="display: flex; justify-content: center; align-items: center; border: 2px solid #718096; padding: 0.5rem;">
        <p style="font-size: 1rem;" >{initials}</p>
      </div>
      <p style="font-size: 0.9rem; text-align: center;" >{name}</p>
      <div style="display: flex; flex-direction: column; gap: 0.25rem; font-weight: bold; font-size: 0.35rem;" >
        <p>{email}</p>
        <p>{phone}</p>
        <p>{address}</p>
      </div>
    </div>
    <div style="font-size: 0.35rem; display: flex; flex-direction: column; align-items: start; justify-start; gap: 1.5rem; padding-left: 1rem; text-align: justify;" >
      <div style="display: flex; flex-direction: column; align-items: start; justify-start; gap: 1rem; border-left: 2px solid #CBD5E0; padding-left: 1rem;" >
        <p>{date}</p>
        <div style="display: flex; flex-direction: column; gap: 0.25rem;" >
          <p>{recruiterName}, {recruiterPosition}</p>
          <p>{hiringCompanyName}</p>
          <p>{hiringCompanyAddress}</p>
        </div>
        <p>Dear Mr. {recruiterName} ,</p>
        <p>{coverLetterOpener}</p>
        <p>{coverLetterBody1}</p>
        <p>{coverLetterBody2}</p>
        <p>{coverLetterCloser}</p>
        <div style="display: flex; flex-direction: column;" >
          <p>Sincerely,</p>
          <p>{name}</p>
        </div>
      </div>
    </div>
  </div>
</div>

`,
    sampleData: {
      name: "John Doe",
      initials: "JD",
      email: "john.doe@example.com",
      phone: "+1234567890",
      address: "123 Main Street, City, Country",
      date: "2022-01-01",
      recruiterName: "Jane Smith",
      recruiterPosition: "Hiring Manager",
      hiringCompanyName: "ABC Company",
      hiringCompanyAddress: "456 Oak Avenue, City, Country",
      coverLetterOpener:
        // eslint-disable-next-line max-len
        "I am writing to apply for the Software Engineer position at ABC Company, as advertised on your company's careers page. With a strong background in software development and a passion for creating innovative solutions, I am excited about the opportunity to contribute to your team.",
      // eslint-disable-next-line max-len
      coverLetterBody1:
        // eslint-disable-next-line max-len
        "In my previous role at XYZ Corporation, I led a team that developed a new software solution which increased efficiency by 30%. This experience has equipped me with the skills needed to tackle complex problems and deliver high-quality software solutions. Additionally, my attention to detail and strong communication skills make me a great fit for this role.",
      // eslint-disable-next-line max-len
      coverLetterBody2:
        // eslint-disable-next-line max-len
        "I am particularly impressed by ABC Company's commitment to innovation and its collaborative work environment. I am confident that my technical skills and team-oriented approach would make me a valuable asset to your team. I am excited about the opportunity to contribute to the success of ABC Company and look forward to the possibility of working together.",
      coverLetterCloser:
        // eslint-disable-next-line max-len
        "Thank you for considering my application. I am eager to discuss how my background, skills, and enthusiasm align with the goals of ABC Company. I am available for an interview at your earliest convenience and can be reached at +1234567890 or john.doe@example.com.",
    },
    dynamicFields: [
      "name",
      "initials",
      "description",
      "date",
      "email",
      "phone",
      "address",
      "recruiterName",
      "recruiterPosition",
      "hiringCompanyName",
      "hiringCompanyAddress",
      "recruiterName",
      "coverLetterOpener",
      "coverLetterBody1",
      "coverLetterBody2",
      "coverLetterCloser",
    ],
  };
  let renderedTemplate = dataObject.jsx;

  dataObject.dynamicFields.forEach((field: string) => {
    const regex = new RegExp(`{${field}}`, "g");
    renderedTemplate = renderedTemplate.replace(
      regex,
      dataObject.sampleData[field as keyof typeof dataObject.sampleData]
    );
  });

  return (
    // <Section
    //   class="border-2 border-blue-500"
    //   crosses
    //   crossesOffset="lg:translate-y-[5.25rem]"
    //   customPaddings
    //   id="steps"
    // >
    <div dangerouslySetInnerHTML={{ __html: renderedTemplate }} />
    // </Section>
  );
};

export default Template1;
