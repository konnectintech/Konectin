import { useState } from "react";
import { plusBlack, plusWhite, closeBlack, closeWhite } from "../../../assets";

export default function Faq() {
  const data = [
    {
      question: "What is Konectin Inc?",
      answer:
        "Konectin Inc is a revolutionary platform designed to transform the Education Tech and Hiring Tech sectors in Africa. We offer a suite of solutions including an AI-powered Resume Builder, Professionalism Blog, Internship Program, and a Job Search Platform. Our mission is to empower job seekers and students, providing them with the tools they need to succeed.",
    },
    {
      question: "How does the Resume Builder work?",
      answer: `Sign Up/Log In: Create or log in to your account.
      1. Select a Template: Select from our well-designed templates. 
      2. Input Details: Fill in personal, educational, work, and skills information. 
      3. AI Assistance: Our AI helps you craft an ATS-friendly resume. 
      4. Download: Save your resume in PDF or Word format and apply for jobs. You can create multiple tailored resumes on your profile`,
    },
    {
      question: "What is the Konectin Internship Program?",
      answer: `The Konectin Internship Program connects job seekers, especially students and recent graduates, with internship opportunities in various industries. We partner with companies to match candidates based on their skills and career goals, providing them with valuable work experience and a chance to develop professional skills.`,
    },
    {
      question: "How can I access the Professionalism Blog? ",
      answer: `To access the Professionalism Blog, follow these steps: 
      1. Visit the Konectin website. 
      2. Navigate to the top menu bar. 
      3. Click on the "Professionalism Blog" option. 
      4. You will be redirected to the blog page where you explore various articles and resources. 
      Remember, you can use the search bar on the blog page to find specific topics or articles. Enjoy reading! `,
    },
    {
      question: "How much does it cost to use Konectin Inc. services?",
      answer:
        "At Konectin, we operate on a freemium model. Users can access basic features such as the Resume Builder and Professionalism Blog for free. However, for premium features like the Resume Review service and unlimited access to the ATS Scanner, users would need to subscribe to a paid plan. We are committed to providing affordable and valuable services to our users.",
    },
    {
      question:
        "How can I contact Konectin Inc for more information or support?",
      answer: `For more information or support, contact Konectin via the following channels: 
      1. Email: You can send an email to our support team at support@konectin.org. Our team typically responds within 24 hours. 
      2. Contact Form: You can also fill out the contact form on our website. Simply navigate to the "Contact Us" page, fill in your details and your message, and click "Submit". 
      3. Social Media: You can reach out to us via our social media platforms. We are active on X.com, Instagram, LinkedIn, and Facebook. 
      We are always here to help and look forward to assisting you`,
    },
  ];
  return (
    <div className="flex flex-col md:flex-row md:justify-between bg-primary-600 px-6 py-16 md:px-20 md:py-28 gap-10">
      <div className="flex flex-col gap-5 text-white md:w-5/12">
        <div className="flex flex-col gap-2">
          <p className="font-extrabold md:font-bold text-3xl md:text-5xl">
            Frequently Asked Questions
          </p>
          <p className="text-sm md:text-lg">
            Still you have any questions? Contact our Team via
            support@konectin.org
          </p>
        </div>
        <button className="bg-secondary-600 px-5 py-3.5 md:py-4 md:px-6 rounded-md md:rounded-lg w-fit font-medium text-center md:text-lg">
          See All FAQ's
        </button>
      </div>
      <div className="flex flex-col gap-5 md:gap-8 md:w-7/12">
        {data.map((item, index) => (
          <FaqCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export function FaqCard({ item, index }) {
  const [active, setActive] = useState(null | index);

  return (
    <div
      key={index}
      className="flex flex-col gap-5 p-6 bg-whites-200 md:bg-inherit md:text-white rounded-xl border border-solid border-whites-200 md:border-neutral-500"
    >
      <div className="flex items-center justify-between gap-7">
        <p
          className="font-bold w-fit md:cursor-pointer"
          onClick={() => setActive(active === index ? null : index)}
        >
          {item.question}
        </p>
        <p
          className="flex items-center justify-center bg-neutral-800 w-10 h-10 p-2.5 rounded-md md:hidden"
          onClick={() => setActive(active === index ? null : index)}
        >
          <img
            src={active === index ? closeBlack : plusBlack}
            width={20}
            height={20}
            style={{
              minWidth: "20px",
              minHeight: "20px",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
            alt=""
          />
        </p>
        <p
          className="hidden md:flex items-center justify-center w-6 h-6 rounded-md border-2 border-solid cursor-pointer"
          onClick={() => setActive(active === index ? null : index)}
        >
          <img
            src={active === index ? closeWhite : plusWhite}
            style={{
              minWidth: "20px",
              minHeight: "20px",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
            alt=""
          />
        </p>
      </div>
      {active === index && (
        <div
          className={`${
            active === index
              ? "text-sm md:text-base my-2 text-grey md:text-neutral-700"
              : "hidden"
          }`}
        >
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
}
