import FaqComponent from "@/components/SubComponents/FaqComponent";
import { cvFaqData } from "@/constants/CV";
import React from "react";

const Faq = () => {
  return <FaqComponent title="CV Builder FAQs" faqData={cvFaqData} />;
};

export default Faq;
