import Template from "@/models/template";
import Example from "@/models/example";
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

  try {
    const allExamples = await Example.find({ type }).populate(
      "templateId",
      [
        "sampleData",
        "name",
        "htmlOption",
        "description",
        "type",
        "subtype",
        "html",
        "dynamicFields",
      ],
      Template
    );
    if (!allExamples) {
      return NextResponse.json(
        { error: `Examples of ${type} are not found` },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { data: allExamples, success: true },
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
