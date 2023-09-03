/* eslint-disable react-hooks/exhaustive-deps */
import { loginForm, resetPasswordForm } from "../signData";
import { Link, useNavigate } from "react-router-dom";
import * as FaIcon from "react-icons/fa";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { useState, useEffect } from "react";
import { useAuth } from "../../../middleware/auth";
import { FieldForm } from "../../../components/form/";
import Preloader from "../../../components/preloader";
import { InteractionRequiredAuthError } from "@azure/msal-browser";

export function RememberMe() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <div
          className={
            agreed
              ? "w-5 h-5 cursor-pointer rounded-sm bg-primary-600 flex items-center justify-center"
              : "w-5 h-5 cursor-pointer bg-white rounded-sm border border-primary-600"
          }
          onClick={() => {
            setAgreed((prev) => !prev);
          }}
        >
          {agreed ? <FaIcon.FaCheck size=".6rem" color="#fff" /> : null}
        </div>
        <div
          className="cursor-pointer select-none"
          onClick={() => {
            setAgreed((prev) => !prev);
          }}
        >
          Remember me
        </div>
      </div>
      <Link to="/forgot-password" className="text-secondary-600">
        Forget password?
      </Link>
    </div>
  );
}

function ResetPassword() {
  const [isloading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const { instance } = useMsal();
  const { signIn, setPreviousLog, previousLog } = useAuth();
  const isUserAuthenticated = useIsAuthenticated();

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

  const handleSubmit = (data, logType) => {
    // setLoading(true);
    // signIn(data, setLoading, setErrorMessage, logType);
  };

  return (
    <div className="auth-body items-start lg:w-6/12 w-full sm:min-w-[500px] flex-1">
      <div className="p-6 lg:pr-16 max-w-[600px] min-h-[80vh] lg:p-0 mx-auto flex flex-col gap-4 items-start justify-center">
        {isloading && <Preloader />}
        <div>
          <h1 className="text-4xl">Create New Password...</h1>
          <p>Let's help you get your account back</p>
        </div>
        <div className="w-full flex flex-col items-stretch text-xs md:text-sm">
          <FieldForm
            handleSubmit={handleSubmit}
            params={resetPasswordForm}
            formFor="Reset Password"
            errorMessage={errorMessage}
          ></FieldForm>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
