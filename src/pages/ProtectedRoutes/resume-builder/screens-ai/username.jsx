import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Username = ({ data, handleChange }) => {
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.fullName || data.fullName.length < 2) {
      setError("Please enter a valid name");
      return;
    }

    if (
      data.fullName.split(" ").length < 2 ||
      data.fullName.split(" ")[1].length < 2
    ) {
      setError("Please your full name");
      return;
    }
    navigate("profession");
  };

  return (
    <>
      <h2 className="text-2xl  lg:text-3xl font-extrabold text-center">
        Hi! Welcome to <span className="text-[#FC670B]">Konectin</span> Resume
        Builder
      </h2>
      <p className="text-center text-sm text-[#3F4044] font-medium">
        My name is Jane, and I will be walking you through building your
        professional resume.
      </p>

      <p className=" font-bold text-center">May I know your name?</p>

      <form
        id="form-resume-name"
        className="flex position relative items-center min-w-[320px] max-w-[722px]"
      >
        <input
          type="text"
          placeholder="Enter your full name"
          value={data.fullName}
          onChange={handleChange("fullName")}
          className="w-full border-b border-[#b2b3b48a] rounded-lg p-6 text-[11px]  text-[#8C8C8F] tracking-wide outline-none"
        />
        <p className="absolute -bottom-7 text-sm text-[#F11010]">{error}</p>
        <button
          onClick={handleSubmit}
          className="absolute right-10 text-[#403580] text-sm "
        >
          Press Enter
        </button>
      </form>
    </>
  );
};

export default Username;
