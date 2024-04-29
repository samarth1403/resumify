import React from "react";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <Section
      className="mt-[5.25rem] w-full"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="grid grid-cols-12 gap-4 lg:gap-8 xl:gap-16">
        <div className="col-span-12 md:col-span-8">
          <div className="flex-start flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10">
            <h1 className="h1">
              Create &nbsp; & &nbsp; Download Your Professional Resume With
              &nbsp;
              <span className="relative inline-block">
                Resumify
                <Image
                  src={"/assets/images/underline-gradient.svg"}
                  alt=""
                  className="absolute left-0 top-full w-full "
                  width={100}
                  height={100}
                />
              </span>
            </h1>
            <p className="body-1">
              Build an effective 2024 resume in minutes with our free-to-use
              resume builder. Choose a recruiter-approved template and add
              prewritten skills by Certified Professional Resume Writers.
            </p>
            <div className="flex-center gap-4 lg:gap-8">
              <Button
                href="/"
                className="rounded-xl bg-shades-10 px-6 py-3 text-[1rem] text-shades-1 transition-all hover:bg-shades-4 hover:text-shades-10"
              >
                Import your Resume
              </Button>
              <Button
                href="/"
                className="rounded-xl bg-shades-10 px-6 py-3 text-[1rem] text-shades-1 transition-all hover:bg-shades-4 hover:text-shades-10 "
              >
                Create your Resume
              </Button>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="flex-center rounded-lg shadow-2xl shadow-shades-6">
            <Image
              src={"/assets/images/hero-resume-example.svg"}
              alt="Resume"
              width={100}
              height={100}
              className="size-full object-contain"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
