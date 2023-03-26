import React from "react";
import { Link } from "react-router-dom";

const StartBuilder = () => {
  return (
    <main className="bg-[#EEEEEE]">
      <section className=" flex flex-col relative">
        <div className=" w-6/12 mx-auto max-w-screen-xl flex flex-col justify-center items-center gap-16 m-16 p-20 border border-[#d86842] bg-[#ffffff]">
          <h1 className="-mt-6 text-3xl leading-tight font-semibold md:leading-snug">
            Create New Resume?
          </h1>
          <p className=" -mt-8 w-[420px] tracking-wider text-sm text-center text-[#3f4044]">
            By selecting create new resume, your content will be permanently
            deleted.
          </p>
          <div className="flex -mt-6">
            <Link
              to="/resume/builder"
              className=" bg-[#f5f5f5] border border-[#665d99] py-4 px-2 mr-3 flex items-center justify-center text-[12px] rounded text-[#332a66]"
            >
              CREATE NEW RESUME
            </Link>
            <Link
              to="/resume/builder"
              className=" bg-[#F11010] p-4 ml-3 flex items-center justify-center text-[12px] rounded text-[#f5f5f5]"
            >
              CONTINUE EDITING
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StartBuilder;
