import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { tipIcon } from "../../../../assets";
import img from "../../../../assets/images/bot/bot.svg";

const ShortBio = ({ data, handleChange, isLogged }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (data.length <= 2) {
      setErrorMessage("Fill in Professional Bio");
    }

    if (data && data.length >= 2) {
      setErrorMessage("");
      navigate("/cover-letter/info-ended");
    }
  }

  return (
    <div className="flex flex-col items-center lg:w-3/4 px-12 lg:px-32 text-center">
      <img src={img} alt="bot__image" width={180} height={180} />

      <h2 className="py-4 mb-3 font-bold text-2xl md:text-4xl leading-10">
        {isLogged ? (
          <span className="text-secondary-500">
            Short Bio
            <span className="text-black"> or Resume Selection</span>
          </span>
        ) : (
          <span className="text-secondary-500">
            Brief <span className=" text-black">Professional Bio</span>
          </span>
        )}
      </h2>
      {isLogged ? (
        <span className="w-full max-w-2xl">
          Next, could you provide a brief summary of your resume or your key
          skills?
        </span>
      ) : (
        <span className="w-full max-w-2xl">
          Lastly, could you provide a brief summary of your resume or your key
          skills? This will enable me to craft a cover letter that highlights
          your most relevant qualifications.
        </span>
      )}
      <form onSubmit={handleSubmit} className="mt-4 w-full">
        <div className="relative w-full flex items-end gap-2">
          <textarea
            type="text"
            className="px-4 py-3 text-[11px] w-full h-16 text-primary-400 border rounded border-neutral-500 outline-0 bg-neutral-1000 focus:border-primary-500 focus:border-[1.5px]"
            placeholder="Professional Bio..."
            id="bio"
            value={data}
            onChange={(e) =>
              handleChange({
                section: "bio",
                values: e.target.value,
              })
            }
          />
          <div className="cursor-pointer relative">
            <img className="peer" src={tipIcon} alt="bio tip" />
            <p className="text-xs bg-primary-600 p-3 text-white text-start rounded opacity-0 invisible peer-hover:visible peer-hover:opacity-100 duration-300 w-[350px] absolute right-full">
              A bio is a brief summary or account of a person's life, career, or
              achievement
            </p>
          </div>
        </div>
        <label
          htmlFor="bio"
          className="text-error-500 block text-sm mt-2 text-left"
        >
          {errorMessage}
        </label>
        <button
          type="submit"
          className="text-white mt-4 w-fit rounded-lg bg-primary-600 py-3 px-16"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default ShortBio;
