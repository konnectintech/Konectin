import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTemplateContext } from "../../../../../middleware/resume";
import { TypeAnimation } from "react-type-animation";

const Username = ({ data }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [text, setText] = useState(false);

  const { setTemplateData } = useTemplateContext();

  useEffect(() => {
    if (data.firstName !== "" || data.lastName !== "")
      setName(`${data.firstName} ${data.lastName}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();

  const handleChange = (e) => {
    let { value } = e.target;

    setName(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || name.length < 2) {
      setError("Please enter a valid name");
      return;
    }

    if (name.split(" ").length < 2 || name.split(" ")[1].length < 2) {
      setError("Please your full name");
      return;
    }

    setTemplateData((prev) => ({
      ...prev,
      basicInfo: {
        ...prev.basicInfo,
        firstName: name.split(" ")[0],
        lastName: name.split(" ")[1],
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
          value={name}
          onChange={handleChange}
          className="w-full border-b border-neutral-500 rounded-lg p-4 text-[11px] text-neutral-400 tracking-wide outline-none"
        />
        <p className="absolute -bottom-7 text-sm text-error-500">{error}</p>
        <button
          onClick={handleSubmit}
          className="absolute right-4 bg-primary-500 text-white rounded-md px-6 py-1 text-sm"
        >
          Continue
        </button>
      </form>
    </>
  );
};

export default Username;
