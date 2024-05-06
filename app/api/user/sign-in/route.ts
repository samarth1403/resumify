import {
  INVALID_CREDENTIALS,
  SIGN_IN_SUCCESS_MESSAGE,
  UNKNOW_ERROR,
  USER_DOES_NOT_EXIST,
} from "@/constants";
import User from "@/models/user";
import { dbConnection } from "@/utils/dbConnection";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

dbConnection();

export const POST = async (request: NextRequest) => {
  try {
    const { username, password, email } = await request.json();
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (!existingUser) {
      return NextResponse.json({ error: USER_DOES_NOT_EXIST }, { status: 400 });
    }
    const isPasswordCorrect = await bcryptjs.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return NextResponse.json({ error: INVALID_CREDENTIALS }, { status: 400 });
    }

    const token: string = jwt.sign(
      { userId: existingUser._id },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" }
    );

    const response = NextResponse.json(
      {
        message: SIGN_IN_SUCCESS_MESSAGE,
        success: true,
      },
      { status: 200 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      path: "/",
    });

    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: UNKNOW_ERROR }, { status: 500 });
    }
  }
};
