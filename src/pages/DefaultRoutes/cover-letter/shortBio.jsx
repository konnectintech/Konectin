import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <>
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
        <div className="relative w-full">
          <input
            type="text"
            className="coverLetter__input w-full p-2"
            placeholder="Professional Bio..."
            id="bio"
            value={data}
            onChange={(e) =>
              // handleChange({
              //   section: "bio",
              //   values: e.target.value,
              // })
              console.log(data)
            }
          />
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
    </>
  );
};

export default ShortBio;
