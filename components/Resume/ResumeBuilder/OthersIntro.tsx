import OthersIntroComponent from "@/components/SubComponents/OthersIntroComponent";
import { othersIntroData } from "@/constants/Resume";

const OthersIntro = () => {
  return (
    <OthersIntroComponent
      othersIntroData={othersIntroData}
      title="Looking for CVs or cover letters?"
      text="Explore our extensive collection of over 600 CV and cover letter examples to find your perfect fit for any industry or job level."
    />
  );
};

export default OthersIntro;
