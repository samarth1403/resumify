import ReviewModel from "@/models/review";
import { dbConnection } from "@/utils/dbConnection";
import { NextRequest, NextResponse } from "next/server";

dbConnection();

export const GET = async (request: NextRequest, response: NextResponse) => {
  const searchParams = request.nextUrl.searchParams;
  const type = searchParams.get("type");

  if (!type) {
    return NextResponse.json(
      { error: "Type parameter is required" },
      { status: 400 }
    );
  }

  const query: { type: string } = { type };
  try {
    const allReviews = await ReviewModel.find(query);
    if (!allReviews) {
      return NextResponse.json({ error: "Reviews not found" }, { status: 404 });
    }
    return NextResponse.json(
      { data: allReviews, success: true },
      { status: 200 }
    );
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
