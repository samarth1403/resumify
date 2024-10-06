import {
  Blogs,
  Faq,
  Features,
  Hero,
  Ratings,
  Reviews,
  Steps,
} from "@/components/CoverLetter/CoverLetterBuilder";

const ConverLetterBuilder = () => {
  return (
    <>
      <Hero />
      <Steps />
      <Features />
      {/* <OthersIntro /> */}
      <Ratings />
      <Reviews />
      <Blogs />
      <Faq />
    </>
  );
};

export default ConverLetterBuilder;
