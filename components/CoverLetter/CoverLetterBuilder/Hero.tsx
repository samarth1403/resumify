import Button from "@/components/SubComponents/Button";
import HeroComponent from "@/components/SubComponents/HeroComponent";
import React from "react";

const Hero = () => {
  return (
    <HeroComponent
      preTitle=""
      heroWord="Cover Letter Generator : "
      heroWordUnderlineImg="/assets/images/underline-gradient.svg"
      postTitle="Build a professional cover letter in minutes"
      text="Say goodbye to the days of endless drafting sessions. Our Cover Letter Builder saves you time with auto-suggested text that’s specific to your experience and easily customizable."
      heroImage="/assets/images/hero-cover-letter-example.svg"
      createBtn={
        <Button href="/cover-letter/build-letter">
          Create Your Cover Letter
        </Button>
      }
      orderReverse
      showUnderLineImage={false}
    />
  );
};

export default Hero;
