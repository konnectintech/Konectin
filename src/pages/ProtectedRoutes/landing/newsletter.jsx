import { useState } from "react";
import { newsletterBg } from "../../../assets";
import { NotifyForm } from "../../../components/form";

function NewsLetter() {
  const [errorState, setErrorState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleNewsLetter = (data) => {
    console.log(data);
  };

  return (
    <section className="relative w-11/12 xs:w-10/12 md:w-8/12 max-w-screen-md h-[40vh] min-h-[395px] mx-auto mt-16">
      <div className="absolute z-10 w-full left-1/2 h-[340px] -translate-x-1/2">
        <img
          className="w-full h-full max-h-[340px]"
          src={newsletterBg}
          alt="Newsletter"
        />
      </div>
      <div className="relative z-30 text-center pt-8 text-white px-4">
        <h1 className="text-lg xxs:text-2xl sm:text-3xl mb-3">
          Subscribe to our newsletter
        </h1>
        <p className="text-xs xxs:text-sm sm:text-md">
          Stay updated on our latest news. We promise only valuable mails and we
          will not spam you with irrelevant content.
        </p>
        <div className="w-full sm:w-10/12 max-w-screen-md rounded-lg mx-auto flex gap-2 items-center justify-center pl-4 sm:pl-8 pr-2 sm:pr-4 py-1 md:py-3 bg-white mt-10">
          <NotifyForm
            handleSubmit={handleNewsLetter}
            formFor="Subscribe"
            errorState={errorState}
            errorMessage={errorMessage}
          />
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
