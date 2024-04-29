import Alternate from "@/components/Home/Alternate";
import Hero from "@/components/Home/Hero";
import Rating from "@/components/Home/Rating";
import ResumeFaq from "@/components/Home/ResumeFaq";
import Reviews from "@/components/Home/Reviews";
import Start from "@/components/Home/Start";
import Steps from "@/components/Home/Steps";
import Video from "@/components/Home/Video";

const page = () => {
  return (
    <>
      <Hero />
      <Steps />
      <Video />
      <Rating />
      <Start />
      <Alternate />
      <Reviews />
      <ResumeFaq />
    </>
  );
};

export default page;
