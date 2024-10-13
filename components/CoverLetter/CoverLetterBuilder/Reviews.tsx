import ReviewsComponent from "@/components/SubComponents/ReviewsComponent";
import useGetAllReviews from "@/utils/useGetAllReviews";
import React from "react";

const Reviews = () => {
  const {reviews} = useGetAllReviews({ type: "cover-letter" });
  return (
    reviews?.length > 0 ?
    <ReviewsComponent
      title="What users think about our Cover Letter Generator"
      fiveStarReviews={reviews}
    /> : null
  );
};

export default Reviews;
