import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <section className="flex flex-col justify-center items-center py-24">
      <section className="relative">
        <video
          className="absolute object-cover w-full h-full left-0 top-0"
          src=""
          autoPlay
          loop
          muted
        ></video>
        <p className="w-full h-full text-[100px] font-black tracking-[2rem] mix-blend-multiply">
          OOPS!
        </p>
      </section>
      <div>
        <h2 className="text-2xl md:text-4xl">404 - PAGE NOT FOUND</h2>
        <p className="py-6">
          The page you are looking for might have been remoeved <br /> had its
          name changed or is temporarily unavailable.
        </p>
        <Link className="text-white bg-secondary-400 shadow-sm shadow-secondary-600 py-3 px-6">
          GO TO HOMEPAGE
        </Link>
      </div>
    </section>
  );
}

export default ErrorPage;
