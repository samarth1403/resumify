"use client";
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
import { useGlobalContext } from "@/context/GlobalProvider";
import { UserDocuments } from "@/components/SubComponents";

const Homepage = () => {
  const { isUserLoggedIn } = useGlobalContext();
  return (
    <>
      {isUserLoggedIn ? <UserDocuments /> : <Hero />}
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

export default Homepage;
