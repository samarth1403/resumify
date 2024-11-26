import User from "@/models/user";
import { dbConnection } from "@/utils/dbConnection";
import { getIdfromToken } from "@/utils/getIdfromToken";
import { NextRequest, NextResponse } from "next/server";

dbConnection();

export const POST = async (request: NextRequest) => {
  const { token } = await request.json();
  try {
    const userId = getIdfromToken(token || "");
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "User found Successfully", user },
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
