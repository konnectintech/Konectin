import axios from "axios";
import * as FaIcon from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TemplateOption from "./template-option";
import { konectinIcon } from "../../../../../assets";
import { Link } from "react-router-dom";
import { FieldForm } from "../../../../../components/form";
import { loginForm } from "../../../../sign/signData";

const TemplateSelector = ({ data }) => {
  const [popUp, setPopUp] = useState(false);
  const [isloading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!data.profession) {
      navigate("/resume/ai/profession/");
      return;
    }
  }, [navigate, data]);

  const startBuilding = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const stage = JSON.parse(localStorage.getItem("crStage"));

    if (user === null) {
      setPopUp(true);
    } else {
      navigate(stage === 6 ? "/resume/builder/preview" : "/resume/builder");
    }
  };

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      let authresult = await axios.post(
        "https://konectin-backend-hj09.onrender.com/user/login",
        data
      );

      const userData = { ...authresult.data.data };
      userData.token = authresult.data.token;

      localStorage.setItem("user", JSON.stringify(userData));
      setLoading(false);
      navigate("/resume/builder");
    } catch (err) {
      setLoading(false);
      setErrorMessage(err.response.data.message);
    }
  };

  return (
    <>
      <div>
        <h2 className="text-2xl max-w-lg leading-snug lg:text-3xl font-extrabold text-center">
          Select a Resume Template for a{" "}
          <span className="text-secondary-500 capitalize">
            {data.profession}
          </span>
        </h2>
        <p className="text-center text-sm text-[#3F4044] font-medium mt-3">
          I have listed below some resume templates which resonates with your
          profession
        </p>
      </div>

      <section className="flex flex-col w-full items-center gap-10 mt-3 lg:mt-6 lg:mx-16 pb-12">
        <TemplateOption sectionName="modern" />
        <TemplateOption sectionName="artistic" />
        <div
          onClick={() => startBuilding()}
          className="self-end bg-primary-500 rounded-md py-3 px-14 text-white"
        >
          Continue
        </div>
      </section>

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
    </>
  );
};

export default TemplateSelector;
