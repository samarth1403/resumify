import Button from "@/components/SubComponents/Button";
import HeroComponent from "@/components/SubComponents/HeroComponent";

const Hero = () => {
  return (
    <HeroComponent
      preTitle="Create &nbsp; & &nbsp; Download Your Professional Resume With "
      heroWord="Resumify"
      heroWordUnderlineImg="/assets/images/underline-gradient.svg"
      postTitle=""
      text="Build an effective resume in minutes with our free-to-use resume builder. Go through step by step process and create a job winning resume that stands out."
      heroImage="/assets/images/hero-resume-example.svg"
      importBtn={<Button href="/">Import your Resume</Button>}
      createBtn={
        <Button href="/resume/build-resume">Create Your Resume</Button>
      }
    />
  );
};

export default Hero;
