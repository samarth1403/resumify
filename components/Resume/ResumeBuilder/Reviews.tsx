import ReviewsComponent from "@/components/SubComponents/ReviewsComponent";
import useGetAllReviews from "@/utils/useGetAllReviews";

const Reviews = () => {
  const { reviews } = useGetAllReviews({ type: "resume" });
  return reviews?.length > 0 ? (
    <ReviewsComponent
      title="Real customer reviews of our Resume Maker"
      fiveStarReviews={reviews}
    />
  ) : null;
};

export default Reviews;
