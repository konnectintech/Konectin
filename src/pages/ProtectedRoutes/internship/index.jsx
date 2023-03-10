import React, { useState } from "react";
import NotifyForm from "../../../components/form/notifyForm";

function Internship() {
  const [errorState, setErrorState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    navigate("/resume/options");
  };
  return (
    <section className="min-h-[90vh]">
      <div className="w-11/12 mx-auto max-w-screen-2xl min-h-[90vh] flex flex-col gap-16 md:flex-row items-center">
        <div className="flex flex-col gap-6 font-semibold">
          - Konectin Internship
          <h1 className="text-4xl lg:text-6xl xl:text-7xl leading-tight">
            <font className="text-secondary-500">Konectin</font> Internship
          </h1>
          <p className="text-3xl xl:text-4xl">
            Get Notified When <br /> We Launch
          </p>
          <NotifyForm
            handleSubmit={handleSubmit}
            formFor="Notify Me"
            errorState={errorState}
            errorMessage={errorMessage}
          />
        </div>
        <picture></picture>
      </div>
    </section>
  );
}

export default Internship;
