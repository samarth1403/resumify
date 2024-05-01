import Heading from "@/components/SubComponents/Heading";
import Section from "@/components/SubComponents/Section";
import Image from "next/image";

interface propTypes {
  title: string;
  text?: string;
  fiveStarReviews: {
    id: string;
    name: string;
    rating: number;
    review: string;
  }[];
}

const RatingsComponent = ({ title, text, fiveStarReviews }: propTypes) => {
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
        {text && <p className="h5 mb-8 w-full text-left   ">{text}</p>}
        <div className="flex w-full flex-wrap items-start justify-around gap-8 lg:gap-8">
          {fiveStarReviews?.map((review, index) => (
            <div
              key={review.id}
              className="flex-start flex w-48 flex-col gap-2 lg:w-80 lg:gap-4"
            >
              <p className="body-1">{review.name}</p>
              <div className="flex-center gap-2">
                {Array.from({ length: review.rating })?.map((_, index) => (
                  <div key={index}>
                    <Image
                      src={"/assets/icons/star.svg"}
                      alt=""
                      height={20}
                      width={20}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
              <p className="text-[0.8rem]">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default RatingsComponent;
