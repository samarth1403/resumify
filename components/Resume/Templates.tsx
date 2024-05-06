import Heading from "@/components/SubComponents/Heading";
import Section from "@/components/SubComponents/Section";
import { resumeTemplateTypes } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Templates = () => {
  return (
    <Section
      className="w-full "
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="steps"
    >
      <div className="flex-center mt-4 w-full flex-col lg:mt-8 xl:mt-12">
        <Heading title="Start Building By Picking A Professional Template" />
        <p className="body-1 mb-4 text-center lg:mb-8 lg:max-w-2xl">
          Choose one of the resume templates below. Fill it in with
          expert-written text inspired by your work experience.
        </p>
        <p className="body-1 text-center lg:max-w-2xl">
          These professionally designed templates have been tested in the real
          world and proven to bypass HR screening software. Rest easy knowing
          your resume is more likely to land in human hands.
        </p>
        <div className="mt-4 flex w-full flex-wrap items-start justify-around gap-12 lg:mt-16 ">
          {resumeTemplateTypes?.map((type, index) => (
            <div
              key={type?.id}
              className="flex-center w-72 flex-col gap-6 lg:w-80 "
            >
              <div className="flex-center rounded-lg shadow-2xl shadow-shades-6 xl:rounded-xl">
                <Image
                  src={type?.logo}
                  alt={type.title}
                  width={100}
                  height={100}
                  className="size-full object-contain"
                />
              </div>
              <Link href={type?.uri}>
                <p className="h5 text-center font-bold text-blue-600">
                  {type?.title}
                </p>
              </Link>
              <p className="body-2 text-center">{type.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Templates;
