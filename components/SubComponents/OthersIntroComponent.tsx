import Heading from "@/components/SubComponents/Heading";
import Section from "@/components/SubComponents/Section";
import Image from "next/image";
import Link from "next/link";

interface propTypes {
  title: string;
  text: string;
  othersIntroData: {
    id: string;
    title: string;
    uri: string;
    image: string;
  }[];
}

const OthersIntroComponent = ({ title, text, othersIntroData }: propTypes) => {
  return (
    <Section
      className=" w-full"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="steps"
    >
      <div className="flex-center mt-4 w-full flex-col lg:mt-8 xl:mt-12">
        <Heading title={title} />
        <p className="body-1 mb-4 text-center lg:mb-8 lg:max-w-2xl xl:mb-12">
          {text}
        </p>
        <div className="flex-center flex-wrap gap-4 lg:gap-8 xl:gap-12">
          {othersIntroData?.map((data, index) => (
            <div
              key={data?.id}
              className="flex-center w-72 flex-col gap-6 lg:w-80 lg:gap-12 "
            >
              <div className="flex-center rounded-lg shadow-2xl shadow-shades-6 xl:rounded-xl">
                <Image
                  src={data?.image}
                  alt={data.title}
                  width={100}
                  height={100}
                  className="size-full object-contain"
                />
              </div>
              <Link href={data?.uri}>
                <p className="h5 text-center font-bold text-blue-600">
                  {data?.title}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default OthersIntroComponent;
