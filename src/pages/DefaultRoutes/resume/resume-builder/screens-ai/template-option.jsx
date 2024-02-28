import { template_images } from "../../../../../assets/resume";
import { useTemplateContext } from "../../../../../middleware/resume";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { FieldForm } from "../../../../../components/form";
import * as FaIcon from "react-icons/fa";
import axios from "axios";
import { konectinIcon } from "../../../../../assets";
import { loginForm } from "../../../../sign/signData";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { onSectionComplete } from "../screens/verification";

const TemplateOption = ({ sectionName }) => {
  const { templateData, setTemplateData } = useTemplateContext();

  const [popUp, setPopUp] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(false);
  const navigate = useNavigate();
  const [isloading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const url = import.meta.env.VITE_CLIENT_SERVER_URL;

  async function createResume(value, user_id) {
    const data = { ...templateData };

    delete data.completed;
    delete data._id;
    delete data.userId;
    delete data.__v;

    await axios
      .post(`${url}/resume?userId=${user_id}`, {
        ...data,
        currentStage: 1,
      })
      .then((res) => {
        const resume = res.data.cv;

        setTemplateData((prev) => ({
          ...prev,
          ...resume,
          selectedTemplate: value,
          completed: {
            basic_info: false,
            work_history: false,
            education: false,
            skills: false,
            bio: false,
          },
        }));

        navigate("/resume/builder");
      });
  }

  const handleSelect = (value) => {
    const { currentStage } = templateData;
    const { _id } =
      JSON.parse(localStorage.getItem("konectin-profiler-user")) || "";

    if (_id === undefined) {
      setSelectedTemplate(value);
      setPopUp(true);
    } else if (currentStage === 6) {
      // Coming from preview section
      setTemplateData((prev) => ({
        ...prev,
        selectedTemplate: value,
        completed: {
          basic_info: true,
          work_history: true,
          education: true,
          skills: true,
          bio: true,
        },
      }));

      onSectionComplete(
        { ...templateData, selectedTemplate: value },
        currentStage
      );
      navigate("/resume/builder/preview");
    } else if (selectedTemplate !== "") {
      // if coming from other section
      setTemplateData((prev) => ({
        ...prev,
        selectedTemplate: value,
      }));

      onSectionComplete(
        { ...templateData, selectedTemplate: value },
        currentStage
      );

      navigate("/resume/builder");
    } else {
      createResume(value, _id);
    }
  };

  const handleSubmit = async (data) => {
    setLoading(true);

    try {
      await axios.post(`${url}/login`, data).then((res) => {
        const user = { ...res.data.data };
        user.token = res.data.token;

        localStorage.setItem("konectin-profiler-user", JSON.stringify(user));
        setLoading(false);
        createResume(selectedTemplate, user._id);
      });
    } catch (err) {
      setLoading(false);
      setPopUp(false);
      setErrorMessage(err.response.data.message);
    }
  };

  return (
    <div className="flex flex-col items-start w-full max-w-[1000px] justify-start gap-4">
      <h3 className="text-xl lg:text-2xl font-bold capitalize">
        {sectionName}
      </h3>
      <div className="max-w-[100%] mx-auto">
        <Swiper
          spaceBetween={10}
          slidesPerView={1.7}
          breakpoints={{
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4 },
          }}
        >
          {template_images
            .filter((record) => record.category === sectionName)
            .map((item, index) => {
              return (
                <SwiperSlide
                  key={item.category + index}
                  className="cursor-pointer ml-2 flex justify-center items-center text-center group"
                >
                  <LazyLoadImage
                    src={item.img}
                    alt={`${sectionName}_${index + 1}`}
                    className="w-full h-full"
                    onClick={() => handleSelect(`${sectionName}_${index + 1}`)}
                  />
                  <div
                    className={`
                                ${
                                  templateData.selectedTemplate ===
                                  `${sectionName}_${index + 1}`
                                    ? "absolute w-full h-full top-0 bg-primary-300 bg-opacity-60"
                                    : "-top-full"
                                } left-0 duration-500 flex items-center justify-center`}
                  >
                    {templateData.selectedTemplate ===
                      `${sectionName}_${index + 1}` && (
                      <div className="bg-primary-600 text-white text-xs px-2 py-2 rounded absolute">
                        Selected
                      </div>
                    )}
                  </div>
                  <div
                    className={`
                                ${
                                  templateData.selectedTemplate ===
                                  `${sectionName}_${index + 1}`
                                    ? "-top-full"
                                    : "absolute group-hover:w-full group-hover:h-full group-hover:top-0 bg-neutral-100 bg-opacity-60"
                                } left-0 duration-500 flex items-center justify-center`}
                  >
                    <div
                      onClick={() =>
                        handleSelect(`${sectionName}_${index + 1}`)
                      }
                      className={`
                                ${
                                  templateData.selectedTemplate ===
                                  `${sectionName}_${index + 1}`
                                    ? "hidden"
                                    : "invisible absolute -top-full -translate-y-1/2 group-hover:top-1/2 group-hover:visible"
                                } bg-secondary-600 text-white text-xs px-2 py-2 rounded`}
                    >
                      Select Template
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>

      {popUp && (
        <div className="fixed no-scrollbar w-full h-screen top-0 left-0 z-[100] flex">
          <div className="bg-neutral-100 opacity-70 absolute w-full h-full"></div>
          <div className="w-3/12 min-w-[280px] sm:min-w-[350px] max-w-screen-xl m-auto bg-neutral-1000 flex flex-col md:flex-row items-stretch min-h-[40vh] z-20 relative rounded-sm">
            <div className="flex flex-col gap-4 md:gap-6 my-auto py-8 sm:py-6 px-6 md:px-8">
              <Link to="/">
                <img src={konectinIcon} alt="Konectin Logo" />
              </Link>
              <p className="w-full text-sm">
                To continue using our free services, you have to be logged into
                your account.
              </p>

              <div className="w-full flex flex-col items-stretch text-xs md:text-sm">
                {isloading && <p className="text-xs">Logging you in now...</p>}
                <FieldForm
                  handleSubmit={handleSubmit}
                  params={loginForm}
                  formFor="Sign in"
                  errorMessage={errorMessage}
                ></FieldForm>

                {/* Log In Link */}
                <p className="self-center mt-6">
                  You don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-secondary-600 hover:underline"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>

            <div
              onClick={() => setPopUp(false)}
              className="absolute cursor-pointer right-3 top-3"
            >
              <FaIcon.FaTimesCircle color="#F11010" size="1.3rem" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateOption;
