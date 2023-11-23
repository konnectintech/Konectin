import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";
import { konectinLogo, newsletterBg } from "../../../assets";
import { NotifyForm } from "../../../components/form";
import { NotifyModal } from "../../../components/form/modal";
import SectionWrapper from "../../../components/animation/sectionWrapper";
import { textVariantUp } from "../../../utils/motion";

function NewsLetter() {
  const [state, setState] = useState({
    error: false,
    header: "",
    p1: "",
    p2: "",
  });
  const [loading, setLoading] = useState(false);
  const url = import.meta.env.VITE_CLIENT_SERVER_URL;

  const handleNewsLetter = async (data) => {
    setLoading(true);
    try {
      await axios.post(`${url}/subscribeMail`, { email: data });
      const newState = {
        error: false,
        header: (
          <>
            <span className="span-bold text-[18px]">Congratulations</span>,
            you're now part of the{" "}
            <span className="text-secondary-600">Konectin</span> family 🎉
          </>
        ),
        p1: "Thank you for subscribing to our newsletter. Keep an eye on your inbox for the first email from us. Stay tuned for exciting updates! 📩",
        p2: "We can't wait to share with you all the latest job opportunities, career advice, juicy job-seeking tips, sneak peeks, and special offers straight to your inbox.",
      };
      setState(newState);
    } catch (err) {
      console.log(err);
      const newState = {
        error: true,
        header: (
          <>
            <span className="text-secondary-600">Oops!</span> Something went
            wrong 🥴
          </>
        ),
        p1: "",
        p2: "It looks like our newsletter subscription system is on a coffee break. Please try again later, or go grab a cup of coffee with us and let's try again together!",
      };
      setState(newState);
    }
    setLoading(false);
  };

  const handleClick = () => {
    setState({
      error: false,
      header: "",
      p1: "",
      p2: "",
    });
  };

  return (
    <section className="relative w-11/12 xs:w-10/12 md:w-8/12 max-w-screen-md h-[40vh] min-h-[395px] mx-auto mt-16">
      {loading && (
        <div className="fixed no-scrollbar w-full h-screen top-0 left-0 z-[100] flex">
          <div className="bg-neutral-100 opacity-70 absolute w-full h-full"></div>
          <div className="animate-pulse m-auto bg-white p-4 rounded-full">
            <img src={konectinLogo} alt="" />
          </div>
        </div>
      )}
      <motion.div
        variants={textVariantUp()}
        className="absolute z-10 w-full h-[340px]"
      >
        <img
          className="w-full h-full max-h-[340px]"
          src={newsletterBg}
          alt="Newsletter"
        />
      </motion.div>
      <motion.div
        variants={textVariantUp()}
        className="relative z-30 text-center pt-8 text-white px-4"
      >
        <h1 className="text-lg xxs:text-2xl sm:text-3xl mb-3">
          Subscribe to our newsletter
        </h1>
        <p className="text-xs xxs:text-sm sm:text-md">
          Stay up-to-date with Konectin's latest news by subscribing to our
          newsletter. Our emails are valuable and spam-free.
        </p>
        <div className="w-full sm:w-10/12 max-w-screen-md rounded-lg mx-auto flex gap-2 items-center justify-center pl-4 sm:pl-8 pr-2 sm:pr-4 py-1 md:py-3 bg-white mt-10">
          <NotifyForm handleSubmit={handleNewsLetter} formFor="Subscribe" />
        </div>
      </motion.div>

      {state.header && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center">
          <div
            onClick={() => setState((prev) => ({ ...prev, header: "" }))}
            className="bg-neutral-100 opacity-70 absolute w-full h-full"
          />
          <NotifyModal
            error={state.error}
            header={state.header}
            paragraph1={state.p1}
            paragraph2={state.p2}
            click={handleClick}
          />
        </div>
      )}
    </section>
  );
}

export default SectionWrapper(NewsLetter, "newsletter");
