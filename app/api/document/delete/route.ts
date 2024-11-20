import UserDocument from "@/models/user-document";
import { dbConnection } from "@/utils/dbConnection";
import { NextRequest, NextResponse } from "next/server";

dbConnection();

export const DELETE = async (request: NextRequest) => {
  try {
    const { id } = await request.json();
    console.log({ id });
    if (!id) {
      throw new Error("All fields are required");
    }
    const document = await UserDocument.findById(id);
    if (!document) {
      return NextResponse.json(
        { message: "Document not found", success: false },
        { status: 404 }
      );
    }
    await UserDocument.findByIdAndDelete(id);
    return NextResponse.json(
      {
        message: "Document Deleted Successfully",
        success: true,
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
