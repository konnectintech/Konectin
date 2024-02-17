import "./index.css";
import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../middleware/auth";
import { NotifyModal } from "../../../components/form/modal";
import { useSessionStorage } from "../../../middleware/storage";

// components
import BasicDetails from "./form/basic";
import UploadResume from "./form/upload";
import Education from "./form/education";
import InternType from "./form/intern-type";

// assets
import { slideIn, textVariantUp } from "../../../utils/motion";
import { happyTeam, konectinLogo, successIcon } from "../../../assets";
import SectionWrapper from "../../../components/animation/sectionWrapper";

function InternApplication() {
  const { user } = useAuth();
  const url = import.meta.env.VITE_CLIENT_SERVER_URL;

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState({
    error: false,
    header: "",
    p1: "",
    p2: "",
  });

  const [form, setForm] = useSessionStorage("internData", {
    basicDetails: {
      fullName: "",
      email: "",
      country_code: "",
      phone_number: "",
      country: "",
      gender: "",
      ageRange: "",
    },
    upload: { resumes: [], portfolio: "" },
    education: {
      name: "",
      options: {
        option1: "",
        option2: "",
        option3: "",
      },
    },
    internType: {
      type: "",
      field: "",
    },
  });

  const handleChange = (section, subsection, values) => {
    setForm({
      ...form,
      [section]: {
        ...form[section],
        [subsection]: values,
      },
    });
  };

  const handleUpload = (value) => {
    const errorRef = document.getElementById("uploadError");
    const container = document.getElementById("upload");

    if (value === "") {
      container.style.borderColor = "#F11010";
      errorRef.style.display = "block";
      errorRef.innerHTML = "Upload a resume or build one";
    } else {
      container.style.borderColor = "initial";
      errorRef.style.display = "none";
    }

    setForm((prev) => ({
      ...prev,
      upload: { ...prev.upload, resumes: value },
    }));
  };

  const checkVerification = () => {
    let valid = true;

    let formStore = Object.keys(form);

    formStore.forEach((state) => {
      let stateStore = Object.keys(form[state]);
      let errorMessage =
        state === "internType"
          ? "Select an option"
          : "Input field not filled yet";

      if (state === "education") {
        if (form.education.name !== "") {
          Object.keys(form.education.options).forEach((holder) => {
            const data = form.education.options[holder];
            const errorRef = document.getElementById(`${holder}Error`);
            const container = document.getElementById(holder);

            if (data === "") {
              container.style.borderColor = "#F11010";
              errorRef.style.display = "block";
              errorRef.innerHTML = errorMessage;
              valid = false;
            } else {
              container.style.borderColor = "initial";
              errorRef.style.display = "none";
            }
          });
        } else {
          const duplicate = form;
          delete duplicate.education;
          setForm(duplicate);
        }
        return;
      }

      if (state === "upload") {
        const errorRef = document.getElementById("uploadError");
        const container = document.getElementById("upload");

        if (form.upload.resumes.length === 0) {
          container.style.borderColor = "#F11010";
          errorRef.style.display = "block";
          errorRef.innerHTML = "Upload a resume or build one";
          valid = false;
        } else {
          container.style.borderColor = "initial";
          errorRef.style.display = "none";
        }
        return;
      }

      stateStore.forEach((holder) => {
        const data = form[state][holder];
        const errorRef = document.getElementById(`${holder}Error`);
        const container = document.getElementById(holder);

        switch (holder) {
          case "email":
            const isValid = data.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
              ? true
              : false;
            if (data === "") {
              container.style.borderColor = "#F11010";
              errorRef.style.display = "block";
              errorRef.innerHTML = errorMessage;
              valid = false;
            } else if (isValid === false) {
              container.style.borderColor = "#F11010";
              errorRef.style.display = "block";
              errorRef.innerHTML = "Email address is not valid";
              valid = false;
            } else {
              container.style.borderColor = "initial";
              errorRef.style.display = "none";
            }
            break;
          default:
            if (data === "") {
              container.style.borderColor = "#F11010";
              errorRef.style.display = "block";
              errorRef.innerHTML = errorMessage;
              valid = false;
            } else {
              container.style.borderColor = "initial";
              errorRef.style.display = "none";
            }
            break;
        }
      });
    });

    return valid;
  };

  const handleVerify = () => {
    navigate("/verify-mail", { state: { from: "intern" } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const replica = form;
    delete replica.ongoing;
    setForm({ ...replica });

    const isValid = checkVerification();

    if (isValid) {
      setLoading(true);

      // submit form data to backend
      if (user?._id) {
        axios
          .post(`${url}/subscribeIntern?userId=${user._id}`, form, {
            headers: { Authorization: `Bearer ${user.token}` },
          })
          .then((res) => {
            setLoading(false);
            setMessage("success");
          })
          .catch((err) => {
            console.warn(err);
            let errState = {}; // declare err state

            if (err.response.status === 400) {
              // If user has already subscribed
              errState = {
                error: true,
                message: 400,
                header: (
                  <>
                    <span className="text-secondary-600">Oops!</span> Our
                    records show that you've already registered for Konectin's
                    Internship Program
                  </>
                ),
                p1: (
                  <>
                    Each applicant is allowed only one registration. If you need
                    to update your application or if you believe this is a
                    mistake, please contact our support team at{" "}
                    <a
                      href="mailto:interns@konectin.org"
                      className="text-secondary-600 underline"
                    >
                      interns@konectin.org
                    </a>
                    . Thank you!
                  </>
                ),
                p2: "In the meantime, keep working hard and don't forget to smile 🙂. Your dream internship is just around the corner! 👍",
              };
            } else if (err.response.status === 403) {
              errState = {
                error: true,
                message: 403,
                header: (
                  <>
                    <span className="text-secondary-600">Oops!</span> It seems
                    you skipped email verification
                  </>
                ),
                p1: "You can't access this service until you are verified",
                p2: "If you understand, kindly click the button to verify your mail and continue this process",
              };
            } else {
              errState = {
                error: true,
                header: (
                  <>
                    <span className="text-secondary-600">Oops!</span> Something
                    went wrong 🥴
                  </>
                ),
                p1: "",
                p2: "It looks like our systems is on a coffee break. Please try again later, or go grab a cup of coffee with us and let's try again together!",
              };
            }

            setError(errState);
            setForm({
              ...form,
              ongoing: "intern",
            });
            setLoading(false);
            setMessage("error");
          });
      } else {
        setForm({
          ...form,
          ongoing: "intern",
        });
        navigate("/login");
      }
    }
  };

  return (
    <section className="min-h-[70vh] overflow-hidden">
      {loading && (
        <div className="fixed no-scrollbar w-full h-screen top-0 left-0 z-[100] flex">
          <div className="bg-neutral-100 opacity-70 absolute w-full h-full"></div>
          <div className="animate-pulse m-auto bg-white p-4 rounded-full">
            <img src={konectinLogo} alt="" />
          </div>
        </div>
      )}
      {message === "success" && (
        <div className="fixed no-scrollbar w-full h-screen top-0 left-0 z-[100] flex">
          <div
            onClick={() => setMessage("")}
            className="bg-neutral-100 opacity-70 absolute w-full h-full"
          ></div>
          <div className="w-[90%] md:w-2/4 min-w-[280px] m-auto relative z-10 bg-neutral-100 rounded-lg h-[80vh] max-h-[450px] flex items-center justify-center flex-col gap-6 p-8 text-white">
            <div>
              <img
                className="max-w-[200px]"
                src={successIcon}
                alt="success/error"
              />
            </div>
            <div className="text-center space-y-4">
              <p>
                Thank you for applying for Konectin's Internship Program. Your
                application has been received. If you're shortlisted, we'll
                contact you via the email address you provided.
              </p>
              <p>Remember to check your email regularly. 😉</p>
            </div>
          </div>
        </div>
      )}
      {error.header && (
        <div className="fixed top-0 left-0 w-full h-full z-[1000] flex items-center justify-center">
          <div
            onClick={() => setError((prev) => ({ ...prev, header: "" }))}
            className="bg-neutral-100 opacity-70 absolute w-full h-full"
          />
          <NotifyModal
            error={error.error}
            header={error.header}
            paragraph1={error.p1}
            paragraph2={error.p2}
            click={() => {
              if (error.message === 403) handleVerify();
              else
                setError({
                  error: false,
                  header: "",
                  p1: "",
                  p2: "",
                });
            }}
            children={error.message === 403 ? "Go to verify" : false}
            intern
          />
        </div>
      )}
      <div className="w-11/12 mx-auto max-w-screen-2xl min-h-[70vh] flex flex-col md:gap-4 lg:gap-8 md:flex-row items-start py-32">
        <div className="flex flex-col gap-6 w-full pt-12 md:w-10/12 lg:w-8/12">
          <motion.h1
            variants={textVariantUp()}
            className="text-4xl font-semibold !leading-tight mt-2"
          >
            <span className="text-secondary-500">Konectin</span> Internship
            Application
          </motion.h1>
          <motion.p variants={textVariantUp(0.4)}>
            Welcome to Konectin's Internship Application form. We're excited
            about your interest in joining our program. Please fill out the form
            below to help us understand your background and qualifications
            better.
          </motion.p>
          <motion.form
            onSubmit={handleSubmit}
            className="text-sm md:pr-6 space-y-4 intern-form flex flex-col"
            variants={textVariantUp(0.6)}
          >
            <div>
              <h2 className="text-lg font-semibold">Basic Details*</h2>
              <p className="text-neutral-200">
                Input your personal information
              </p>

              <div className="flex flex-col gap-2 mt-3">
                <BasicDetails
                  data={form?.basicDetails}
                  updateForm={handleChange}
                />
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold">Add Your Credentials*</h2>
              <div className="text-neutral-200">
                Your can upload your resume, cover letter, portfolio,
                professional certifications and other relevant documents.
                <h2 className="mt-3 font-semibold">
                  Upload your documents/credentials*
                </h2>
                <span className="text-xs text-neutral-300">
                  *You can add your resume (required) <br /> *1 additional
                  document or credential (cover letter, portfolio, professional
                  certification or other relevant documents) - Optional
                </span>
              </div>

              <div className="flex flex-col gap-2 mt-3">
                <UploadResume
                  data={form.upload.resumes}
                  updateForm={handleUpload}
                  setUpdate={() =>
                    setForm({
                      ...form,
                      ongoing: "intern",
                    })
                  }
                  handleChange={handleChange}
                />
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold">Educational Background</h2>
              <p className="text-neutral-200">
                Tell us about your educational background.
              </p>

              <div className="flex flex-col gap-2 mt-3">
                <Education data={form?.education} updateForm={handleChange} />
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold">Internship Type*</h2>
              <p className="text-neutral-200">Select an option.</p>

              <div className="flex flex-col gap-2 mt-3">
                <InternType data={form?.internType} updateForm={handleChange} />
              </div>
            </div>

            <button
              type="submit"
              className="text-white bg-primary-500 py-2 px-8 rounded self-center"
            >
              Submit
            </button>
          </motion.form>
        </div>

        <motion.picture
          variants={slideIn("rtl", "spring", 0.1, 1)}
          className="!hidden md:!block pt-12 sm:[--left-right:150%] [--left-right:-150%] relative w-7/12 max-h-[420px]"
        >
          <img src={happyTeam} alt="Konectin Internship" />
        </motion.picture>
      </div>
    </section>
  );
}

export default SectionWrapper(InternApplication, "intern_application");
