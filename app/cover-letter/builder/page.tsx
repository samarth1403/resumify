import {
  Blogs,
  Faq,
  Features,
  Hero,
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
      {/* <Ratings /> */}
      <Reviews />
      <Blogs />
      <Faq />
      {/* <WriteReview type="cover-letter" /> */}
    </>
  );
};

export default ConverLetterBuilder;
