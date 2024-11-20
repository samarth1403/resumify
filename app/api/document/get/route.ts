import Template from "@/models/template";
import UserDocument from "@/models/user-document";
import { dbConnection } from "@/utils/dbConnection";
import { getIdfromToken } from "@/utils/getIdfromToken";
import { NextRequest, NextResponse } from "next/server";

dbConnection();

export const GET = async (request: NextRequest) => {
  try {
    const userId = getIdfromToken(request);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const documents = await UserDocument.find({ user: userId }).populate(
      "template",
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

    if (!documents) {
      return NextResponse.json(
        { error: "Error Fetching Your Documents" },
        { status: 500 }
      );
    }
    const resumes = documents?.filter((document) => document.type === "resume");
    const coverLetters = documents?.filter(
      (document) => document.type === "cover-letter"
    );
    const cvs = documents?.filter((document) => document.type === "cv");
    return NextResponse.json(
      {
        message: "Documents found Successfully",
        documents: { resumes, coverLetters, cvs },
      },
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
