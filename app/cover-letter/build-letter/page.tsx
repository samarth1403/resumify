import { Button } from "@/components/SubComponents";
import StepsComponent from "@/components/SubComponents/StepsComponent";
import { buildCoverLetterIntroData } from "@/constants/CoverLetter";

const page = () => {
  return (
    <div className="mt-4 w-full lg:mt-6 xl:mt-6">
      <StepsComponent
        stepsData={buildCoverLetterIntroData}
        title={`How to Create a Job-Winning Cover Letter`}
        createBtn={
          <Button href="/cover-letter/build-letter/choose-template">
            Get Started
          </Button>
        }
      />
    </div>
  );
};

export default page;
