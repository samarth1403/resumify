import RatingsComponent from "@/components/SubComponents/RatingsComponent";
import { cvFiveStarReviews } from "@/constants/CV";
import React from "react";

const Ratings = () => {
  return (
    <RatingsComponent
      title="See our CV Maker’s five-star reviews"
      fiveStarReviews={cvFiveStarReviews}
    />
  );
};

export default Ratings;
