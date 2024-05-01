import FeaturesComponent from "@/components/SubComponents/FeaturesComponent";
import { resumeAlternateData } from "@/constants/Resume";

const Features = () => {
  return (
    <FeaturesComponent
      title="Why use our online Resume Builder ?"
      resumeAlternateData={resumeAlternateData}
    />
  );
};

export default Features;
