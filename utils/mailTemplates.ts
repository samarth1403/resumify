export const verifyAccountMail = (
  username: string,
  urlPath: string,
  token: string
) => {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>Welcome, ${username}!</h2>
      <p>Thank you for signing up. To verify your account, please click the link below:</p>
      <a href="${process.env.FRONTEND_URL}/${urlPath}?token=${token}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none;">Verify Account</a>
      <p>If you did not sign up for an account, you can ignore this email.</p>
    </div>
  `;
  return html;
};

export const accountVerifiedSuccessfully = (username: string) => {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <p>Dear ${username},</p>
      <p>Your account has been verified successfully.</p>
      <p>Thank you for using our service.</p>
      <p>Best regards,<br/>Your Application Team</p>
    </div>
  `;
  return html;
};

export const toResetPassword = (
  username: string,
  urlPath: string,
  token: string
) => {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>Hello ${username},</h2>
      <p>Please click the link below to reset your password:</p>
      <a href="${process.env.FRONTEND_URL}/${urlPath}?token=${token}">Reset Password</a>
    </div>
  `;
  return html;
};

export const passwordResetSuccessfully = (username: string) => {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>Hello ${username},</h2>
      <p>Your password has been successfully reset. You can now log in with your new password.</p>
    </div>
  `;
  return html;
};
