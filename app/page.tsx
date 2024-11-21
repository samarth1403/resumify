"use client";
import {
  Faq,
  Features,
  Hero,
  Reviews,
  Steps,
} from "@/components/Resume/ResumeBuilder";
import Blogs from "@/components/Resume/ResumeBuilder/Blogs";
import Templates from "@/components/Resume/Templates";
import WriteReview from "@/components/SubComponents/WriteReview";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Steps />
      <Templates />
      {/* <Video /> */}
      <Features />
      {/* <OthersIntro /> */}
      {/* <Ratings /> */}
      <Blogs />
      <Reviews />
      <Faq />
      <WriteReview type="resume" />
    </>
  );
};

export default Homepage;
