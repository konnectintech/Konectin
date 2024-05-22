import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { useTemplateContext } from "../../../../../middleware/resume";
import CustomSelect from "../../../../../components/select/CustomSelect";
import professions from "professions";

const Profession = ({ data }) => {
  const { setTemplateData } = useTemplateContext();
  const [error, setError] = useState("");
  const [selectedProfession, setSelectedProfession] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!data.firstName || !data.lastName) {
      navigate("/services/resume/ai/");
    }
  }, [navigate, data]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.profession) {
      setError("Please enter a profession");
      return;
    }
    navigate("/services/resume/ai/template-selector");
  };

  const handleSelect = (value) => {
    setSelectedProfession(value);
    setTemplateData((prev) => ({
      ...prev,
      basicInfo: {
        ...prev.basicInfo,
        profession: value,
      },
    }));
  };

  return (
    <>
      <h2 className="text-2xl lg:text-3xl font-extrabold text-center">
        It's Nice to Meet You
        <span className="text-secondary-500 capitalize"> {data.lastName}</span>
      </h2>

      <p className="font-bold text-center">
        <TypeAnimation
          cursor={false}
          sequence={["What best describes your profession?", 1000]}
        />
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex position relative items-center min-w-[320px] max-w-[722px]"
      >
        <CustomSelect
          onChange={handleSelect}
          value={selectedProfession}
          options={professions}
        />
        <p className="absolute -bottom-5 text-sm text-error-500">{error}</p>
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

export default Profession;
