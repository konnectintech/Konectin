import { Link } from "react-router-dom";
import { ResumeAnalyticsImage } from "../../assets";
import { CustomButton } from "../button";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const procedures = [
  {
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Frame" clipPath="url(#clip0_6980_36575)">
          <path
            id="Vector"
            d="M21.2578 26.25H8.75781C8.09477 26.25 7.45889 25.9866 6.99005 25.5178C6.5212 25.0489 6.25781 24.413 6.25781 23.75V6.25C6.25781 5.58696 6.5212 4.95107 6.99005 4.48223C7.45889 4.01339 8.09477 3.75 8.75781 3.75H17.5078L23.7578 10V23.75C23.7578 24.413 23.4944 25.0489 23.0256 25.5178C22.5567 25.9866 21.9209 26.25 21.2578 26.25Z"
            stroke="inherit"
            strokeWidth="1.875"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_2"
            d="M17.5 3.75V8.75C17.5 9.08152 17.6317 9.39946 17.8661 9.63388C18.1005 9.8683 18.4185 10 18.75 10H23.75"
            stroke="inherit"
            strokeWidth="1.40625"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_3"
            d="M15 13.75V21.25"
            stroke="inherit"
            strokeWidth="1.875"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_4"
            d="M11.25 17.5L15 13.75L18.75 17.5"
            stroke="inherit"
            strokeWidth="1.875"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_6980_36575">
            <rect width="30" height="30" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    text: "Start by uploading your current resume to our platform. Don't worry if it's not perfect - that's what we're here for! Our system accepts multiple formats for your convenience.",
    heading: "Upload your resume",
  },
  {
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Frame">
          <path
            id="Vector"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.625 2.4707H26.25L28.125 4.3457V14.2832C27.5349 13.9946 26.9015 13.8046 26.25 13.7207V4.3457H16.875V24.7457L14.775 26.8457H5.625L3.75 24.9707V4.3457L5.625 2.4707ZM5.625 24.9707H15V4.3457H5.625V24.9707ZM25.0856 15.5995C24.2993 15.6285 23.5325 15.8528 22.8544 16.252H22.7981C22.2556 16.5794 21.7847 17.0131 21.4138 17.5269C21.0429 18.0408 20.7796 18.6242 20.6397 19.2423C20.4998 19.8604 20.4862 20.5004 20.5996 21.1239C20.7131 21.7474 20.9513 22.3415 21.3 22.8707L16.875 27.277L18.2063 28.6082L22.6125 24.1832C23.2219 24.5957 23.925 24.8545 24.6562 24.9332C25.378 25.0209 26.1103 24.9374 26.7938 24.6895C27.5039 24.4506 28.1467 24.0456 28.6688 23.5082C29.175 22.9785 29.5478 22.3357 29.7563 21.6332C29.9588 20.933 30.0037 20.1966 29.8875 19.477C29.7572 18.7539 29.4607 18.071 29.0215 17.482C28.5822 16.8931 28.0122 16.4142 27.3563 16.0832C26.6511 15.7364 25.8709 15.5701 25.0856 15.5995ZM25.5356 23.0845C24.8893 23.1485 24.2407 22.9868 23.7 22.627C23.2341 22.3124 22.8693 21.8696 22.65 21.352C22.4419 20.8411 22.3897 20.28 22.5 19.7395C22.6059 19.192 22.8732 18.6887 23.2675 18.2944C23.6618 17.9001 24.165 17.6328 24.7125 17.527C25.253 17.4167 25.8141 17.4688 26.325 17.677C26.8425 17.8963 27.285 18.2601 27.6 18.727C27.869 19.1309 28.0288 19.5975 28.0641 20.0815C28.0993 20.5655 28.0087 21.0504 27.8011 21.489C27.5935 21.9276 27.2759 22.3051 26.8793 22.5847C26.4826 22.8642 26.0185 23.0364 25.5356 23.0845Z"
            fill="inherit"
          />
        </g>
      </svg>
    ),
    text: "Once your resume is uploaded, our team of professional resume reviewers will carefully go through it. They will assess its structure, content, and overall impact, focusing on your skills, experiences, and achievements.",
    heading: "Expert review",
  },
  {
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Frame">
          <path
            id="Vector"
            d="M14.8341 18.9822C15.6966 19.3234 16.4841 19.7772 17.1928 20.3416C17.9016 20.9041 18.5072 21.5603 19.0116 22.3028C20.0403 23.801 20.5943 25.5742 20.6016 27.3916V28.2109H18.961V27.3897C18.9645 26.42 18.7748 25.4593 18.403 24.5637C18.0311 23.6681 17.4846 22.8555 16.7953 22.1734C16.1188 21.5065 15.3231 20.9722 14.4497 20.5984C13.542 20.2095 12.5648 20.0086 11.5772 20.0078C10.6075 20.0043 9.64681 20.194 8.75121 20.5658C7.85561 20.9376 7.04305 21.4842 6.36097 22.1734C5.6942 22.8502 5.16 23.6458 4.78597 24.5191C4.39972 25.4078 4.20472 26.3659 4.19534 27.3897V28.2109H2.55472V27.3897C2.54992 25.571 3.10506 23.795 4.14472 22.3028C5.18027 20.8088 6.6343 19.6542 8.32409 18.9841C7.94022 18.7203 7.59065 18.4098 7.28347 18.0597C6.97993 17.7151 6.71754 17.3363 6.50159 16.9309C6.2865 16.526 6.12274 16.0958 6.01409 15.6503C5.9033 15.1965 5.84356 14.7318 5.83597 14.2647C5.83597 13.4716 5.98597 12.7272 6.28597 12.0353C6.87258 10.6645 7.9643 9.57214 9.33472 8.98469C10.0417 8.68372 10.8019 8.52749 11.5703 8.52524C12.3387 8.52299 13.0997 8.67475 13.8085 8.97156C15.1796 9.55862 16.272 10.6511 16.8591 12.0222C17.3446 13.1639 17.4479 14.432 17.1535 15.6372C17.041 16.0816 16.876 16.5091 16.6547 16.9197C16.4349 17.3261 16.1728 17.7082 15.8728 18.0597C15.5728 18.4103 15.226 18.7159 14.8341 18.9822ZM11.5772 18.3672C12.1416 18.3672 12.6722 18.2603 13.1672 18.0484C14.1486 17.6314 14.9298 16.8496 15.346 15.8678C15.5691 15.3634 15.6797 14.8291 15.6797 14.2666C15.6821 13.7296 15.5766 13.1977 15.3695 12.7023C15.1624 12.207 14.8579 11.7583 14.4741 11.3828C14.0944 11.0126 13.6519 10.7129 13.1672 10.4978C12.6671 10.2744 12.125 10.1606 11.5772 10.1641C11.0147 10.1641 10.4841 10.2709 9.98909 10.4828C9.00225 10.9037 8.21625 11.6897 7.79534 12.6766C7.58347 13.1716 7.47659 13.7022 7.47659 14.2666C7.47659 14.8291 7.58347 15.3597 7.79534 15.8547C8.01097 16.3497 8.30159 16.7866 8.66909 17.1616C9.04954 17.546 9.50289 17.8507 10.0026 18.0577C10.5023 18.2647 11.0382 18.3699 11.5791 18.3672H11.5772ZM28.8047 1.96094V15.0859H25.5235L20.6016 20.0078V15.0859H18.961V13.4453H22.2422V16.0478L24.8447 13.4453H27.1641V3.60156H10.7578V6.54906C10.4828 6.58381 10.209 6.62696 9.93659 6.67844C9.65731 6.73146 9.38316 6.80862 9.11722 6.90906V1.96094H28.8047Z"
            fill="inherit"
          />
        </g>
      </svg>
    ),
    text: "Within a few days, you'll receive comprehensive feedback on your resume. This includes detailed suggestions on how to improve its content and layout, increase its appeal to potential employers, and ensure it passes Applicant Tracking Systems (ATS).",
    heading: "Receive personalized feedback",
  },
];

function ReviewSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevIndex) => (prevIndex + 1) % procedures.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex max-md:flex-col gap-24 items-center">
      <div className="flex-1">
        <img src={ResumeAnalyticsImage} alt="Resume Analytics" />
      </div>

      <div className="space-y-6 flex-1">
        {procedures.map((process, id) => (
          <motion.div
            key={process.heading + id}
            className="flex gap-4 items-stretch"
          >
            <motion.div className="space-y-1">
              <motion.div
                initial={{ background: "#D1D1D2", stroke: "#191a1f" }}
                animate={
                  active === id
                    ? {
                        background: "#fee1ce",
                        stroke: "#FC670B",
                        fill: "#FC670B",
                      }
                    : {
                        background: "#D1D1D2",
                        stroke: "#191a1f",
                        fill: "#191a1f",
                      }
                }
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
                className="rounded-full p-2"
              >
                <div className="scale-75">{process.icon}</div>
              </motion.div>
              {id < procedures.length - 1 && (
                <div className="w-[3px] h-4/6 mx-auto rounded bg-neutral-600">
                  <AnimatePresence>
                    {active === id && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "100%" }}
                        transition={{
                          duration: 3,
                          ease: "easeIn",
                        }}
                        className="w-full bg-secondary-500"
                      />
                    )}
                  </AnimatePresence>
                </div>
              )}
            </motion.div>

            <div className="pt-3">
              <h5 className="font-semibold text-lg">{process.heading}</h5>
              <p className="text-sm max-w-[22rem]">{process.text}</p>
            </div>
          </motion.div>
        ))}

        <Link
          to="/services/resume/review"
          className="max-md:mx-auto md:w-72 block"
        >
          <CustomButton primary colorType="primary">
            Get Your Resume Reviewed Now
          </CustomButton>
        </Link>
      </div>
    </div>
  );
}

export default ReviewSection;
