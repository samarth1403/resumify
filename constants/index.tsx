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
      // {
      //   id: "1",
      //   title: "Resume Examples",
      //   uri: "/resume/examples",
      // },
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
  // {
  //   id: "1",
  //   title: "CV",
  //   url: "/cv/maker",
  //   subLinks: [
  //     {
  //       id: "0",
  //       title: "CV Templates",
  //       uri: "/cv/all-templates",
  //     },
  //     {
  //       id: "1",
  //       title: "CV Examples",
  //       uri: "/cv/examples",
  //     },
  //     {
  //       id: "2",
  //       title: "CV Maker",
  //       uri: "/cv/maker",
  //     },
  //     {
  //       id: "3",
  //       title: "How to Write a CV",
  //       uri: "/cv/how-to-write-a-cv",
  //     },
  //   ],
  // },
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
      // {
      //   id: "1",
      //   title: "Cover Letter Examples",
      //   uri: "/cover-letter/examples",
      // },
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

export const mobileNavLinks = [
  {
    id: "0",
    title: "Resume Builder",
    uri: "/",
  },
  {
    id: "1",
    title: "Resume Templates",
    uri: "/resume/all-templates",
  },
  {
    id: "2",
    title: "Cover Letter",
    url: "/cover-letter/builder",
  },
  {
    id: "3",
    title: "Cover Letter Templates",
    uri: "/cover-letter/all-templates",
  },
  {
    id: "4",
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
        id: "2",
        title: "Resume Builder",
        uri: "/",
      },
      {
        id: "0",
        title: "Resume Templates",
        uri: "/resume/all-templates",
      },
      // {
      //   id: "1",
      //   title: "Resume Examples",
      //   uri: "/resume/examples",
      // },

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
        id: "2",
        title: "Cover Letter Builder",
        uri: "/cover-letter/builder",
      },
      {
        id: "0",
        title: "Cover Letter Templates",
        uri: "/cover-letter/all-templates",
      },
      {
        id: "3",
        title: "How to Write a Cover Letter",
        uri: "/cover-letter/how-to-write-a-cover-letter",
      },
    ],
  },

  // {
  //   id: "2",
  //   title: "CV",
  //   subLinks: [
  //     {
  //       id: "0",
  //       title: "CV Templates",
  //       uri: "/cv/all-templates",
  //     },
  //     {
  //       id: "1",
  //       title: "CV Examples",
  //       uri: "/cv/examples",
  //     },
  //     {
  //       id: "2",
  //       title: "CV Maker",
  //       uri: "/cv/maker",
  //     },
  //     {
  //       id: "3",
  //       title: "How to Write a CV",
  //       uri: "/cv/how-to-write-a-cv",
  //     },
  //   ],
  // },
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
    text: "A professional resume templates for all industries.",
    logo: "/assets/images/professional-resume-example.svg",
    uri: "/resume/all-templates",
  },
  {
    id: "1",
    title: "Simple",
    text: "A simple resume templates for all industries.",
    logo: "/assets/images/simple-resume-example.svg",
    uri: "/resume/all-templates",
  },
  {
    id: "2",
    title: "Creative",
    text: "A creative resume templates for all industries.",
    logo: "/assets/images/creative-resume-example.svg",
    uri: "/resume/all-templates",
  },
];

export type userInfoType = {
  username: string;
  email: string;
  isAdmin: boolean;
  isVerified: boolean;
  userId: string;
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

export interface profileType {
  profile: string;
  link: string;
}

export interface projectType {
  title: string;
  description: string;
  tags: string;
  link: string;
}

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

export type resumeType = {
  name: string;
  initials: string;
  email: string;
  phone: string;
  address: string;
  date?: string;
  experience?: experienceType[];
  education?: educationType[];
  skills?: string[];
  profiles?: profileType[];
  projects?: projectType[];
  profilePicture?: string;
  summary?: string;
  color?: string;
};

export type dataType = {
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
  experience?: experienceType[];
  education?: educationType[];
  skills?: string[];
  profiles?: profileType[];
  projects?: projectType[];
  profilePicture?: string;
  summary?: string;
  color?: string;
};

export type GlobalContextType = {
  isUserLoggedIn: boolean;
  user: userInfoType | null;
  setIsUserLoggedIn: (isLoggedIn: boolean) => void;
  setUser: (user: userInfoType) => void;
  selectedTemplateId: string;
  setSelectedTemplateId: (id: string) => void;
  data: dataType;
  setData: React.Dispatch<React.SetStateAction<dataType>>;
};

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
    profiles?: profileType[];
    projects?: projectType[];
    profilePicture?: string;
    summary?: string;
    color?: string;
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

export const initialResumeData: resumeType = {
  name: "",
  initials: "",
  email: "",
  phone: "",
  address: "",
  date: "",
  experience: [],
  education: [],
  skills: [],
  profiles: [],
  projects: [],
  profilePicture: "",
  summary: "",
  color: "",
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

export const initialData: dataType = {
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
  experience: [],
  education: [],
  skills: [],
  profiles: [],
  projects: [],
  profilePicture: "",
  summary: "",
  color: "",
};

export interface documentType {
  _id: string;
  type: string;
  userData: coverLetterType;
  user: string;
  templateId: string;
  template: templateType;
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
  data: initialData,
  setData: () => {},
};

export const initialDocumentsData: documentsDataType = {
  resumes: [],
  coverLetters: [],
  cvs: [],
};

export interface BlogType {
  title: string;
  content: string;
  author: string;
  tags?: string[]; // Optional field
  views?: number; // Optional field, defaults to 0
  published?: boolean; // Optional field, defaults to false
  createdAt: Date;
  updatedAt: Date;
  image?: string; // Optional field
  id?: string; // Optional field
  type?: string; // Optional field
}

export const AllBlogs: BlogType[] = [
  {
    title: "How to Write a Resume: A Step-by-Step Guide",
    content: `
        <p style="margin-top:1rem; margin-bottom: 1rem" >Writing a resume can be intimidating, but with the right approach, you can create a professional document that highlights your skills and experiences effectively. Here’s a step-by-step guide on how to write a resume:</p>
        
        <h3 style="font-size: 1.2rem; font-weight: bold; margin-top:1rem; margin-bottom: 1rem" >1. Choose the Right Format</h3>
        <ul style="display: flex; flex-direction: column; gap: 0.8rem" >
          <li><strong>Chronological:</strong> Lists work history in reverse order. Great for consistent career growth.</li>
          <li><strong>Functional:</strong> Focuses on skills rather than specific job roles. Ideal for career changers or those with gaps in employment.</li>
          <li><strong>Combination:</strong> Blends both chronological and functional formats.</li>
        </ul>

        <h3 style="font-size: 1.2rem; font-weight: bold; margin-top:1rem; margin-bottom: 1rem">2. Include Contact Information</h3>
        <p>Your resume should have your name, phone number, email address, and LinkedIn profile or portfolio link at the top.</p>

        <h3 style="font-size: 1.2rem; font-weight: bold; margin-top:1rem; margin-bottom: 1rem">3. Write a Strong Summary or Objective</h3>
        <p>A resume summary is a brief overview of your professional background. It should highlight your experience and key skills. If you’re just starting out, consider writing a resume objective to describe your career goals.</p>

        <h3 style="font-size: 1.2rem; font-weight: bold; margin-top:1rem; margin-bottom: 1rem">4. List Your Work Experience</h3>
        <p style=" margin-top:1rem; margin-bottom: 1rem" >Start with your most recent job and work backward. Include:</p>
        <ul style="display: flex; flex-direction: column; gap: 0.8rem">
          <li>Job title</li>
          <li>Company name</li>
          <li>Dates of employment</li>
          <li>Key responsibilities and accomplishments (use bullet points)</li>
        </ul>

        <h3 style="font-size: 1.2rem; font-weight: bold; margin-top:1rem; margin-bottom: 1rem">5. Highlight Your Education</h3>
        <p>List your degrees, starting with the most recent. Include the institution name, your degree, and graduation date.</p>

        <h3 style="font-size: 1.2rem; font-weight: bold; margin-top:1rem; margin-bottom: 1rem">6. Showcase Your Skills</h3>
        <p>Include both hard and soft skills relevant to the job you're applying for. Examples:</p>
        <ul style="display: flex; flex-direction: column; gap: 0.8rem">
          <li>Technical skills (e.g., coding, data analysis)</li>
          <li>Soft skills (e.g., communication, leadership)</li>
        </ul>

        <h3 style="font-size: 1.2rem; font-weight: bold; margin-top:1rem; margin-bottom: 1rem">7. Add Certifications and Awards</h3>
        <p>If applicable, add any professional certifications or awards that can strengthen your candidacy.</p>

        <h3 style="font-size: 1.2rem; font-weight: bold; margin-top:1rem; margin-bottom: 1rem">8. Customize for Each Job</h3>
         <ul style="display: flex; flex-direction: column; gap: 0.8rem">
        <li>Tailor your resume to match the job description. Focus on relevant keywords, skills, and experiences.</li>

        <li>Remember to keep your resume concise, ideally one page if you have under 10 years of experience. Proofread it carefully to avoid any typos or errors.</li>
        </ul>
        `,
    author: "Admin",
    createdAt: new Date(),
    updatedAt: new Date(),
    image: "/assets/images/how-to-write-resume.jpg",
    id: "1",
    type: "resume",
  },
  {
    title: "How to Write a Cover Letter: The Complete Guide",
    content: `
      <p style="margin-top:1rem; margin-bottom: 1rem">A cover letter is an essential part of your job application that complements your resume. It allows you to introduce yourself, explain why you’re interested in the position, and highlight how your skills align with the job. Here's how to write a cover letter step-by-step:</p>

    <h3 style="font-size: 1.2rem; font-weight: bold; margin-top:1rem; margin-bottom: 1rem">1. Address the Letter Properly</h3>
    <p style="margin-top:1rem; margin-bottom: 1rem">Begin your cover letter with a proper greeting. Address it directly to the hiring manager if you know their name. If not, use “Dear Hiring Manager” or “Dear [Company Name] Team.”</p>

    <h3 style="font-size: 1.2rem; font-weight: bold; margin-top:1rem; margin-bottom: 1rem">2. Start with a Strong Opening</h3>
    <p style="margin-top:1rem; margin-bottom: 1rem">In the first paragraph, introduce yourself and explain why you're interested in the position. Mention where you found the job listing and, if possible, name a mutual connection or referral.</p>

    <h3 style="font-size: 1.2rem; font-weight: bold; margin-top:1rem; margin-bottom: 1rem">3. Highlight Your Relevant Experience</h3>
    <p style="margin-top:1rem; margin-bottom: 1rem">In the second paragraph, focus on your key qualifications and how they match the job description. Provide specific examples of accomplishments from previous roles.</p>

    <h3 style="font-size: 1.2rem; font-weight: bold; margin-top:1rem; margin-bottom: 1rem">4. Showcase Your Enthusiasm for the Role</h3>
    <p style="margin-top:1rem; margin-bottom: 1rem">In the third paragraph, explain why you’re excited about this specific opportunity. Show that you've researched the company and align your interests with its mission or goals.</p>

    <h3 style="font-size: 1.2rem; font-weight: bold; margin-top:1rem; margin-bottom: 1rem">5. Close with a Call to Action</h3>
    <p style="margin-top:1rem; margin-bottom: 1rem">End your letter by reiterating your interest in the role and inviting the employer to contact you for an interview.</p>

    <h3 style="font-size: 1.2rem; font-weight: bold; margin-top:1rem; margin-bottom: 1rem">6. Keep it Concise and Professional</h3>
    <p style="margin-top:1rem; margin-bottom: 1rem">Your cover letter should be no longer than one page. Be concise, professional, and proofread carefully for any errors.</p>
  `,
    author: "Admin",
    createdAt: new Date(),
    updatedAt: new Date(),
    image: "/assets/images/how-to-write-cover-letter.jpg",
    id: "2",
    type: "cover-letter",
  },
  {
    title: "Why a Cover Letter is Important",
    content: `
    <p style="margin-top:1rem; margin-bottom: 1rem">When applying for a job, many candidates focus solely on crafting the perfect resume and often overlook the cover letter. However, a well-written cover letter is just as important for making a strong first impression. Here’s why:</p>

    <h3 style="font-size: 1.2rem; font-weight: bold; margin-top:1rem; margin-bottom: 1rem">1. Personalizes Your Application</h3>
    <p style="margin-top:1rem; margin-bottom: 1rem">A cover letter allows you to personalize your application by addressing the hiring manager directly and expressing your specific interest in the role and company.</p>

    <h3 style="font-size: 1.2rem; font-weight: bold; margin-top:1rem; margin-bottom: 1rem">2. Highlights Relevant Skills and Experiences</h3>
    <p style="margin-top:1rem; margin-bottom: 1rem">While your resume lists qualifications, the cover letter lets you elaborate on key accomplishments that align with the job requirements.</p>

    <h3 style="font-size: 1.2rem; font-weight: bold; margin-top:1rem; margin-bottom: 1rem">3. Demonstrates Your Communication Skills</h3>
    <p style="margin-top:1rem; margin-bottom: 1rem">The way you write and organize your cover letter says a lot about your communication skills. Employers value candidates who can clearly and effectively convey their thoughts in writing.</p>

    <h3 style="font-size: 1.2rem; font-weight: bold; margin-top:1rem; margin-bottom: 1rem">4. Shows Enthusiasm for the Role</h3>
    <p style="margin-top:1rem; margin-bottom: 1rem">A cover letter allows you to demonstrate your passion and enthusiasm for the job. You can explain what excites you about the position and how you align with the company’s values and goals.</p>

    <h3 style="font-size: 1.2rem; font-weight: bold; margin-top:1rem; margin-bottom: 1rem">5. Gives You a Competitive Edge</h3>
    <p style="margin-top:1rem; margin-bottom: 1rem">Not all candidates submit a cover letter with their application, so taking the time to write a thoughtful letter can give you a competitive edge. It shows that you’re willing to go the extra mile.</p>
   `,
    author: "Admin",
    createdAt: new Date(),
    updatedAt: new Date(),
    image: "/assets/images/why-cover-letter-important.jpg",
    id: "3",
    type: "cover-letter",
  },
];

export type ReviewType = {
  name: string;
  rating: number;
  comment: string;
};
