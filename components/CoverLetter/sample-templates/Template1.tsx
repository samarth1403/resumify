const Template1 = () => {
  const dataObject = {
    name: "Logo",
    description:
      "Wow employers with an elegant insignia , neat header design and thoughtful placement of contact info for maximum impact.",
    type: "cover-letter",
    subtype: "professional",
    jsx: `<div class="flex h-full min-h-[1000px] w-[800px] flex-col items-start justify-start rounded-xl shadow-xl shadow-gray-400 ">
        <div class="h-40 w-full rounded-t-xl px-10 ">
          <div class="flex  size-full items-center justify-center ">
            <div class="flex h-auto w-full items-center justify-between gap-2 ">
              <div class="flex-center gap-8">
                <div class=" flex-center rounded-full border-2 border-gray-500 bg-gray-500 p-4 text-white">
                  <p class="h3">
                    {initials}
                  </p>
                </div>
                <p class="h3">{name}</p>
              </div>
              <div class="flex-start body-3 flex-col gap-1 font-bold">
                <p>{email} &nbsp; &nbsp;</p>
                <p>{phone} &nbsp; &nbsp;</p>
                <p>{address} - 413006</p>
              </div>
            </div>
          </div>
        </div>
        <div class="size-full rounded-b-xl bg-white ">
          <div class="body-4 flex size-full flex-col items-start justify-start gap-6 p-8 text-justify ">
            <p>February 2024</p>
            <div class="flex-start flex-col gap-1">
              <p>{recruiterName}, {recruiterPosition}</p>
              <p>{hiringCompanyName}</p>
              <p>{hiringCompanyAddress}</p>
            </div>
            <p>Dear Mr. {recruiterName}</p>
            <p>
             {coverLetterOpener}
            </p>
            <p>
              {coverLetterBody1}
            </p>
            <p>
              {coverLetterBody2}
            </p>
            <p>
              {coverLetterCloser}
            </p>
            <div class="flex-start flex-col">
              <p>Sincerely,</p>
              <p> {name} </p>
            </div>
          </div>
        </div>
      </div>`,
    // eslint-disable-next-line max-len
    jsxOption: `<div class="flex h-full min-h-[410px] w-[320px] flex-col items-start justify-start rounded-xl">
    <div class="h-20 w-full rounded-t-xl bg-gray-200 px-4 pt-4 ">
    <div class="flex size-full items-center justify-center border-x-2 border-t-2 rounded-t-xl border-gray-400 ">
    <p class="h5">{name}</p>
    </div>
    </div>
    <div class="size-full rounded-b-xl bg-white px-4 pb-4 ">
    <div class="text-[0.35rem] flex size-full flex-col items-start justify-start gap-2 border-x-2 border-b-2 rounded-b-xl border-gray-400 p-4 text-justify ">
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
    <div class="flex-col flex-start gap-2" ><p>{coverLetterOpener}</p><p>{coverLetterBody1}</p><p>{coverLetterBody2}</p><p>{coverLetterCloser}</p></div><div class="flex-start flex-col"><p>Sincerely,</p><p>{name}</p></div></div></div></div>`,
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
      "hiringCompanyName",
      "hiringCompanyAddress",
      "recruiterName",
      "coverLetterOpener",
      "coverLetterBody1",
      "coverLetterBody2",
      "coverLetterCloser",
    ],
  };
  let renderedTemplate = dataObject.jsxOption;

  dataObject.dynamicFields.forEach((field: string) => {
    const regex = new RegExp(`{${field}}`, "g");
    renderedTemplate = renderedTemplate.replace(
      regex,
      dataObject.sampleData[field as keyof typeof dataObject.sampleData]
    );
  });

  return (
    // <Section
    //   className="border-2 border-blue-500"
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
