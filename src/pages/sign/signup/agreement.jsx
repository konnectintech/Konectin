import * as FaIcon from "react-icons/fa";
import { Link } from "react-router-dom";

function Agreement({ agreed, setAgreed }) {
  return (
    <div className="flex md:justify-start gap-2">
      {/* Agreed buttton */}
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

      <div className="cursor-pointer select-none">
        <font
          onClick={() => {
            setAgreed((prev) => !prev);
          }}
        >
          I agree to Konectin{" "}
        </font>
        <Link
          to="/terms"
          className="text-primary-600 underline hover:text-secondaryBtn"
        >
          TERMS OF SERVICE
        </Link>{" "}
        and{" "}
        <Link
          to="/"
          className="text-primary-600 underline hover:text-secondaryBtn"
        >
          PRIVACY POLICY
        </Link>
      </div>
    </div>
  );
}

export default Agreement;
