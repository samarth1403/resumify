import FaqComponent from "@/components/SubComponents/FaqComponent";
import { cvFaqData } from "@/constants/CV";
import { coverLetterFaqData } from "@/constants/CoverLetter";
import { resumeFaqData } from "@/constants/Resume";
import React from "react";

const page = () => {
  return (
    <div className="mt-8 lg:mt-16">
      <FaqComponent
        title="Resume, CV, and Cover Letter FAQs"
        faqData={[...resumeFaqData, ...cvFaqData, ...coverLetterFaqData]}
      />
    </div>
  );
};

export default page;
