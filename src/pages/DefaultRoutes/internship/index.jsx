import { useState } from "react";
import { comingSoon, internHero } from "../../../assets";
import NotifyForm from "../../../components/form/notifyForm";
import "./index.css";

function Internship() {
  const [errorState, setErrorState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    navigate("/resume/options");
  };
  return (
    <section className="min-h-[70vh]">
      <div className="w-11/12 mx-auto max-w-screen-2xl min-h-[70vh] flex flex-col md:gap-16 lg:gap-48 md:flex-row items-center py-32">
        <div className="flex flex-col gap-6 font-semibold w-full my-auto md:w-9/12 lg:w-6/12">
          <div>
            <div
              style={{
                backgroundImage: `url("${comingSoon}")`,
              }}
              className="image-move mb-3"
            ></div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl leading-tight">
              <font className="text-secondary-500">Konectin</font> Internship
            </h1>
          </div>
          <p className="text-3xl xl:text-4xl">
            Get Notified When <br /> We Launch
          </p>
          <div className="w-full max-w-[550px] border border-primary-100 rounded-md pl-3 pr-2 py-3">
            <NotifyForm
              handleSubmit={handleSubmit}
              formFor="Notify Me"
              errorState={errorState}
              errorMessage={errorMessage}
            />
          </div>
        </div>

        <picture className="hidden md:block">
          <img src={internHero} alt="Konectin Internship" />
        </picture>
      </div>
    </section>
  );
}

export default Internship;
