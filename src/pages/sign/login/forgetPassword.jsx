import axios from "axios";
import { useState } from "react";
import { forgotPasswordImage, konectinIcon } from "../../../assets";
import * as FaIcon from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Preloader from "../../../components/preloader";
import { NotifyModal } from "../../../components/form/modal";
import { CustomButton } from "../../../components/button";

function ForgetPassword() {
  const [mail, setMail] = useState("");
  const [isloading, setLoading] = useState(false);
  const [state, setState] = useState({
    error: false,
    header: "",
    p1: "",
    p2: "",
    button: "",
  });
  const navigate = useNavigate();
  const url = import.meta.env.VITE_CLIENT_SERVER_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formReq = new FormData(event.target);
    const formResult = formReq.get("email");
    setLoading(true);

    try {
      await axios.post(`${url}/forgotPassword`, { email: formResult });
      localStorage.setItem("forgetPasswordEmail", JSON.stringify(formResult));
      setLoading(false);
      navigate("/reset-password");
    } catch (err) {
      setLoading(false);
      const newState = {
        error: true,
        header: (
          <>
            <font className="text-secondary-600">Oops!</font> Something went
            wrong 🥴
          </>
        ),
        p1: "It looks like something went wrong while trying to reset your password.",
        p2: "Please give it another shot, or contact our support team for a helping hand. We're sorry for any frustration this may have caused.",
        button: "Let's Try Again",
      };
      setState(newState);
    }
  };

  return (
    <section className="bg-[#F5F5F5]">
      <div className="mx-auto max-w-screen-xl flex flex-col md:flex-row min-h-screen gap-8 lg:gap-16 justify-between lg:px-32">
        {isloading && <Preloader />}
        <div className="hidden h-screen md:w-11/12 md:block relative lg:w-auto">
          <img
            className="w-full h-full"
            src={forgotPasswordImage}
            alt="sign in background"
          />
        </div>

        <div className="items-start md:min-w-[250px] lg:w-1/4 lg:min-w-[500px] w-full sm:min-w-[400px]">
          <div className="p-6 lg:pr-16 max-w-[600px] min-h-[80vh] lg:p-0 mx-auto flex flex-col gap-4 items-start justify-center">
            <div className="md:hidden">
              <img
                className="w-full h-full"
                src={konectinIcon}
                alt="sign in background"
              />
            </div>
            <hgroup>
              <h1 className="text-4xl mb-2">Forgot Password</h1>
              <h6>Enter your email below</h6>
            </hgroup>
            <div className="w-full flex flex-col items-stretch text-xs md:text-sm">
              <form
                className="flex flex-col gap-4 mb-4"
                onSubmit={handleSubmit}
              >
                <label htmlFor="email">
                  <fieldset className="border border-secondary-300 rounded-md cursor-pointer relative">
                    <legend className="ml-4 px-1">E-mail</legend>
                    <input
                      className="outline-0 border-0 text-sm md:text-md w-full bg-transparent p-4 pt-3 text-primary-900"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={mail}
                      onChange={(event) => setMail(event.target.value)}
                      onInput={(event) => setMail(event.target.value)}
                    />
                  </fieldset>
                </label>
                <button
                  disabled={!mail}
                  className={`${
                    mail
                      ? "bg-primary-500 hover:bg-primary-700"
                      : "bg-primary-200 hover:bg-primary-300"
                  } px-2 text-sm md:text-md sm:px-6 py-3 text-white text-center rounded-md`}
                >
                  Reset Password
                </button>
              </form>
              <CustomButton onClick={() => navigate("/login")}>
                Back to sign in
              </CustomButton>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden bg-primary-700 w-full text-center text-white py-6">
        <div className="flex gap-4 items-center justify-center mb-6">
          <a
            href="https://twitter.com/konectin_you?t=LyVvMn4twNiZjYGU6F48pg&s=09"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-secondaryBg"
          >
            <FaIcon.FaTwitter size="1.1rem" />
          </a>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-secondaryBg"
          >
            <FaIcon.FaFacebookF size="1rem" />
          </a>
          <a
            href="https://linkedin.com/company/konectin/"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-secondaryBg"
          >
            <FaIcon.FaLinkedinIn size="1rem" />
          </a>
        </div>
      </div>
      {state.header && (
        <div className="fixed top-0 w-full h-full z-50 bg-neutral-500 flex items-center justify-center">
          <NotifyModal
            error={state.error}
            header={state.header}
            paragraph1={state.p1}
            paragraph2={state.p2}
            click={() =>
              state.button.length <= 6
                ? navigate("/login")
                : setState({
                    error: false,
                    header: "",
                    p1: "",
                    p2: "",
                  })
            }
          >
            {state.button}
          </NotifyModal>
        </div>
      )}
    </section>
  );
}

export default ForgetPassword;
