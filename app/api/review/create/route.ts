import ReviewModel from "@/models/review";
import { dbConnection } from "@/utils/dbConnection";
import { NextRequest, NextResponse } from "next/server";

dbConnection();

export const POST = async (request: NextRequest) => {
  try {
    const { name, rating, comment, type } = await request.json();
    if (!name || !rating) {
      throw new Error("All fields are required");
    }
    const newReview = new ReviewModel({
      name,
      rating,
      comment,
      type,
    });

    const newReviewSaved = await newReview.save();
    console.log(newReviewSaved);

    return NextResponse.json({
      message: "Review Submitted successfully",
      success: true,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      console.log("Unknown error occurred");
      return NextResponse.json(
        { error: "Unknown error occurred" },
        { status: 500 }
      );
    }
  }
};
