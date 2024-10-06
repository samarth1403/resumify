import Template from "@/models/template";
import { dbConnection } from "@/utils/dbConnection";
import { NextRequest, NextResponse } from "next/server";

dbConnection();

export const GET = async (request: NextRequest, response: NextResponse) => {
  const searchParams = request.nextUrl.searchParams;
  const type = searchParams.get("type");
  const subtype = searchParams.get("subtype");

  if (!type) {
    return NextResponse.json(
      { error: "Type parameter is required" },
      { status: 400 }
    );
  }

  const query: { type: string; subtype?: string } = { type };

  if (subtype) {
    query.subtype = subtype;
  }

  try {
    const allTemplates = await Template.find(query);
    if (!allTemplates) {
      return NextResponse.json(
        { error: "Templates not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { data: allTemplates, success: true },
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
