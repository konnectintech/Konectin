/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate } from "react-router-dom";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { useState, useEffect } from "react";
import { useAuth } from "../../../middleware/auth";
import Preloader from "../../../components/preloader";
import { InteractionRequiredAuthError } from "@azure/msal-browser";
import { CustomButton } from "../../../components/button";
import { forgotPasswordImage, konectinIcon } from "../../../assets";
import { ErrorModal, NotifyModal } from "../../../components/form/modal";
import * as MdIcons from "react-icons/md";
import * as FaIcon from "react-icons/fa";
import axios from "axios";

function ResetPassword() {
  const [isloading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const { instance } = useMsal();
  const { setPreviousLog, previousLog } = useAuth();
  const isUserAuthenticated = useIsAuthenticated();
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isCodeValid, setIsCodeValid] = useState(true);
  const [state, setState] = useState({
    error: false,
    header: "",
    p1: "",
    p2: "",
    button: "",
  });

  const parseURL = import.meta.env.VITE_CLIENT_SERVER_URL;

  useEffect(() => {
    if (!isUserAuthenticated) {
      instance
        .ssoSilent({
          scopes: ["user.read"],
          loginHint: previousLog.username,
        })
        .then((res) => {
          instance.setActiveAccount(res.account);
          setPreviousLog(res.account);
          navigate("/blog/all");
        })
        .catch((err) => {
          if (err instanceof InteractionRequiredAuthError) {
            // instance.loginPopup({
            //   scopes: ["user.read"],
            // });
          }
        });
    }
  }, []);

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    if (!password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password.length < 8) {
      setError("Enter minimum of 8 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password do not match");
      return;
    }
    setLoading(true);
    const email = JSON.parse(localStorage.getItem("forgetPasswordEmail"));
    const url = `${parseURL}/resetPassword`;

    axios
      .post(url, { OTP: code, password, confirmPassword, email })
      .then(async (res) => {
        const status = res.status;
        if (status === 200) {
          setLoading(false);

          localStorage.setItem("forgetPasswordEmail", null);

          const newState = {
            error: false,
            header: (
              <>
                <font className="font-bold text-[18px] text-secondary-600">
                  Congratulations,
                </font>{" "}
                Password Reset Successfully 🎉
              </>
            ),
            p1: "Congrats! Your password has been changed successfully.",
            p2: "Your new password has been set, and you can now log in with confidence. Please make sure to keep your new password secure and do not share it with anyone.😎",
            button: "Continue",
          };
          setState(newState);
        } else {
          setLoading(false);
          setErrorMessage(res.data.message);
          console.log(res);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setErrorMessage(err.response.data.message);
      });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formReq = new FormData(event.target);
    const value = formReq.get("code");

    const url = `${parseURL}/verify-otp`;

    setLoading(true);

    axios
      .post(url, { OTP: value })
      .then(async (res) => {
        const status = res.status;
        if (status === 200) {
          setLoading(false);
          setIsCodeValid(true);
        } else {
          setLoading(false);
          setErrorMessage(res.data.message);
          console.log(res);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setErrorMessage(err.response.data.message);
      });
  };

  const resendCode = async () => {
    const email = JSON.parse(localStorage.getItem("forgetPasswordEmail"));
    setLoading(true);

    try {
      await axios.post(`${parseURL}/forgotPassword`, { email });
      setLoading(false);
      setErrorMessage("");
      setCode("");
    } catch (err) {
      setLoading(false);
      setErrorMessage(err.response.data.message);
    }
  };

  const handleInputChange = (e) => {
    setCode(e.target.value);
  };

  const [passType, setPassType] = useState({
    password: "password",
    confirm_password: "password",
  });

  const togglePassType = (type) => {
    setPassType((prev) => ({
      ...prev,
      [type]: prev[type] === "password" ? "text" : "password",
    }));
  };

  return (
    <div className="bg-[#F5F5F5] flex items-center w-full sm:min-w-[500px]">
      {!isCodeValid ? (
        <div className="p-6 max-w-[600px] min-h-[80vh] lg:p-0 mx-auto flex flex-col gap-4 items-start justify-center">
          {isloading && <Preloader />}
          <section className=" max-w-md mx-auto text-center space-y-10">
            <Link
              to="/"
              className="w-fit mx-auto flex justify-center relative z-5"
            >
              <img src={konectinIcon} alt="Konectin Icon" />
            </Link>

            <div className="space-y-2 text-sm">
              <div className="text-secondary-500">You are almost there!</div>
              <h1 className="text-2xl font-semibold">Reset your password</h1>

              {errorMessage && <ErrorModal text={errorMessage} />}

              <div>Provide the six digit code sent to your email</div>
              <form onSubmit={submitHandler} className="pb-4 relative z-10">
                <input
                  className={`${
                    errorMessage.length > 0
                      ? "outline-red-500 outline outline-2"
                      : ""
                  } p-2 text-center rounded-md outline-secondary-500 focus:outline`}
                  type="tel"
                  name="code"
                  value={code}
                  maxLength="6"
                  minLength="6"
                  onInput={handleInputChange}
                  required
                />
                <div className="mt-2 mb-6">
                  Didn't get a verification code?{" "}
                  <font
                    onClick={resendCode}
                    className="text-secondary-500 text-semibold cursor-pointer"
                  >
                    Resend code
                  </font>
                </div>
                <CustomButton
                  type="submit"
                  disabled={code.length !== 6}
                  primary={true}
                  colorType="primary"
                >
                  Reset Password
                </CustomButton>
              </form>

              <div>
                Question?{" "}
                <a
                  className="text-secondary-500"
                  href="mailto:konectin.inc@mail.com"
                >
                  konectin.inc@mail.com
                </a>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="w-full">
          <div className="mx-auto max-w-screen-xl flex flex-col md:flex-row min-h-screen gap-8 lg:gap-16 justify-between lg:px-32">
            {isloading && <Preloader />}
            <div className="hidden h-screen md:w-11/12 md:block relative lg:block">
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
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold">Change Password</h1>
                  <p>Let's help you get your account back</p>
                </div>

                <div className="w-full flex flex-col items-stretch text-xs md:text-sm">
                  <form
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col mt-2 items-stretch text-xs md:text-sm gap-6"
                  >
                    {errorMessage && <ErrorModal text={errorMessage} />}
                    <div className="flex flex-col gap-4">
                      <fieldset className="border border-[#DC7957] rounded-md cursor-pointer relative">
                        <legend className="ml-4 px-1">New Password</legend>
                        <input
                          className="w-full text-xs bg-transparent border-0 outline-0 px-4 pt-2 pb-3"
                          id={"password"}
                          name={"password"}
                          type={passType["password"]}
                          placeholder={"Minimum of 8 characters"}
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                          onInput={(event) => setPassword(event.target.value)}
                        />
                        <label
                          onClick={() => togglePassType("password")}
                          className="cursor-pointer"
                          htmlFor={"password"}
                        >
                          {passType["password"] === "password" ? (
                            <MdIcons.MdLockOpen
                              className="absolute -translate-y-1/2 top-1/2 right-3 pb-1"
                              color="#242424"
                              size="1.5rem"
                            />
                          ) : (
                            <MdIcons.MdLock
                              className="absolute -translate-y-1/2 top-1/2 right-3 pb-1"
                              color="#242424"
                              size="1.5rem"
                            />
                          )}
                        </label>
                      </fieldset>

                      <fieldset className="border border-[#DC7957] rounded-md cursor-pointer relative">
                        <legend className="ml-4 px-1">Confirm Password</legend>
                        <input
                          className="w-full text-xs bg-transparent border-0 outline-0 px-4 pt-2 pb-3"
                          id={"confirmPassword"}
                          name={"confirmPassword"}
                          type={passType["confirm_password"]}
                          placeholder={"Minimum of 8 characters"}
                          value={confirmPassword}
                          onChange={(event) =>
                            setConfirmPassword(event.target.value)
                          }
                          onInput={(event) =>
                            setConfirmPassword(event.target.value)
                          }
                        />
                        <label
                          onClick={() => togglePassType("confirm_password")}
                          className="cursor-pointer"
                          htmlFor={"confirmPassword"}
                        >
                          {passType["confirm_password"] === "password" ? (
                            <MdIcons.MdLockOpen
                              className="absolute -translate-y-1/2 top-1/2 right-3 pb-1"
                              color="#242424"
                              size="1.5rem"
                            />
                          ) : (
                            <MdIcons.MdLock
                              className="absolute -translate-y-1/2 top-1/2 right-3 pb-1"
                              color="#242424"
                              size="1.5rem"
                            />
                          )}
                        </label>
                      </fieldset>
                      {error && (
                        <p className="text-start w-full text-red-500 mt-1 cursor-text bg-transparent">
                          {error}
                        </p>
                      )}
                    </div>
                    <div className="text-center flex flex-col gap-2">
                      <CustomButton
                        type="submit"
                        disabled={
                          !password ||
                          !confirmPassword ||
                          password !== confirmPassword
                        }
                        primary={true}
                        colorType="primary"
                      >
                        Reset Password
                      </CustomButton>
                      <CustomButton onClick={() => navigate("/login")}>
                        Back to sign in
                      </CustomButton>
                    </div>
                  </form>
                </div>
                {state.header && (
                  <div className="fixed top-0 left-0 w-full h-full z-50 bg-neutral-500 flex items-center justify-center">
                    <NotifyModal
                      error={state.error}
                      header={state.header}
                      paragraph1={state.p1}
                      paragraph2={state.p2}
                      click={() => navigate("/login")}
                    >
                      {state.button}
                    </NotifyModal>
                  </div>
                )}
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
            <p className="mb-4 md:mb-0">A product of konectin</p>
            <p>
              &copy; {new Date().getFullYear()} Konectin Inc. All rights
              reserved
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResetPassword;
