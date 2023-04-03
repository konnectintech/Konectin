import React, { useState } from "react";

const Profession = ({ next, data, handleChange }) => {
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.profession) {
      setError("Please enter a profession");
      return;
    }
    next();
  };
  return (
    <main className="flex flex-col justify-center mx-auto items-center gap-10">
      <div className="w-[96px] h-[96px] rounded-full flex items-center justify-center mx-auto bg-slate-300">
        <img src="." alt="" />
      </div>
      <h2 className="text-2xl lg:text-3xl font-extrabold text-center">
        It's Nice to Meet You{" "}
        <span className="text-[#FC670B]">{data.name}</span>
      </h2>

      <p className=" font-bold text-center">
        {" "}
        What best describes your profession??
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex position relative items-center min-w-[320px] max-w-[722px]"
      >
        <input
          type="text"
          placeholder="Enter your full profession"
          value={data.profession}
          onChange={handleChange("profession")}
          className="w-full border-b border-[#b2b3b48a] rounded-lg p-6 text-[11px]  text-[#8C8C8F] tracking-wide outline-none"
        />
        <p className="absolute -bottom-5 text-sm text-[#F11010]">{error}</p>

        <button
          onClick={handleSubmit}
          className="absolute right-10 text-[#403580] text-sm "
        >
          Press Enter
        </button>
      </form>
    </main>
  );
};

export default Profession;
