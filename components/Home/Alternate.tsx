import Heading from "@/components/Heading";
import Section from "@/components/Section";
import { resumeAlternateData } from "@/constants";
import Image from "next/image";

const Alternate = () => {
  return (
    <Section
      className=" w-full"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="steps"
    >
      <div className="flex-center mt-4 w-full flex-col lg:mt-8 xl:mt-12">
        <Heading title="Why use our online Resume Builder ?" />
        <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
          {resumeAlternateData?.map((data, index) => (
            <div key={data.id} className="max-w-4xl">
              <div className="grid grid-cols-12 gap-6 lg:gap-12">
                <div
                  className={`col-span-12 lg:col-span-7 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}
                >
                  <div className="flex h-full flex-col items-start justify-center gap-4 lg:gap-8 xl:gap-12">
                    <p className="h3">{data.title}</p>
                    <p className="text-[0.8rem] leading-6 md:text-[0.9rem] md:leading-7 lg:text-[1.1rem] lg:leading-8">
                      {data.text}
                    </p>
                  </div>
                </div>
                <div
                  className={`col-span-12 lg:col-span-5 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}
                >
                  <div
                    className={`flex-center ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"} flex w-full`}
                  >
                    <Image
                      src={data?.logo}
                      alt={data.title}
                      width={50}
                      height={50}
                      className="w-48 object-contain shadow-2xl shadow-shades-4 lg:w-64"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Alternate;
