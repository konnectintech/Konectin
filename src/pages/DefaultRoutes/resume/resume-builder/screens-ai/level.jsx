import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Level = ({ data }) => {
  const [error, setError] = useState("");
  const [text, setText] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!data.firstName || !data.lastName) {
      navigate("/resume/ai/");
    }
  }, [navigate, data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedLevel) {
      setError("Please select a profession level");
      return;
    }
    navigate("/resume/ai/profession");
  };

  return (
    <>
      <h2 className="text-2xl lg:text-3xl font-extrabold text-center">
        It's Nice to Meet You
        <span className="text-secondary-500 capitalize"> {data.lastName}</span>
      </h2>

      <div className="font-bold text-center">
        <TypeAnimation
          cursor={false}
          sequence={[
            "To tailor your resume, we need to know your level of experience. ",
            1000,
            () => setText(true),
          ]}
        />
        {text && (
          <p className="font-bold text-center">
            <TypeAnimation
              cursor={false}
              sequence={[
                "Please select the option that best describes you:",
                1000,
              ]}
            />
          </p>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center  min-w-[320px] max-w-[722px]"
      >
        <div className="flex flex-col gap-2">
          <label className="inline-flex items-center text-sm font-medium cursor-pointer">
            <input
              type="radio"
              name="level"
              value="0"
              checked={selectedLevel === "0"}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="hidden peer"
            />
            <span className="w-4 h-4 border border-neutral-100 rounded-full text-sm mr-2 peer-checked:bg-orange-500 peer-checked:border-none"></span>
            I'm a student or recent graduate with little to no work experience
            (Entry- Level, 0-2 years experience)
          </label>
          <label className="inline-flex items-center text-sm font-medium cursor-pointer">
            <input
              type="radio"
              name="level"
              value="1"
              checked={selectedLevel === "1"}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="hidden peer"
            />
            <span className="w-4 h-4 border border-neutral-100 rounded-full text-sm mr-2 peer-checked:bg-orange-500 peer-checked:border-none"></span>
            I have some professional experience under my belt (Mid-Level, 2-5
            years experience)
          </label>
          <label className="inline-flex items-center text-sm font-medium cursor-pointer">
            <input
              type="radio"
              name="level"
              value="2"
              checked={selectedLevel === "2"}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="hidden peer"
            />
            <span className="w-4 h-4 border border-neutral-100 rounded-full text-sm mr-2 peer-checked:bg-orange-500 peer-checked:border-none"></span>
            I'm a seasoned professional with substantial experience
            (Senior-Level, 5years and Above experience)
          </label>
        </div>
        <div className="">
          <button
            onClick={handleSubmit}
            className=" bg-primary-500 text-white rounded-md px-6 py-1 text-sm"
          >
            Continue
          </button>
        </div>
        <p className="text-sm text-error-500">{error}</p>
      </form>
    </>
  );
};

export default Level;
