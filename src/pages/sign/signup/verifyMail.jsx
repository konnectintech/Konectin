import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { konectinIcon } from "../../../assets";
import { CustomButton } from "../../../components/button";
import { ErrorModal, SuccessModal } from "../../../components/form/modal";
import Preloader from "../../../components/preloader";

function VerifyMail() {
  const [code, setCode] = useState("");
  const [isloading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [modal, popModal] = useState("");

  const user = JSON.parse(localStorage.getItem("User"));
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    // let value = e.target.value.replace(/[^0-9.]/g, "");
    setCode(e.target.value);
  };

  const resendCode = () => {
    const url = `https://konectin-backend-hj09.onrender.com/user/requestEmail?userId=${user._id}`;

    setLoading(true);
    axios
      .post(url, { email: user.email })
      .then(async (res) => {
        const status = res.status;
        if (status === 200) {
          setLoading(false);
          popModal("A code has been resent to your mail");
          setTimeout(() => {
            popModal("");
          }, 2000);
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

    const url = `https://konectin-backend-hj09.onrender.com/user/verifyEmail?userId=${user._id}`;

    setLoading(true);

    axios
      .post(url, { OTP: value })
      .then(async (res) => {
        const status = res.status;
        if (status === 200) {
          setLoading(false);
          popModal("You have been verified");
          setTimeout(() => {
            popModal("");
            navigate("/resume/options");
          }, 2000);
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

  return (
    <main className="bg-neutral-800 flex items-center min-h-[100vh] justify-center">
      {isloading && <Preloader />}
      <section className="w-8/12 max-w-md mx-auto text-center space-y-10">
        <Link
          to="/"
          className="w-fit mx-auto flex justify-center relative z-10"
        >
          <img src={konectinIcon} alt="Konectin Icon" />
        </Link>

        <SuccessModal
          text="You have been verified"
          popModal={modal}
          closeModal={() => popModal(false)}
        />

        <div className="space-y-2 text-sm">
          <div className="text-secondary-500">You are almost there!</div>
          <h1 className="text-2xl font-semibold">Verify your email</h1>

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
              disabled={code.length !== 6}
              primary={true}
              colorType="primary"
            >
              Verify
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
    </main>
  );
}

export default VerifyMail;
