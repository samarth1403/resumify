import User from "@/models/user";
import { dbConnection } from "@/utils/dbConnection";
import { passwordResetSuccessfully } from "@/utils/mailTemplates";
import { sendEmail } from "@/utils/mailer";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

dbConnection();

export const POST = async (request: NextRequest) => {
  try {
    const { newPassword, token } = await request.json();
    if (!token) {
      return NextResponse.json(
        { error: "Invalid or Expired Token" },
        { status: 400 }
      );
    }
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordTokenExpiry: { $gt: Date.now() },
    });
    if (!user) {
      return NextResponse.json(
        { error: "Invalid or Expired Token" },
        { status: 400 }
      );
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedNewPassword = await bcryptjs.hash(newPassword, salt);

    await User.findByIdAndUpdate(user._id, {
      $set: {
        password: hashedNewPassword,
        resetPasswordToken: undefined,
        resetPasswordTokenExpiry: undefined,
      },
    });

    const resetPasswordMailResponse = await sendEmail({
      email: user.email,
      mailhtml: passwordResetSuccessfully(user.username),
      subject: "Password Reset Successfully",
    });

    return NextResponse.json(
      {
        message: "Password Reset Successfully",
        mailResponse:
          resetPasswordMailResponse !== undefined
            ? "Email of Password Reset Successfully Sent"
            : "",
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
