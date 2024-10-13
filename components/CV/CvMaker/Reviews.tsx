import ReviewsComponent from "@/components/SubComponents/ReviewsComponent";
import { ReviewType } from "@/constants";
import React from "react";

const Reviews = () => {
  return (
    <ReviewsComponent
      title="What users say about our CV Maker"
      fiveStarReviews={[] as ReviewType[]}
    />
  );
};

export default Reviews;
