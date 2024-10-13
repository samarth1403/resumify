import Blog from "@/models/blogModel";
import { dbConnection } from "@/utils/dbConnection";
import { NextRequest, NextResponse } from "next/server";

dbConnection();

export const GET = async (request: NextRequest, response: NextResponse) => {
  try {
    const allBlogs = await Blog.find();
    if (!allBlogs) {
      return NextResponse.json({ error: "Blogs not found" }, { status: 404 });
    }
    return NextResponse.json(
      { data: allBlogs, success: true },
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
