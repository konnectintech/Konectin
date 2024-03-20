import axios from "axios";
import { useState, useEffect } from "react";
import { konectinIcon } from "../../../assets";
import Preloader from "../../../components/preloader";
import { toast } from "react-toastify";
import { CustomButton } from "../../../components/button";
import { ErrorModal } from "../../../components/form/modal";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../middleware/auth";

function VerifyMail() {
  const [code, setCode] = useState("");
  const [isloading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { user } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //   if (location.state?.from == null) {
  //     navigate("/signup", { replace: true });
  //   }
  // }, [location, navigate]);

  const parseURL = import.meta.env.VITE_CLIENT_SERVER_URL;

  useEffect(() => {
    if (user === null) {
      navigate("/login", { state: { from: "verify-mail" } });
      return;
    }

    // Check if this endpoint has been called already or if user is coming from sign up
    const areq = sessionStorage.getItem("verifyMailRequest");
    if (location.state?.from === "signup" || areq) return;

    // If not, request a code for email verification
    axios
      .post(`${parseURL}/requestEmail?userId=${user._id}`, {
        email: user.email,
      })
      .then(() => {
        sessionStorage.setItem("verifyMailRequest", true);
      });
  });

  const handleInputChange = (e) => {
    let value = e.target.value.replace(/[^0-9.]/g, "");
    setCode(value);
  };

  const resendCode = () => {
    const url = `${parseURL}/requestEmail`;
    setLoading(true);

    axios
      .post(url, { email: user.email })
      .then(async (res) => {
        const status = res.status;
        if (status === 200) {
          setLoading(false);
          toast.info("A code has been sent to your mail");
        } else {
          setLoading(false);
          setErrorMessage(res.data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        setErrorMessage(err.response.data.message);
      });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formReq = new FormData(event.target);
    const value = formReq.get("code");

    const url = `${parseURL}/verifyEmail?email=${user.email}`;

    setLoading(true);

    axios
      .post(url, { OTP: value })
      .then(() => {
        setLoading(false);
        toast.success("You have been verified");
        localStorage.setItem(
          "konectin-profiler-user",
          JSON.stringify({ ...user, isEmailVerified: true })
        );

        const { ongoing } =
          JSON.parse(sessionStorage.getItem("internData")) || "";

        setTimeout(() => {
          if (location.state.from === "intern" || ongoing)
            navigate("/internship/intern-application");
          else navigate("/dashboard/");
        }, 2000);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setErrorMessage(err.response.data.message);
      });
  };

  return (
    <main className="bg-neutral-800 flex items-center min-h-[100vh] justify-center">
      {isloading && <Preloader />}
      <section className="w-8/12 max-w-md mx-auto text-center space-y-10">
        <Link to="/" className="w-fit mx-auto flex justify-center relative z-5">
          <img src={konectinIcon} alt="Konectin Icon" />
        </Link>

        <div className="space-y-2 text-sm">
          <div className="text-secondary-500">You are almost there!</div>
          <h1 className="text-2xl font-semibold">Verify your email</h1>

          {errorMessage && <ErrorModal text={errorMessage} />}

          <div>
            Provide the six digit code sent to{" "}
            {user !== null ? user.email : "your email"}
          </div>
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
              Verify
            </CustomButton>
          </form>

          <div>
            Question?{" "}
            <a className="text-secondary-500" href="mailto:info@konectin.org">
              info@konectin.org
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default VerifyMail;
