"use client";
import {
  Blogs,
  Faq,
  Features,
  Hero,
  Reviews,
  Steps,
} from "@/components/CoverLetter/CoverLetterBuilder";
import WriteReview from "@/components/SubComponents/WriteReview";

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
      <WriteReview type="cover-letter" />
    </>
  );
};

export default ConverLetterBuilder;
