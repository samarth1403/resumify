import nodemailer, { SentMessageInfo } from "nodemailer";

interface sendEmailProps {
  email: string;
  mailhtml: string;
  subject: string;
}

export const sendEmail = async ({
  email,
  mailhtml,
  subject,
}: sendEmailProps): Promise<void> => {
  try {
    // Creating a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      port: 465,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL!,
      to: email,
      subject,
      html: mailhtml,
    };
    const response: SentMessageInfo = await transporter.sendMail(mailOptions);
    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("Error sending email");
      console.log(error.message);
    } else {
      console.log("Unknown error occurred");
    }
  }
};
