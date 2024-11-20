import { Section } from "@/components/SubComponents";
import WriteReview from "@/components/SubComponents/WriteReview";
import React from "react";

const page = () => {
  return (
    <Section
      className="mt-12 w-full"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <WriteReview type="resume" />
    </Section>
  );
};

export default page;
