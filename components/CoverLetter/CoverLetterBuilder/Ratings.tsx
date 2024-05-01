import RatingsComponent from "@/components/SubComponents/RatingsComponent";
import { coverLettersFiveStarReviews } from "@/constants/CoverLetter";
import React from "react";

const Ratings = () => {
  return (
    <RatingsComponent
      title="Our builder is community-approved"
      fiveStarReviews={coverLettersFiveStarReviews}
    />
  );
};

export default Ratings;
