import UserDocument from "@/models/user-document";
import { dbConnection } from "@/utils/dbConnection";
import { NextRequest, NextResponse } from "next/server";

dbConnection();

export const POST = async (request: NextRequest) => {
  try {
    const { user, userData, template, type } = await request.json();
    if (!user || !userData || !template || !type) {
      throw new Error("All fields are required");
    }
    const existingDocument = await UserDocument.findOne({
      $and: [{ user }, { template }],
    });
    if (existingDocument) {
      await UserDocument.findByIdAndUpdate(
        existingDocument._id,
        { userData, type },
        { new: true }
      );
      return NextResponse.json({ success: true }, { status: 201 });
    }
    const document = new UserDocument({
      user,
      userData,
      template,
      type,
    });
    await document.save();
    return NextResponse.json(
      {
        data: document,
        success: true,
        message: "Document Created Successfully",
      },
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
