import ReviewsComponent from "@/components/SubComponents/ReviewsComponent";
import { coverLettersFiveStarReviews } from "@/constants/CoverLetter";
import React from "react";

const Reviews = () => {
  return (
    <ReviewsComponent
      title="What users think about our Cover Letter Generator"
      fiveStarReviews={coverLettersFiveStarReviews}
    />
  );
};

export default Reviews;
