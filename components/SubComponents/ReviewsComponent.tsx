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
    profile: string;
    designation: string;
  }[];
}

const ReviewsComponent = ({ title, fiveStarReviews }: propTypes) => {
  return (
    <Section
      className="w-full"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="steps"
    >
      <div className="flex-center mt-4 w-full flex-col lg:mt-8 xl:mt-12">
        <Heading title={title} />
        <div className="flex w-full flex-wrap items-start justify-around gap-6">
          {fiveStarReviews?.map((review, index) => (
            <div
              key={review.id}
              className="flex-start flex w-72 flex-col gap-4 rounded-xl bg-white p-4 shadow-2xl shadow-shades-2 lg:w-[21rem] lg:gap-8 lg:p-8"
            >
              <div className="flex-between w-full flex-nowrap">
                <div className="flex-start flex-col gap-4">
                  <p className="h5">{review.name}</p>
                  <p className="body-2">{review.designation}</p>
                </div>
                <Image
                  src={review.profile}
                  alt=""
                  height={70}
                  width={70}
                  className="rounded-full object-contain"
                />
              </div>
              <p className="text-[0.9rem]">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ReviewsComponent;
