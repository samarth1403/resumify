import React from "react";
import StepsComponent from "@/components/SubComponents/StepsComponent";
import Button from "@/components/SubComponents/Button";
import { cvStepsData } from "@/constants/CV";

const Steps = () => {
  return (
    <StepsComponent
      stepsData={cvStepsData}
      title={`Make A Curriculum Vitae (CV) In ${cvStepsData?.length} Simple Steps`}
      createBtn={<Button href="/">Create your CV</Button>}
    />
  );
};

export default Steps;
