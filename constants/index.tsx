import moment from "moment";
import React from "react";

export const VERIFY = "VERIFY";
export const RESET_PASSWORD = "RESET_PASSWORD";
export const SIGN_IN_SUCCESS_MESSAGE = "Signed in successfully";
export const USER_DOES_NOT_EXIST = "User does not exist";
export const USER_ALREADY_EXISTS = "User already exists";
export const INVALID_CREDENTIALS = "Invalid Credentials";
export const UNKNOW_ERROR = "Unknown error occurred";

export const masterDocumentTypes = [
  {
    id: "resume",
    title: "Resume",
    uri: "/resume",
  },
  {
    id: "cover-letter",
    title: "Cover Letter",
    uri: "/cover-letter",
  },
  {
    id: "cv",
    title: "CV",
    uri: "/cv",
  },
];

export const navLinks = [
  {
    id: "0",
    title: "Resume",
    url: "/",
    subLinks: [
      {
        id: "0",
        title: "Resume Templates",
        uri: "/resume/all-templates",
      },
      {
        id: "1",
        title: "Resume Examples",
        uri: "/resume/examples",
      },
      {
        id: "2",
        title: "Resume Builder",
        uri: "/",
      },
      {
        id: "3",
        title: "How to Write a Resume",
        uri: "/resume/how-to-write-a-resume",
      },
    ],
  },
  {
    id: "1",
    title: "CV",
    url: "/cv/maker",
    subLinks: [
      {
        id: "0",
        title: "CV Templates",
        uri: "/cv/all-templates",
      },
      {
        id: "1",
        title: "CV Examples",
        uri: "/cv/examples",
      },
      {
        id: "2",
        title: "CV Maker",
        uri: "/cv/maker",
      },
      {
        id: "3",
        title: "How to Write a CV",
        uri: "/cv/how-to-write-a-cv",
      },
    ],
  },
  {
    id: "2",
    title: "Cover Letter",
    url: "/cover-letter/builder",
    subLinks: [
      {
        id: "0",
        title: "Cover Letter Templates",
        uri: "/cover-letter/all-templates",
      },
      {
        id: "1",
        title: "Cover Letter Examples",
        uri: "/cover-letter/examples",
      },
      {
        id: "2",
        title: "Cover Letter Builder",
        uri: "/cover-letter/builder",
      },
      {
        id: "3",
        title: "How to Write a Cover Letter",
        uri: "/cover-letter/how-to-write-a-cover-letter",
      },
    ],
  },
  {
    id: "3",
    title: "Resources",
    url: "/resources",
  },
];

export const footerLinks = [
  {
    id: "0",
    title: "Resume",
    subLinks: [
      {
        id: "0",
        title: "Resume Templates",
        uri: "/resume/all-templates",
      },
      {
        id: "1",
        title: "Resume Examples",
        uri: "/resume/examples",
      },
      {
        id: "2",
        title: "Resume Builder",
        uri: "/",
      },
      {
        id: "3",
        title: "How to Write a Resume",
        uri: "/resume/how-to-write-a-resume",
      },
    ],
  },
  {
    id: "1",
    title: "Cover Letter",
    subLinks: [
      {
        id: "0",
        title: "Cover Letter Templates",
        uri: "/cover-letter/all-templates",
      },
      {
        id: "1",
        title: "Cover Letter Examples",
        uri: "/cover-letter/examples",
      },
      {
        id: "2",
        title: "Cover Letter Builder",
        uri: "/cover-letter/builder",
      },
      {
        id: "3",
        title: "How to Write a Cover Letter",
        uri: "/cover-letter/how-to-write-a-cover-letter",
      },
    ],
  },

  {
    id: "2",
    title: "CV",
    subLinks: [
      {
        id: "0",
        title: "CV Templates",
        uri: "/cv/all-templates",
      },
      {
        id: "1",
        title: "CV Examples",
        uri: "/cv/examples",
      },
      {
        id: "2",
        title: "CV Maker",
        uri: "/cv/maker",
      },
      {
        id: "3",
        title: "How to Write a CV",
        uri: "/cv/how-to-write-a-cv",
      },
    ],
  },
  {
    id: "3",
    title: "Resources",
    subLinks: [
      {
        id: "0",
        title: "Blogs",
        uri: "/blogs",
      },
      {
        id: "1",
        title: "FAQ",
        uri: "/faq",
      },
      {
        id: "2",
        title: "Contact",
        uri: "/contact",
      },
      {
        id: "3",
        title: "About",
        uri: "/about",
      },
    ],
  },
  {
    id: "4",
    title: "Legal",
    subLinks: [
      {
        id: "0",
        title: "Privacy Policy",
        uri: "/privacy-policy",
      },
      {
        id: "1",
        title: "Terms of Service",
        uri: "/terms-of-service",
      },
      {
        id: "2",
        title: "Cookie Policy",
        uri: "/cookie-policy",
      },
    ],
  },
];

export const resumeTemplateTypes = [
  {
    id: "0",
    title: "Professional",
    text: "A professional resume template for all industries.",
    logo: "/assets/images/hero-resume-example.svg",
    uri: "/",
  },
  {
    id: "1",
    title: "Modern",
    text: "A modern resume template for all industries.",
    logo: "/assets/images/hero-resume-example.svg",
    uri: "/",
  },
  {
    id: "2",
    title: "Creative",
    text: "A creative resume template for all industries.",
    logo: "/assets/images/hero-resume-example.svg",
    uri: "/",
  },
];

export type userInfoType = {
  username: string;
  email: string;
  isAdmin: boolean;
  isVerified: boolean;
  userId: string;
};

export type coverLetterType = {
  name: string;
  initials: string;
  email: string;
  phone: string;
  address: string;
  date: string;
  recruiterName?: string;
  recruiterPosition?: string;
  hiringCompanyName?: string;
  hiringCompanyAddress?: string;
  coverLetterOpener?: string;
  coverLetterBody1?: string;
  coverLetterBody2?: string;
  coverLetterCloser?: string;
};

export type GlobalContextType = {
  isUserLoggedIn: boolean;
  user: userInfoType | null;
  setIsUserLoggedIn: (isLoggedIn: boolean) => void;
  setUser: (user: userInfoType) => void;
  selectedTemplateId: string;
  setSelectedTemplateId: (id: string) => void;
  coverLetterData: coverLetterType;
  setCoverLetterData: React.Dispatch<React.SetStateAction<coverLetterType>>;
};

export interface experienceType {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  jobDescription: string;
}

export interface educationType {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  description: string;
}

export type templateType = {
  sampleData: {
    name: string;
    initials: string;
    email: string;
    phone: string;
    address: string;
    date?: string;
    recruiterName?: string;
    recruiterPosition?: string;
    hiringCompanyName?: string;
    hiringCompanyAddress?: string;
    coverLetterOpener?: string;
    coverLetterBody1?: string;
    coverLetterBody2?: string;
    coverLetterCloser?: string;
    experience?: experienceType[];
    education?: educationType[];
    skills?: string[];
    profilePicture?: string;
    summary?: string;
  };
  _id: string;
  name: string;
  description: string;
  type: string;
  subtype: string;
  html: string;
  htmlOption: string;
  dynamicFields: string[];
};

export const initialUserInfo: userInfoType = {
  username: "",
  email: "",
  isAdmin: false,
  isVerified: false,
  userId: "",
};
export interface formDataTypes {
  username?: string;
  email: string;
  password: string;
}

export const initialCoverLetterData: coverLetterType = {
  name: "",
  initials: "",
  email: "",
  phone: "",
  address: "",
  date: `${moment()?.format("Do MMM YYYY")}`,
  recruiterName: "",
  recruiterPosition: "",
  hiringCompanyName: "",
  hiringCompanyAddress: "",
  coverLetterOpener: "",
  coverLetterBody1: "",
  coverLetterBody2: "",
  coverLetterCloser: "",
};

export const initialTemplateData: templateType = {
  sampleData: initialCoverLetterData,
  _id: "",
  name: "",
  description: "",
  type: "",
  subtype: "",
  html: "",
  htmlOption: "",
  dynamicFields: [],
};

export interface documentType {
  _id: string;
  type: string;
  userData: coverLetterType;
  user: string;
  templateId: templateType;
  createdAt: string;
}

export interface exampleType {
  _id: string;
  title: string;
  type: string;
  userData: coverLetterType;
  templateId: templateType;
  createdAt: string;
}

export interface documentsDataType {
  resumes: documentType[];
  coverLetters: documentType[];
  cvs: documentType[];
}

export const initialGlobalContext: GlobalContextType = {
  isUserLoggedIn: false,
  user: initialUserInfo,
  setIsUserLoggedIn: () => {},
  setUser: () => {},
  selectedTemplateId: "",
  setSelectedTemplateId: () => {},
  coverLetterData: initialCoverLetterData,
  setCoverLetterData: () => {},
};

export const initialDocumentsData: documentsDataType = {
  resumes: [],
  coverLetters: [],
  cvs: [],
};
