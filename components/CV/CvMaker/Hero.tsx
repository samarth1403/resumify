import Button from "@/components/SubComponents/Button";
import HeroComponent from "@/components/SubComponents/HeroComponent";
import React from "react";

const Hero = () => {
  return (
    <HeroComponent
      preTitle="Create Your Perfect CV With Our Online &nbsp;"
      heroWord="CV Maker"
      heroWordUnderlineImg="/assets/images/underline-gradient.svg"
      postTitle=""
      text="Our online CV Builder simplifies the writing process with suggested content based on your personal experience. Easily build a CV that paves the way to your dream job."
      heroImage="/assets/images/hero-resume-example.svg"
      createBtn={<Button href="/">Create your CV</Button>}
      orderReverse
    />
  );
};

export default Hero;
