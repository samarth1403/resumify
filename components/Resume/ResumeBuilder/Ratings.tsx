import RatingsComponent from "@/components/SubComponents/RatingsComponent";
import { resumeFiveStarReviews } from "@/constants/Resume";

const Ratings = () => {
  return (
    <RatingsComponent
      title="Approved By Recruiters And Loved By Job Seekers"
      text="Seeing our 5 Star Reviews"
      fiveStarReviews={resumeFiveStarReviews}
    />
  );
};

export default Ratings;
