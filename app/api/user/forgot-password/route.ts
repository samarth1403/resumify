import User from "@/models/user";
import { dbConnection } from "@/utils/dbConnection";
import { toResetPassword } from "@/utils/mailTemplates";
import { sendEmail } from "@/utils/mailer";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

dbConnection();

export const POST = async (request: NextRequest) => {
  try {
    const { email, username } = await request.json();
    const existingUser = await User.findOne({
      $or: [{ email }, { username }],
    });
    if (!existingUser) {
      throw new Error("User not found");
    }
    // Creating a token for email verification which we will send to email address and same will be stored in db to verify the user
    const hashedToken = await bcryptjs.hash(existingUser._id.toString(), 10);
    await User.findByIdAndUpdate(existingUser._id, {
      $set: {
        resetPasswordToken: hashedToken,
        resetPasswordTokenExpiry: Date.now() + 3600000,
      },
    });
    // send Verification email
    const resetPasswordMailResponse = await sendEmail({
      email,
      mailhtml: toResetPassword(
        existingUser.username,
        `reset-password`,
        hashedToken
      ),
      subject: "Reset Your Password",
    });

    return NextResponse.json({
      message: "Email to Reset Password Sent Successfully",
      mailResponse:
        resetPasswordMailResponse !== undefined
          ? "Email Sent to Reset Password"
          : "",
      success: true,
    });
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
