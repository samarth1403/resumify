import Heading from "@/components/SubComponents/Heading";
import Section from "@/components/SubComponents/Section";
import { ReviewType } from "@/constants";
import { Rating } from "@smastrom/react-rating";

// Swiper Imports
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

interface propTypes {
  title: string;
  text?: string;
  fiveStarReviews: ReviewType[];
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
        <Swiper
          pagination={{
            type: "bullets",
          }}
          loop={true}
          autoFocus={true}
          className="flex w-[320px] flex-wrap items-start justify-around gap-6 py-12 sm:w-[400px] md:w-[700px] lg:w-[1000px] xl:w-[1100px]"
          // spaceBetween={32}
          grabCursor={true}
          centeredSlides={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            400: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            639: {
              slidesPerView: 2,
              slidesPerGroup: 1,
            },
            865: {
              slidesPerView: 2,
              slidesPerGroup: 1,
            },
            1000: {
              slidesPerView: 3,
              slidesPerGroup: 1,
            },
            1400: {
              slidesPerView: 3,
              slidesPerGroup: 1,
            },
            1700: {
              slidesPerView: 3,
              slidesPerGroup: 1,
            },
          }}
          modules={[Autoplay, Pagination]}
        >
          {fiveStarReviews?.map((review, index) => (
            <SwiperSlide key={index}>
              <div
                key={index}
                className="flex-start mb-12 flex w-64 flex-col gap-4 rounded-xl bg-white p-4 shadow-2xl shadow-shades-5 lg:w-80 lg:gap-8 lg:p-6"
              >
                <div className="flex-between w-full flex-nowrap">
                  <div className="flex-start flex-col gap-2">
                    <p className="h6 lg:h5">{review.name}</p>
                    <Rating
                      style={{ maxWidth: 100 }}
                      value={review.rating}
                      readOnly
                    />
                  </div>
                  <div className="flex-center size-12 rounded-full bg-shades-9">
                    <p className="h5 font-bold text-white">
                      {review?.name
                        ?.split(" ")
                        ?.map((name, index) => name.charAt(0)?.toUpperCase())
                        ?.filter(
                          (name, index) =>
                            index === 0 ||
                            index === review?.name?.split(" ")?.length - 1
                        )
                        ?.join("")}
                    </p>
                  </div>
                </div>

                <p className="w-full text-[0.8rem] lg:text-[0.9rem]">
                  {review.comment}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
};

export default ReviewsComponent;
