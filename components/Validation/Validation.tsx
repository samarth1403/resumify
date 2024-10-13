import { coverLetterType } from "@/constants";
import { Validator } from "./Validator";

interface singInPropTypes {
  email: string;
  password: string;
}

interface signUpPropTypes {
  username?: string;
  email: string;
  password: string;
}

export const validateSignIn = (formData: singInPropTypes) => {
  const { email, password } = formData;
  const emailV = new Validator({
    value: email,
    key: "email",
    field: "Email",
  })
    .email()
    .required();
  const passwordV = new Validator({
    value: password,
    key: "password",
    field: "Password",
  }).required();
  return { ...emailV.errors, ...passwordV.errors };
};

export const validateForgotPassword = (formData: { email: string }) => {
  const { email } = formData;
  const emailV = new Validator({
    value: email,
    key: "email",
    field: "Email",
  })
    .email()
    .required();
  return { ...emailV.errors };
};

export const validateResetPassword = (formData: { newPassword: string }) => {
  const { newPassword } = formData;
  const passwordV = new Validator({
    value: newPassword,
    key: "newPassword",
    field: "New Password",
  }).required();
  return { ...passwordV.errors };
};

export const validateSignUp = (formData: signUpPropTypes) => {
  const { email, password, username } = formData;
  const usernameV = new Validator({
    value: username!,
    key: "username",
    field: "Username",
  }).required();
  const emailV = new Validator({
    value: email,
    key: "email",
    field: "Email",
  })
    .email()
    .required();
  const passwordV = new Validator({
    value: password,
    key: "password",
    field: "Password",
  }).required();
  return { ...usernameV.errors, ...emailV.errors, ...passwordV.errors };
};

export const validateReview = (formData: { name: string; star: number }) => {
  const { name, star } = formData;
  const nameV = new Validator({
    value: name!,
    key: "name",
    field: "Name",
  }).required();
  const starV = new Validator({
    value: star,
    key: "star",
    field: "Rating",
  }).numberRequired();
  return { ...nameV.errors, ...starV.errors };
};

export const validateCoverLetterPersonalInfo = (formData: coverLetterType) => {
  const { email, name, phone, address } = formData;
  const usernameV = new Validator({
    value: name,
    key: "name",
    field: "Name",
  }).required();
  const emailV = new Validator({
    value: email,
    key: "email",
    field: "Email",
  })
    .email()
    .required();
  const phoneV = new Validator({
    value: phone,
    key: "phone",
    field: "Phone Number",
  }).required();
  const addressV = new Validator({
    value: address,
    key: "address",
    field: "Address",
  }).required();
  return {
    ...usernameV.errors,
    ...emailV.errors,
    ...phoneV.errors,
    ...addressV.errors,
  };
};
export const validateCoverLetterRecruiterInfo = (formData: coverLetterType) => {
  const { recruiterName, hiringCompanyAddress, hiringCompanyName } = formData;
  const nameV = new Validator({
    value: recruiterName!,
    key: "recruiterName",
    field: "Recruiter Name",
  }).required();
  const companyNameV = new Validator({
    value: hiringCompanyName!,
    key: "hiringCompanyName",
    field: "Hiring Company Name",
  }).required();
  const addressV = new Validator({
    value: hiringCompanyAddress!,
    key: "hiringCompanyAddress",
    field: "Hiring Company Address",
  }).required();
  return {
    ...nameV.errors,
    ...companyNameV.errors,
    ...addressV.errors,
  };
};

export const validateCoverLetterOpener = (formData: coverLetterType) => {
  const { coverLetterOpener } = formData;
  const coverLetterOpenerV = new Validator({
    value: coverLetterOpener!,
    key: "coverLetterOpener",
    field: "Opening Paragraph",
  }).required();
  return {
    ...coverLetterOpenerV.errors,
  };
};

export const validateCoverLetterBody = (formData: coverLetterType) => {
  const { coverLetterBody1 } = formData;
  const coverLetterBody1V = new Validator({
    value: coverLetterBody1!,
    key: "coverLetterBody1",
    field: "Body Paragraph",
  }).required();
  return {
    ...coverLetterBody1V.errors,
  };
};

export const validateCoverLetterCloser = (formData: coverLetterType) => {
  const { coverLetterCloser } = formData;
  const coverLetterCloserV = new Validator({
    value: coverLetterCloser!,
    key: "coverLetterCloser",
    field: "Closer Paragraph",
  }).required();
  return {
    ...coverLetterCloserV.errors,
  };
};

export const validateCoverLetter = (formData: coverLetterType) => {
  let errorTab;
  const headerErrors = validateCoverLetterPersonalInfo(formData);
  if (Object.keys(headerErrors).length > 0) {
    errorTab = "header";
  }
  const recruiterErrors = validateCoverLetterRecruiterInfo(formData);
  if (Object.keys(recruiterErrors).length > 0) {
    errorTab = "recruiter-info";
  }
  const openerErrors = validateCoverLetterOpener(formData);
  if (Object.keys(openerErrors).length > 0) {
    errorTab = "opener";
  }
  const bodyErrors = validateCoverLetterBody(formData);
  if (Object.keys(bodyErrors).length > 0) {
    errorTab = "body";
  }
  const closerErrors = validateCoverLetterCloser(formData);
  if (Object.keys(closerErrors).length > 0) {
    errorTab = "closer";
  }

  const errors = {
    ...validateCoverLetterPersonalInfo(formData),
    ...validateCoverLetterRecruiterInfo(formData),
    ...validateCoverLetterOpener(formData),
    ...validateCoverLetterBody(formData),
    ...validateCoverLetterCloser(formData),
  };
  return { errors, errorTab };
};
