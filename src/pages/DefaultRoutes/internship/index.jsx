// import axios from "axios";
// import { useState } from "react";
import { internHero } from "../../../assets";
// import NotifyForm from "../../../components/form/notifyForm";
// import { NotifyModal } from "../../../components/form/modal";
// import { useNavigate } from "react-router-dom";
import "./index.css";
import { motion } from "framer-motion";
import SectionWrapper from "../../../components/animation/sectionWrapper";
import { slideIn, textVariantUp } from "../../../utils/motion";
import { Link } from "react-router-dom";

function Internship() {
  // const [state, setState] = useState({
  //   error: false,
  //   header: "",
  //   p1: "",
  //   p2: "",
  // });
  // const [loading, setLoading] = useState(false);
  // const url = import.meta.env.VITE_CLIENT_SERVER_URL;

  // const handleSubmit = async (data) => {
  //   setLoading(true);

  //   try {
  //     await axios.post(`${url}/internshipMail`, { email: data });

  //     const newState = {
  //       error: false,
  //       header: (
  //         <>
  //           <font className="font-bold text-[18px]">Congratulations</font>,
  //           you're one step closer to your dream internship with{" "}
  //           <font className="text-secondary-600">Konectin</font> 🎉
  //         </>
  //       ),
  //       p1: "We'll notify you as soon as the internship section of our platform is live.",
  //       p2: (
  //         <>
  //           Keep an eye on your inbox for updates and prepare to take your
  //           career to the next level! 🚀. In the meantime, keep honing those
  //           skills and getting ready to connect with potential employers from
  //           around the world with{" "}
  //           <font className="text-secondary-600">Konectin!</font> 😎
  //         </>
  //       ),
  //     };
  //     setState(newState);
  //   } catch (err) {
  //     let newState;
  //     if (err.response.data.message === "You already subscribed") {
  //       newState = {
  //         error: false,
  //         header: (
  //           <>
  //             Dear <font className="text-secondary-600">Friend,</font> You have
  //             previously subscribed to our newsletter
  //           </>
  //         ),
  //         p1: (
  //           <>
  //             <font className="text-secondary-600">Thanks</font> for putting us
  //             in mind and trying to subscribe again 😎
  //           </>
  //         ),
  //         p2: "However you can always refer us to your friends and family to also enjoy our benefits 👍",
  //       };
  //     } else {
  //       newState = {
  //         error: true,
  //         header: (
  //           <>
  //             <font className="text-secondary-600">Oops!</font> Something went
  //             wrong 🥴
  //           </>
  //         ),
  //         p1: (
  //           <>
  //             Don't worry, our team of tech wizards is on it. Please try again
  //             later or contact our support team at{" "}
  //             <font className="text-secondary-600">info@konectin.org.</font> 😎
  //           </>
  //         ),
  //         p2: "In the meantime, keep working hard and don't forget to smile 🙂 - your dream internship is just around the corner! 👍",
  //       };
  //     }

  //     setState(newState);
  //   }
  //   setLoading(false);
  // };

  // const navigate = useNavigate();

  return (
    <section className="min-h-[70vh] overflow-hidden">
      {/* {loading && (
        <div className="fixed no-scrollbar w-full h-screen top-0 left-0 z-[100] flex">
          <div className="bg-neutral-100 opacity-70 absolute w-full h-full"></div>
          <div className="animate-pulse m-auto bg-white p-4 rounded-full">
            <img src={konectinLogo} alt="" />
          </div>
        </div>
      )} */}
      <div className="w-11/12 mx-auto max-w-screen-2xl min-h-[70vh] flex flex-col md:gap-16 lg:gap-48 md:flex-row items-center py-32">
        <div className="flex flex-col gap-6 w-full my-auto md:w-9/12 lg:w-6/12">
          <div>
            {/* <div
              style={{
                backgroundImage: `url("${comingSoon}")`,
              }}
              className="image-move mb-3"
            ></div> */}
            <motion.p
              variants={textVariantUp()}
              className="text-primary-600 flex gap-2 items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="10"
                viewBox="0 0 34 10"
                fill="none"
              >
                <rect
                  width="34"
                  height="10"
                  transform="translate(0 0.892578)"
                  fill="white"
                />
                <line
                  x1="7.75"
                  y1="5"
                  x2="26.25"
                  y2="5"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>{" "}
              Experience, Learn, Innovate Across All Domains.
            </motion.p>
            <motion.h1
              variants={textVariantUp(0.4)}
              className="text-4xl md:text-5xl font-semibold !leading-tight mt-2"
            >
              Ignite Your Career with{" "}
              <span className="text-secondary-500">Konectin's</span> Internship
              Program
            </motion.h1>
          </div>
          <motion.p variants={textVariantUp(0.6)}>
            Join Konectin's Internship Program and embark on a journey of
            learning and growth. Gain practical experience, work with seasoned
            professionals, and contribute to our mission of revolutionizing the
            tech landscape in Africa. Are you ready to make your mark and
            accelerate your career?
          </motion.p>
          <motion.div variants={textVariantUp(0.8)}>
            <Link
              className="rounded-md w-fit block bg-secondary-500 py-4 px-6 text-white"
              to="intern-application"
            >
              Begin Your Journey Now
            </Link>
            {/* <NotifyForm handleSubmit={handleSubmit} formFor="Notify Me" /> */}
          </motion.div>
        </div>

        <motion.picture
          variants={slideIn("rtl", "spring", 0.1, 1)}
          className="hidden md:block sm:[--left-right:150%] [--left-right:-150%]"
        >
          <img src={internHero} alt="Konectin Internship" />
        </motion.picture>
      </div>

      {/* {state.header && (
        <div className="fixed top-0 w-full h-full z-50 flex items-center justify-center">
          <div
            onClick={() => setState((prev) => ({ ...prev, header: "" }))}
            className="bg-neutral-100 opacity-70 absolute w-full h-full"
          />
          <NotifyModal
            error={state.error}
            header={state.header}
            paragraph1={state.p1}
            paragraph2={state.p2}
            click={() => navigate("/")}
          />
        </div>
      )} */}
    </section>
  );
}

export default SectionWrapper(Internship, "internship");
