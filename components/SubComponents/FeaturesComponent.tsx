import Heading from "@/components/SubComponents/Heading";
import Section from "@/components/SubComponents/Section";
import Image from "next/image";

interface propTypes {
  title: string;
  resumeAlternateData: {
    id: string;
    title: string;
    text: string;
    logo: string;
  }[];
}

const Alternate = ({ title, resumeAlternateData }: propTypes) => {
  return (
    <Section
      className=" w-full"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="steps"
    >
      <div className="flex-center mt-4 w-full flex-col py-6 lg:mt-8  lg:py-0 xl:mt-12">
        <Heading title={title} className="w-full text-center" />
        <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
          {resumeAlternateData?.map((data, index) => (
            <div key={data.id} className="max-w-4xl">
              <div
                className={`flex w-full ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} flex-wrap items-center justify-center gap-6 lg:justify-between lg:gap-12`}
              >
                <div className="flex size-full flex-col items-center justify-center gap-4 lg:w-3/5 lg:items-start lg:gap-8 xl:gap-12">
                  <p className="h6 lg:h3 text-center lg:text-left xl:text-[1.7rem]">
                    {data.title}
                  </p>
                  <p className="text-center text-[0.8rem] leading-6 md:text-[0.9rem] md:leading-7 lg:text-left  lg:text-[1.1rem] lg:leading-8">
                    {data.text}
                  </p>
                </div>
                <Image
                  src={data?.logo}
                  alt={data.title}
                  width={50}
                  height={50}
                  className="w-48 object-contain shadow-2xl shadow-shades-4 lg:w-64"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Alternate;
