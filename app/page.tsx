import Blogs from "@/components/Resume/ResumeBuilder/Blogs";
import {
  Features,
  Hero,
  OthersIntro,
  Ratings,
  Faq,
  Reviews,
  Steps,
  Video,
} from "@/components/Resume/ResumeBuilder";
import Templates from "@/components/Resume/Templates";

const page = () => {
  return (
    <>
      <Hero />
      <Steps />
      <Templates />
      <Video />
      <Features />
      <OthersIntro />
      <Ratings />
      <Blogs />
      <Reviews />
      <Faq />
    </>
  );
};

export default page;
