"use client";
import {
  Faq,
  Features,
  Hero,
  Reviews,
  Steps,
  Video,
} from "@/components/Resume/ResumeBuilder";
import Blogs from "@/components/Resume/ResumeBuilder/Blogs";
import Templates from "@/components/Resume/Templates";
import { UserDocuments } from "@/components/SubComponents";
import { useGlobalContext } from "@/context/GlobalProvider";

const Homepage = () => {
  const { isUserLoggedIn } = useGlobalContext();
  return (
    <>
      {isUserLoggedIn ? <UserDocuments /> : <Hero />}
      <Steps />
      <Templates />
      <Video />
      <Features />
      {/* <OthersIntro /> */}
      {/* <Ratings /> */}
      <Blogs />
      <Reviews />
      <Faq />
      {/* <WriteReview type="resume" /> */}
    </>
  );
};

export default Homepage;
