import { dbConnection } from "@/utils/dbConnection";
import { NextRequest, NextResponse } from "next/server";

dbConnection();

export const GET = async (request: NextRequest) => {
  try {
    const response = NextResponse.json(
      {
        message: "Signed out successfully",
        success: true,
      },
      { status: 200 }
    );
    response.cookies.set("resumify-token", "", {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      path: "/",
      expires: new Date(0),
      domain:
        process.env.NODE_ENV === "production" ? "resumify-self.vercel.app" : "",
    });
    return response;
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
