import { Button } from "@/components/SubComponents";
import StepsComponent from "@/components/SubComponents/StepsComponent";
import { resumeStepsData } from "@/constants/Resume";

const page = () => {
  return (
    <div className="mt-6 w-full lg:mt-6 xl:mt-6">
      <StepsComponent
        stepsData={resumeStepsData}
        title={`How to Create a Job-Winning Resume`}
        createBtn={
          <Button href="/resume/build-resume/choose-template">
            Get Started
          </Button>
        }
      />
    </div>
  );
};

export default page;
