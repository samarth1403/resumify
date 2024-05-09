import { Section } from "@/components/SubComponents";
import React from "react";

const Template1 = () => {
  const dataObject = {
    name: "Hickory",
    type: "cover-letter",
    subtype: "professional",
    jsx: `<div class="flex h-full min-h-[1000px]  w-[800px] flex-col items-start justify-start rounded-xl  ">
        <div class="h-40 w-full rounded-t-xl   bg-gray-200 px-10 pt-10 ">
          <div class="flex  size-full items-center justify-center border-x-2 border-t-2 rounded-t-xl border-gray-400 ">
            <p class="h4 ">{name}</p>
          </div>
        </div>
        <div class="size-full rounded-b-xl bg-white   px-10 pb-10 ">
          <div class="body-4 flex size-full flex-col items-start justify-start gap-6 border-x-2 border-b-2 rounded-b-xl border-gray-400 p-6 text-justify ">
            <div class="flex w-full items-start justify-between">
              <p>{date}</p>
              <div class="flex-start flex-col gap-1">
                <p>{email}</p>
                <p>{phone}</p>
                <p>{address}</p>
              </div>
            </div>
            <div class="flex-start flex-col gap-1">
              <p>{recruiterName}</p>
              <p>{hiringCompanyName}</p>
              <p>{hiringCompanyAddress}</p>
            </div>
            <p>Dear Mr. {recruiterName},</p>
           <div class="flex-col flex-start" >
               <p>{coverLetterOpener}</p>
            <p class=" whitespace-pre-line  mb-6" >
              {coverLetterBody}
            </p>
            <p>
              {coverLetterCloser}
            </p>
           </div>
            <div class="flex-start flex-col">
              <p>Sincerely,</p>
              <p>{name}</p>
            </div>
          </div>
        </div>
      </div>`,
    sampleData: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1234567890",
      address: "123 Main Street, City, Country",
      date: "2022-01-01",
      recruiterName: "Jane Smith",
      recruiterPosition: "Hiring Manager",
      hiringCompanyName: "ABC Company",
      hiringCompanyAddress: "456 Oak Avenue, City, Country",
      coverLetterOpener:
        "I am writing to apply for the Software Engineer position at ABC Company, as advertised on your company's careers page. With a strong background in software development and a passion for creating innovative solutions, I am excited about the opportunity to contribute to your team.",
      coverLetterBody: `In my previous role at XYZ Corporation, I led a team that developed a new software solution which increased efficiency by 30%. This experience has equipped me with the skills needed to tackle complex problems and deliver high-quality software solutions. Additionally, my attention to detail and strong communication skills make me a great fit for this role.

        I am particularly drawn to ABC Company's commitment to innovation and creating a positive impact in the industry. I am excited about the opportunity to contribute to your team and help ABC Company achieve its goals. I am confident that my technical skills and passion for software development make me a valuable asset to your team.`,
      coverLetterCloser:
        "Thank you for considering my application. I am eager to discuss how my background, skills, and enthusiasm align with the goals of ABC Company. I am available for an interview at your earliest convenience and can be reached at +1234567890 or john.doe@example.com.",
    },
    dynamicFields: [
      "name",
      "date",
      "email",
      "phone",
      "address",
      "recruiterName",
      "hiringCompanyName",
      "hiringCompanyAddress",
      "recruiterName",
      "coverLetterOpener",
      "coverLetterBody",
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
    <Section
      className="mt-[5.25rem] size-full "
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="steps"
    >
      <div dangerouslySetInnerHTML={{ __html: renderedTemplate }} />
    </Section>
  );
};

export default Template1;
