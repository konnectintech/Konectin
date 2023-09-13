import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as FaIcons from "react-icons/fa";

export const linkHead = [
  {
    name: "About Konectin Inc",
    icon: <AiIcons.AiOutlineUser />,
  },
  {
    name: "Products and Services",
    icon: <AiIcons.AiOutlineCodeSandbox />,
  },
  {
    name: "Target Audience",
    icon: <GiIcons.GiHumanTarget />,
  },
  {
    name: "Work Culture",
    icon: <FaIcons.FaHandHoldingHeart />,
  },
  {
    name: "Community & Social",
    icon: <FaIcons.FaPeopleCarry />,
  },
];

export const FAQ = [
  [
    {
      question: "What exactly is Konectin Inc?",
      head: "Konectin Inc",
      answer:
        "Konectin Inc is a Nigerian start-up, incorporated in Delaware, USA, with a mission to revolutionize Education Tech and Hiring Tech in Africa. We aim to address the unique challenges in the education and job market sectors in the region.",
      link: "/about#team",
    },
    {
      question: "What challenges is Konectin Inc aiming to address?",
      head: "Mission & Vision",
      answer:
        "Konectin Inc is focused on solving problems faced by African job seekers and undergraduate students. These include issues like poorly crafted resumes, lack of information, limited access to professional networks, insufficient work experience, and high costs of Western software and platforms.",
      link: "/about#vision",
    },
    {
      question:
        "What is the nature of Konectin Inc's partnership with Microsoft?",
      head: "Partnership",
      answer:
        "Konectin Inc has a valuable partnership with Microsoft for Startup Hub. This partnership provides us with access to crucial resources and support through Azure cloud services, enabling us to build a scalable and secure platform.",
    },
    {
      question: "What are the core values that guide Konectin Inc?",
      head: "Core Values",
      answer:
        "Our team operates under the core values of Respect, Communication, Responsibility, Teamwork, Innovation, and Care.",
      link: "/about#values",
    },
  ],

  // Product and services
  [
    {
      question: "ATS Standard Resume Builder with AI",
      head: "AI Resume Builder",
      answer:
        "A cutting-edge tool that uses artificial intelligence to help job seekers create compelling and professional resumes that meet Applicant Tracking System (ATS) standards.",
      link: "/resume",
    },
    {
      question: "Resume Review and Edit",
      head: "Professional Resume Review and Edit Services",
      answer:
        "A service where our expert team offers personalized resume review and editing, ensuring job seekers present themselves in the best possible light.",
      link: "/resume#start",
    },
    {
      question: "Professionalism Blog",
      head: "Konectin Community Blog",
      answer:
        "An upcoming blog that will provide valuable information and tips to enhance candidates' professionalism and job readiness.",
      coming: true,
    },
    {
      question: "Job Search Platform",
      head: "Job Search",
      answer:
        "A platform in development that will efficiently connect recruiters and job seekers, providing a seamless hiring experience.",
      coming: true,
    },
  ],
  [
    {
      question: "Who are the primary users of Konectin Inc's services?",
      head: "Target Users",
      answer:
        "Our primary users are African job seekers, undergraduate students and business owners. We also serve businesses, organizations, and employers looking for talented and motivated students who can align their work experiences with their academic schedules and career goals.",
    },
  ],
  [
    {
      question: "What kind of work culture does Konectin Inc promote?",
      head: "Work Culture",
      answer:
        "Konectin Inc operates remotely and uses Agile methodologies. We have a weekly sprint lap, with sprint reviews conducted every Sunday from 7pm-8pm. Our work culture also includes a Kudos Friday, where we appreciate our employees.",
    },
  ],
  [
    {
      question: "How can I become a part of the Konectin Inc community?",
      head: "Be a part of our emerging communities",
      answer:
        "You can join our community on WhatsApp and Discord. We are also active on various social media platforms including X.com (formerly Twitter), Instagram, LinkedIn, and Facebook.",
    },
    {
      question: "How can I reach out to Konectin Inc?",
      head: "Be a part of our emerging communities",
      answer: (
        <>
          You can connect with us through our website{" "}
          <a href="https://konectin.org" className="text-secondary-600">
            https://konectin.org
          </a>{" "}
          or via our social media channels.
        </>
      ),
    },
  ],
];
