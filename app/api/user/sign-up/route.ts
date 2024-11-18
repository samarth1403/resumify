import User from "@/models/user";
import { dbConnection } from "@/utils/dbConnection";
import { verifyAccountMail } from "@/utils/mailTemplates";
import { sendEmail } from "@/utils/mailer";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

dbConnection();

export const POST = async (request: NextRequest, response: NextResponse) => {
  try {
    const { username, email, password } = await request.json();
    if (!username || !email || !password) {
      throw new Error("All fields are required");
    }
    const exitingUser = await User.findOne({ email });
    if (exitingUser) {
      throw new Error("User already exists");
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    // Creating a token for email verification which we will send to email address and same will be stored in db to verify the user
    const hashedToken = await bcryptjs.hash(savedUser._id.toString(), 10);
    await User.findByIdAndUpdate(savedUser._id, {
      $set: {
        verificationToken: hashedToken,
        verificationTokenExpiry: Date.now() + 3600000,
      },
    });
    // send Verification email
    const verificationMailResponse = await sendEmail({
      email,
      mailhtml: verifyAccountMail(username, `verify-account`, hashedToken),
      subject: "Verify your Account",
    });

    const token: string = jwt.sign(
      { userId: savedUser._id },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" }
    );

    const response = NextResponse.json({
      message: "User registered successfully",
      mailResponse:
        verificationMailResponse !== undefined
          ? "Email Sent to Verify Your Account"
          : "",
      success: true,
    });

    response.cookies.set("resumify-token", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      path: "/",
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
