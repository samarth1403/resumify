import FaqComponent from "@/components/SubComponents/FaqComponent";
import { coverLetterFaqData } from "@/constants/CoverLetter";

const Faq = () => {
  return (
    <FaqComponent
      title="Cover Letter Builder FAQs"
      faqData={coverLetterFaqData}
    />
  );
};

export default Faq;
