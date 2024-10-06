import { Button } from "@/components/SubComponents";
import StepsComponent from "@/components/SubComponents/StepsComponent";
import { buildCoverLetterIntroData } from "@/constants/CoverLetter";

const page = () => {
  return (
    <StepsComponent
      stepsData={buildCoverLetterIntroData}
      title={`How to Create a Job-Winning Cover Letter`}
      createBtn={
        <Button href="/cover-letter/build-letter/choose-template">
          Get Started
        </Button>
      }
    />
  );
};

export default page;
