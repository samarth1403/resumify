import ReviewsComponent from "@/components/SubComponents/ReviewsComponent";
import { resumeFiveStarReviews } from "@/constants/Resume";

const Reviews = () => {
  return (
    <ReviewsComponent
      title="Real customer reviews of our Resume Maker"
      fiveStarReviews={resumeFiveStarReviews}
    />
  );
};

export default Reviews;
