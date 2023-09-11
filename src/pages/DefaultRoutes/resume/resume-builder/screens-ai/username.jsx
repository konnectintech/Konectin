import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTemplateContext } from "../../../../../middleware/resume";
import { TypeAnimation } from "react-type-animation";

const Username = ({ data, handleChange }) => {
  const [error, setError] = useState("");
  const [text, setText] = useState(false);
  const { setTemplateData } = useTemplateContext();

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

    setTemplateData((prev) => ({
      ...prev,
      basicInfo: {
        ...prev.basicInfo,
        firstName: data.fullName.split(" ")[0],
        lastName: data.fullName.split(" ")[1],
      },
    }));

    navigate("profession");
  };

  return (
    <>
      <h2 className="text-2xl  lg:text-3xl font-extrabold text-center">
        Hi! Welcome to <span className="text-secondary-600">Konectin </span>
        Resume Builder
      </h2>
      <p className="text-center text-sm text-neutral-200 font-medium">
        <TypeAnimation
          cursor={false}
          speed={75}
          sequence={[
            "My name is Jane, and I will be walking you through building your professional resume.",
            1000,
            () => setText(true),
          ]}
        />
      </p>
      {text && (
        <p className="font-bold text-center">
          <TypeAnimation
            cursor={false}
            sequence={["May I know your name?", 1000]}
          />
        </p>
      )}

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
