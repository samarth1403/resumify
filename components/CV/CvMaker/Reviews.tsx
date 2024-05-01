import ReviewsComponent from "@/components/SubComponents/ReviewsComponent";
import { cvFiveStarReviews } from "@/constants/CV";
import React from "react";

const Reviews = () => {
  return (
    <ReviewsComponent
      title="What users say about our CV Maker"
      fiveStarReviews={cvFiveStarReviews}
    />
  );
};

export default Reviews;
