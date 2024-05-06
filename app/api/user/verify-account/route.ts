import User from "@/models/user";
import { dbConnection } from "@/utils/dbConnection";
import { accountVerifiedSuccessfully } from "@/utils/mailTemplates";
import { sendEmail } from "@/utils/mailer";
import { NextRequest, NextResponse } from "next/server";

dbConnection();

export const POST = async (request: NextRequest) => {
  try {
    const { token } = await request.json();
    if (!token) {
      return NextResponse.json(
        { error: "Invalid or Expired Token" },
        { status: 500 }
      );
    }
    const user = await User.findOne({
      verificationToken: token,
      verificationTokenExpiry: { $gt: Date.now() },
    });
    if (!user) {
      return NextResponse.json(
        { error: "Invalid or Expired Token" },
        { status: 500 }
      );
    }
    await User.findByIdAndUpdate(user._id, {
      $set: {
        isVerified: true,
        verificationToken: undefined,
        verificationTokenExpiry: undefined,
      },
    });
    // send Verification email
    const verificationMailResponse = await sendEmail({
      email: user.email,
      mailhtml: accountVerifiedSuccessfully(user.username),
      subject: "Account Verified Successfully",
    });
    return NextResponse.json({
      message: "Account Verified Successfully",
      mailResponse:
        verificationMailResponse !== undefined
          ? "Email Sent to Verify Your Account"
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
