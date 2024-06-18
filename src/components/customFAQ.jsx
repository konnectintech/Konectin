import { useState } from "react";
import { plusBlack, plusWhite, closeBlack, closeWhite } from "../assets";
import { Link } from "react-router-dom";

export default function CustomFAQ({ data }) {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-primary-500">
      <div className="w-full lg:w-11/12 relative z-10 mx-auto max-w-screen-2xl flex flex-col md:flex-row md:justify-between gap-10 lg:gap-12 py-16 px-2 xxs:px-4 lg:px-0">
        <div className="flex flex-col gap-10 text-white md:w-5/12">
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-4xl leading-tight">
              Frequently Asked Questions
            </h4>
            <p className="text-sm">
              Still you have any questions? <br /> Contact our Team via
              support@konectin.org
            </p>
          </div>
          <Link
            to="/faq"
            className="bg-secondary-600 px-5 py-3.5 md:py-4 md:px-6 rounded-md md:rounded-lg w-fit text-xs text-center"
          >
            See All FAQ's
          </Link>
        </div>
        <div className="flex flex-col gap-5 md:w-7/12">
          {data.map((item, index) => (
            <FaqCard
              key={index}
              item={item}
              active={active === index}
              setActive={() => setActive(active === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqCard({ item, index, active, setActive }) {
  return (
    <div
      key={index}
      className="flex flex-col gap-4 py-4 px-6 bg-whites-200 md:bg-inherit md:text-white rounded-xl border border-solid border-whites-200 md:border-neutral-500 cursor-pointer"
      onClick={setActive}
    >
      <div className="flex items-center justify-between gap-7">
        <p className="w-fit">{item.question}</p>
        <p className="flex items-center justify-center bg-neutral-800 w-10 h-10 p-2.5 rounded-md md:hidden">
          <img
            src={active ? closeBlack : plusBlack}
            width={20}
            height={20}
            style={{
              minWidth: "20px",
              minHeight: "20px",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
            alt=""
          />
        </p>
        <p className="hidden md:flex items-center justify-center w-6 h-6 rounded-md border-2 border-solid">
          <img
            src={active ? closeWhite : plusWhite}
            style={{
              minWidth: "20px",
              minHeight: "20px",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
            alt="Open/close"
          />
        </p>
      </div>
      {active && (
        <div
          className={`${
            active ? "text-sm mb-2 text-grey md:text-neutral-700" : "hidden"
          }`}
        >
          <p dangerouslySetInnerHTML={{ __html: item.answer }} />
        </div>
      )}
    </div>
  );
}
