import Heading from "@/components/SubComponents/Heading";
import Section from "@/components/SubComponents/Section";

const Video = () => {
  return (
    <Section
      className="w-full"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="steps"
    >
      <div className="flex-center mt-4 w-full flex-col lg:mt-8 xl:mt-12">
        <Heading title="How to Build Your Resume" />
        <div className="flex w-full flex-wrap items-start justify-between rounded-2xl  md:p-12 lg:px-8 lg:py-6 xl:rounded-3xl">
          <div className="grid grid-cols-12 lg:gap-12">
            <div className="col-span-12 mb-8 h-52 md:h-72 lg:col-span-6 lg:mb-0 ">
              <iframe
                src="https://www.youtube.com/embed/EdLsqneALc4?si=Xnou-9oGvZHIoUVt"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="size-full rounded-2xl xl:rounded-3xl"
              ></iframe>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="flex-start flex-col gap-6 px-4 lg:px-0 ">
                <p className=" text-[2.2rem] font-bold leading-relaxed ">
                  Ready to create your resume ?
                </p>
                <p className="text-[1.1rem] font-semibold leading-8">
                  See how easy it is with our professional Resume Maker. Get
                  job-specific text and choose from a wide range of designs to
                  build a mistake-free resume that helps you land the job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Video;
