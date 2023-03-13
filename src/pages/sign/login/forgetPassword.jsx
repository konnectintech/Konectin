import { useState } from "react";
import * as FaIcon from "react-icons/fa";

function ForgetPassword() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <div
          className={
            agreed
              ? "w-5 h-5 cursor-pointer rounded-sm bg-primary-600 flex items-center justify-center"
              : "w-5 h-5 cursor-pointer rounded-sm border border-primary-600"
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
      <div className="text-secondary-600">Forget password?</div>
    </div>
  );
}

export default ForgetPassword;
