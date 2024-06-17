import { Link } from "react-router-dom";
import "./review.css";
import { processHero } from "../../../../../assets";
import { TbFileUpload } from "react-icons/tb";
import { VscOpenPreview } from "react-icons/vsc";
import { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function Process() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });

  useEffect(() => {
    const activeColors = {
      borderLeftColor: "#FC670B",
      iconBgColor: "#FEE1CE",
      iconColor: "#FC670B",
    };

    const inactiveColors = {
      borderLeftColor: "#D1D1D2",
      iconBgColor: "#D1D1D2",
      iconColor: "#000000",
    };

    if (inView1) {
      controls1.start(activeColors);
    } else {
      controls1.start(inactiveColors);
    }
    if (inView2) {
      controls2.start(activeColors);
    } else {
      controls2.start(inactiveColors);
    }
    if (inView3) {
      controls3.start(activeColors);
    } else {
      controls3.start(inactiveColors);
    }
  }, [controls1, controls2, controls3, inView1, inView2, inView3]);

  const variant = {
    initial: {
      borderLeftColor: "#D1D1D2",
      iconBgColor: "#000000",
      iconColor: "#FFFFFF",
    },

    animate: (custom) => ({
      borderLeftColor: custom.borderLeftColor,
      iconBgColor: custom.iconBgColor,
      iconColor: custom.iconColor,
    }),
  };

  return (
    <section className="bg-process w-full mx-auto max-w-screen-2xl flex flex-col gap-12 md:gap-28 py-28 px-2 xxs:px-4 lg:px-16">
      <div className="flex flex-col gap-4">
        <p className="font-bold text-xl sm:hidden">How It Works</p>
        <p className="font-bold text-3xl sm:text-4xl w-4/5 md:w-1/2">
          Gain a Competitive Edge with{" "}
          <span className="text-secondary-600">
            Powerful AI and ATS Analytics
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-12 md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2">
          <img src={processHero} alt="How It Works" />
        </div>

        <div className="w-10/12 md:w-5/12 flex flex-col gap-16">
          <div>
            <motion.div
              ref={ref1}
              className="relative pb-8"
              variants={variant}
              initial="initial"
              animate={controls1}
              custom={{
                borderLeftColor: "#FC670B",
                iconBgColor: "#FEE1CE",
                iconColor: "#FC670B",
              }}
            >
              <motion.div
                className="absolute w-0.5 h-24 left-0 top-14"
                style={{ backgroundColor: "#FC670B" }}
              ></motion.div>

              <div class="ms-16 w-5/6">
                <motion.span
                  className="absolute flex items-center justify-center w-12 h-12 rounded-full -start-6"
                  style={{ backgroundColor: "#FEE1CE" }}
                >
                  <TbFileUpload
                    className="w-7 h-7 stroke-[1.5px]"
                    style={{ color: "#FC670B" }}
                  />
                </motion.span>
                <p class="flex items-center mb-1 text-2xl font-semibold text-black">
                  Upload your resume
                </p>
                <p class="text-base font-normal text-neutral-300">
                  Upload your latest resume on our platform to kickstart your
                  journey. Even if it's not perfect, don't fret - that's exactly
                  what we're here for. Our system accepts multiple formats for
                  your convenience.
                </p>
              </div>
            </motion.div>

            <motion.div
              ref={ref2}
              className="relative pb-8"
              variants={variant}
              initial="initial"
              animate={controls2}
              custom={{
                borderLeftColor: "#FC670B",
                iconBgColor: "#FEE1CE",
                iconColor: "#FC670B",
              }}
            >
              <motion.div
                className="absolute w-0.5 h-24 left-0 top-14"
                style={{ backgroundColor: "#FC670B" }}
              ></motion.div>

              <div class="ms-16 w-5/6">
                <motion.span
                  class="absolute flex items-center justify-center w-12 h-12 rounded-full -start-6 "
                  style={{ backgroundColor: "#FEE1CE" }}
                >
                  <VscOpenPreview
                    className="w-7 h-7"
                    style={{ color: "#FC670B" }}
                  />
                </motion.span>
                <p class="flex items-center mb-1 text-2xl font-semibold text-black">
                  Expert review
                </p>

                <p class="text-base font-normal text-neutral-300">
                  Our resume review service takes a closer look at your resume
                  once it is upload. It scrutinizes the layout, content, and
                  overall relevance, focusing on your skills, achievements, and
                  experiences.
                </p>
              </div>
            </motion.div>

            <motion.div
              ref={ref3}
              className="relative"
              variants={variant}
              initial="initial"
              animate={controls3}
              custom={{
                borderLeftColor: "#FC670B",
                iconBgColor: "#FEE1CE",
                iconColor: "#FC670B",
              }}
            >
              <div class="ms-16 w-5/6">
                <motion.span
                  class="absolute flex items-center justify-center w-12 h-12 rounded-full -start-6 "
                  style={{ backgroundColor: "#FEE1CE" }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Frame">
                      <path
                        id="Vector"
                        d="M14.8341 18.9812C15.6966 19.3225 16.4841 19.7762 17.1928 20.3406C17.9016 20.9031 18.5072 21.5593 19.0116 22.3018C20.0403 23.8001 20.5943 25.5732 20.6016 27.3906V28.21H18.961V27.3887C18.9645 26.419 18.7748 25.4583 18.403 24.5627C18.0311 23.6671 17.4846 22.8545 16.7953 22.1725C16.1188 21.5055 15.3231 20.9713 14.4497 20.5975C13.542 20.2085 12.5648 20.0076 11.5772 20.0068C10.6075 20.0033 9.64681 20.193 8.75121 20.5648C7.85561 20.9367 7.04305 21.4832 6.36097 22.1725C5.6942 22.8492 5.16 23.6448 4.78597 24.5181C4.39972 25.4068 4.20472 26.365 4.19534 27.3887V28.21H2.55472V27.3887C2.54992 25.5701 3.10506 23.794 4.14472 22.3018C5.18027 20.8078 6.6343 19.6532 8.32409 18.9831C7.94022 18.7193 7.59065 18.4088 7.28347 18.0587C6.97993 17.7141 6.71754 17.3353 6.50159 16.93C6.2865 16.525 6.12274 16.0948 6.01409 15.6493C5.9033 15.1955 5.84356 14.7308 5.83597 14.2637C5.83597 13.4706 5.98597 12.7262 6.28597 12.0343C6.87258 10.6636 7.9643 9.57116 9.33472 8.98371C10.0417 8.68274 10.8019 8.52652 11.5703 8.52426C12.3387 8.52201 13.0997 8.67377 13.8085 8.97059C15.1796 9.55764 16.272 10.6501 16.8591 12.0212C17.3446 13.1629 17.4479 14.431 17.1535 15.6362C17.041 16.0806 16.876 16.5081 16.6547 16.9187C16.4349 17.3251 16.1728 17.7072 15.8728 18.0587C15.5728 18.4093 15.226 18.715 14.8341 18.9812ZM11.5772 18.3662C12.1416 18.3662 12.6722 18.2593 13.1672 18.0475C14.1486 17.6304 14.9298 16.8486 15.346 15.8668C15.5691 15.3625 15.6797 14.8281 15.6797 14.2656C15.6821 13.7287 15.5766 13.1967 15.3695 12.7014C15.1624 12.206 14.8579 11.7573 14.4741 11.3818C14.0944 11.0116 13.6519 10.7119 13.1672 10.4968C12.6671 10.2735 12.125 10.1597 11.5772 10.1631C11.0147 10.1631 10.4841 10.27 9.98909 10.4818C9.00225 10.9027 8.21625 11.6887 7.79534 12.6756C7.58347 13.1706 7.47659 13.7012 7.47659 14.2656C7.47659 14.8281 7.58347 15.3587 7.79534 15.8537C8.01097 16.3487 8.30159 16.7856 8.66909 17.1606C9.04954 17.545 9.50289 17.8497 10.0026 18.0567C10.5023 18.2637 11.0382 18.369 11.5791 18.3662H11.5772ZM28.8047 1.95996V15.085H25.5235L20.6016 20.0068V15.085H18.961V13.4443H22.2422V16.0468L24.8447 13.4443H27.1641V3.60059H10.7578V6.54809C10.4828 6.58283 10.209 6.62598 9.93659 6.67746C9.65731 6.73048 9.38316 6.80765 9.11722 6.90809V1.95996H28.8047Z"
                        fill="#FC670B"
                      />
                    </g>
                  </svg>
                </motion.span>
                <p class="flex items-center mb-1 text-2xl font-semibold text-black">
                  Receive personalized feedback
                </p>

                <p class="text-base font-normal text-neutral-300">
                  You will receive detailed feedback on your resume in a few
                  days. This is followed with thorough guidance on enhancing its
                  content and format to make it more appealing to potential
                  employers and ensure it meets the ATS standards.
                </p>
              </div>
            </motion.div>
          </div>
          <Link
            to="/services/resume/upload/"
            className="self-center md:self-start bg-primary-500 text-white w-full md:w-fit px-12 md:px-11 py-4 md:py-5 font-bold md:text-lg flex items-center justify-center rounded-md"
          >
            Get Your Resume Reviewed Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Process;
