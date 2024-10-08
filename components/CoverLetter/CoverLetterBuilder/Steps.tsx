import React from "react";
import StepsComponent from "@/components/SubComponents/StepsComponent";
import { coverLetterStepsData } from "@/constants/CoverLetter";
import Button from "@/components/SubComponents/Button";

const Steps = () => {
  return (
    <StepsComponent
      title="Get your Cover Letter in 3 easy steps"
      stepsData={coverLetterStepsData}
      createBtn={<Button href="/">Get Your Cover Letter</Button>}
    />
  );
};

export default Steps;
