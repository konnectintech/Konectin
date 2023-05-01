import axios from "axios";
import { useState } from "react";
import { comingSoon, internHero } from "../../../assets";
import NotifyForm from "../../../components/form/notifyForm";
import { NotifyModal } from "../../../components/form/modal";
import { useNavigate } from "react-router-dom";
import "./index.css";

function Internship() {
  const [state, setState] = useState({
    error: false,
    header: "",
    p1: "",
    p2: "",
  });

  const handleSubmit = async (data) => {
    try {
      await axios.post(
        "https://konectin-backend-hj09.onrender.com/user/internshipMail",
        { email: data }
      );
      const newState = {
        error: true,
        header: (
          <>
            <font className="font-bold text-[18px]">Congratulations</font>,
            you're one step closer to your dream internship with{" "}
            <font className="text-secondary-600">Konectin</font> 🎉
          </>
        ),
        p1: "We'll notify you as soon as the internship section of our platform is live.",
        p2: (
          <>
            Keep an eye on your inbox for updates and prepare to take your
            career to the next level! 🚀. In the meantime, keep honing those
            skills and getting ready to connect with potential employers from
            around the world with{" "}
            <font className="text-secondary-600">Konectin!</font> 😎
          </>
        ),
      };
      setState(newState);
    } catch (err) {
      const newState = {
        error: true,
        header: (
          <>
            <font className="text-secondary-600">Oops!</font> Something went
            wrong 🥴
          </>
        ),
        p1: (
          <>
            Don't worry, our team of tech wizards is on it. Please try again
            later or contact our support team at{" "}
            <font className="text-secondary-600">support@konectin.com.</font> 😎
          </>
        ),
        p2: "In the meantime, keep working hard and don't forget to smile 🙂 - your dream internship is just around the corner! 👍",
      };
      setState(newState);
    }
  };

  const navigate = useNavigate();

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
            <NotifyForm handleSubmit={handleSubmit} formFor="Notify Me" />
          </div>
        </div>

        <picture className="hidden md:block">
          <img src={internHero} alt="Konectin Internship" />
        </picture>
      </div>
      {state.header && (
        <div className="fixed top-0 w-full h-full z-50 bg-neutral-500 flex items-center justify-center">
          <NotifyModal
            error={state.error}
            header={state.header}
            paragraph1={state.p1}
            paragraph2={state.p2}
            click={() => navigate("/")}
          />
        </div>
      )}
    </section>
  );
}

export default Internship;
