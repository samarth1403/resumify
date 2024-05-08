import { GlobalContextType, userInfoType } from "@/next-env";

export const VERIFY = "VERIFY";
export const RESET_PASSWORD = "RESET_PASSWORD";
export const SIGN_IN_SUCCESS_MESSAGE = "Signed in successfully";
export const USER_DOES_NOT_EXIST = "User does not exist";
export const USER_ALREADY_EXISTS = "User already exists";
export const INVALID_CREDENTIALS = "Invalid Credentials";
export const UNKNOW_ERROR = "Unknown error occurred";

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

export const initialUserInfo: userInfoType = {
  username: "",
  email: "",
  isAdmin: false,
  isVerified: false,
};

export const initialGlobalContext: GlobalContextType = {
  isUserLoggedIn: false,
  isLoading: true,
  user: initialUserInfo,
  setIsUserLoggedIn: () => {},
  setUser: () => {},
};
