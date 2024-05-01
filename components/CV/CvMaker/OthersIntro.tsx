import OthersIntroComponent from "@/components/SubComponents/OthersIntroComponent";
import { othersIntroData } from "@/constants/CV";
import React from "react";

const OthersIntro = () => {
  return (
    <OthersIntroComponent
      othersIntroData={othersIntroData}
      title="We also have Resumes and Cover Letters Examples !"
      text="Explore our extensive collection of over 600 CV and cover letter examples to find your perfect fit for any industry or job level."
    />
  );
};

export default OthersIntro;
