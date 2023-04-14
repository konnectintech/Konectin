import React, { useState } from "react";

const Username = ({ next, data, handleChange }) => {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.name || data.name.length < 2) {
      setError("Please enter a valid name");
      return;
    }
    next();
  };
  return (
    <main className="flex flex-col justify-center mx-auto items-center gap-10">
      <div className="w-[96px] h-[96px] rounded-full flex items-center justify-center mx-auto bg-slate-300">
        <img src="." alt="" />
      </div>
      <h2 className="text-2xl  lg:text-3xl font-extrabold text-center">
        Hi! Welcome to <span className="text-[#FC670B]">Konectin</span> Resume
        Builder
      </h2>
      <p className="text-center text-sm text-[#3F4044] font-medium">
        My name is Jane, and I will be walking you through building your
        professional resume.
      </p>

      <p className=" font-bold text-center">May I know your name?</p>

      <form className="flex position relative items-center min-w-[320px] max-w-[722px]">
        <input
          type="text"
          placeholder="Enter your full name"
          value={data.name}
          onChange={handleChange("name")}
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

export default Username;
