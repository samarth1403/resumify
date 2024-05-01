import React from "react";
import {
  Blogs,
  Faq,
  Features,
  Hero,
  OthersIntro,
  Ratings,
  Reviews,
  Steps,
} from "@/components/CV/CvMaker";

const CvMaker = () => {
  return (
    <>
      <Hero />
      <Steps />
      <Features />
      <OthersIntro />
      <Ratings />
      <Reviews />
      <Blogs />
      <Faq />
    </>
  );
};

export default CvMaker;
