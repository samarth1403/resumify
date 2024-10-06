import { Button } from "@/components/SubComponents";
import StepsComponent from "@/components/SubComponents/StepsComponent";
import { resumeStepsData } from "@/constants/Resume";

const page = () => {
  return (
    <StepsComponent
      stepsData={resumeStepsData}
      title={`How to Create a Job-Winning Resume`}
      createBtn={
        <Button href="/resume/build-resume/choose-template">Get Started</Button>
      }
    />
  );
};

export default page;
