import ChooseTemplateComponent from "@/components/SubComponents/ChooseTemplateComponent";
import { resumeTemplateData } from "@/constants/Resume";

const ChooseTemplate = () => {
  return (
    <ChooseTemplateComponent
      title="Job-winning Professional Resume Templates"
      templateData={resumeTemplateData}
    />
  );
};

export default ChooseTemplate;
