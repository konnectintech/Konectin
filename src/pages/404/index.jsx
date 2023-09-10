import React from "react";
import { Link } from "react-router-dom";
import { backgroundVideo } from "../../assets/data";

function ErrorPage() {
  return (
    <section className="flex flex-col justify-center items-center py-24">
      <section className="w-full h-full relative">
        <h1 className="w-full h-full text-[100px] font-black tracking-[2rem] mix-blend-multiply">
          OOPS!
        </h1>
      </section>
      <div>
        <h2 className="text-2xl md:text-4xl">404 - PAGE NOT FOUND</h2>
        <p className="py-6">
          The page you are looking for might have been remoeved <br /> had its
          name changed or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="text-white hover:bg-secondary-500 bg-secondary-400 shadow-sm shadow-secondary-600 py-3 px-6"
        >
          GO TO HOME PAGE
        </Link>
      </div>
    </section>
  );
}

export default ErrorPage;
