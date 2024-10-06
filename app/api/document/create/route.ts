import Document from "@/models/document";
import { dbConnection } from "@/utils/dbConnection";
import { NextRequest, NextResponse } from "next/server";

dbConnection();

export const POST = async (request: NextRequest) => {
  try {
    const { user, userData, template, type } = await request.json();
    console.log(
      "User",
      user,
      "USer Data",
      userData,
      "Template",
      template,
      "Type",
      type
    );
    if (!user || !userData || !template || !type) {
      throw new Error("All fields are required");
    }
    const existingDocument = await Document.findOne({
      $and: [{ user }, { template }],
    });
    if (existingDocument) {
      return NextResponse.json(
        { message: `${type} Created Successfully`, success: true },
        { status: 201 }
      );
    }
    const document = new Document({
      user,
      userData,
      template,
      type,
    });
    await document.save();
    return NextResponse.json(
      { data: document, success: true },
      { status: 201 }
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
