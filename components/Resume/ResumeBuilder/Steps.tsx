import Button from "@/components/SubComponents/Button";
import StepsComponent from "@/components/SubComponents/StepsComponent";
import { resumeStepsData } from "@/constants/Resume";

const Steps = () => {
  return (
    <StepsComponent
      stepsData={resumeStepsData}
      title={`Create Your Resume In ${resumeStepsData?.length} Simple Steps`}
      createBtn={<Button href="/">Create your Resume</Button>}
    />
  );
};

export default Steps;
