import { useState } from "react";
// import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <section className="bg-process w-full mx-auto max-w-screen-2xl flex flex-col gap-12 md:gap-28 py-28 px-2 xxs:px-4 lg:px-16">
      <div className="flex flex-col gap-4 justify-center items-center">
        <p className="font-medium text-4xl md:text-5xl">
          Simple, Transparent{" "}
          <span className="text-secondary-600">Pricing</span>
        </p>
        <p className="text-lg text-center w-11/12 md:text-xl md:w-9/12 ">
          At Konectin, we believe in providing value for your investment. Our
          Manual Resume Review service is designed to give you the competitive
          edge you need in your job search. Here's how our pricing works:.
        </p>
      </div>
      {/* <div className="flex flex-col md:flex-row md:h-[400px] justify-between gap-20">
        {data.map((item, index) => (
          <PricingCard key={index} item={item} />
        ))}
      </div> */}
    </section>
  );
}

export function PricingCard({ item }) {
  const [onHover, setOnHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      className={`md:w-[392px] min-w-80 ${
        onHover ? "rounded-2xl p-0.5 bg-gradient" : ""
      }`}
    >
      <div
        className={`md:h-full rounded-2xl ${
          onHover ? "bg-primary-400/90" : "bg-primary-600"
        } w-full items-center flex flex-col gap-6 md-gap-8 pt-16 pb-14 md:pt-12 md:pb-8 px-4 text-white`}
      >
        <div className="w-12 h-12 md:w-20 md:h-20 flex p-[3px] rounded-full bg-gradient">
          <div
            className={`h-full w-full flex items-center justify-center ${
              onHover ? "bg-white" : "bg-primary-600"
            }   rounded-full`}
          >
            {item.icon}
          </div>
        </div>
        <div className="w-11/12 md:w-full flex flex-col gap-1 md:gap-8 items-center">
          <p className="text-2xl font-semibold">{item.title}</p>
          <p className="text-center w-8/12 md:w-full box-border">
            {item.content}
          </p>
        </div>
      </div>
    </div>
  );
}
