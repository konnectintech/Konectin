import { useState } from "react";
import { Link } from "react-router-dom";
import { pricingCardBg } from "../../../../../assets";
import { IoCheckmark } from "react-icons/io5";

export default function Pricing() {
  const userData = [
    {
      popularity: "",
      tier: "One-time Silver",
      discount: null,
      oldPrice: null,
      price: 2,
      duration: "month",
      desc: "Best for starters who want to learn about our product",
      options: [
        "Resume Review & Edit",
        "Resume Rewrite",
        "Career Questionaire",
        "One-time Revision",
        "3-5 Working Days",
      ],
    },
    {
      popularity: "",
      tier: "One-time Gold",
      discount: 40,
      oldPrice: 2,
      price: 2,
      duration: "month",
      desc: "For two to four individuals who want to learn about our product",
      options: [
        "Resume Review & Edit",
        "Resume Rewrite",
        "Career Questionaire",
        "One-time Revision",
        "3-5 Working Days",
      ],
    },
  ];

  const businessData = [
    {
      popularity: "most popular",
      tier: "One-time Silver",
      discount: null,
      oldPrice: null,
      price: 2,
      duration: "month",
      desc: "For growing businesses and startups to make hiring process easier",
      options: [
        "Resume Review & Edit",
        "Resume Rewrite",
        "Career Questionaire",
        "One-time Revision",
        "3-5 Working Days",
      ],
    },
    {
      popularity: "",
      tier: "One-time Gold",
      discount: 40,
      oldPrice: 2,
      price: 2,
      duration: "month",
      desc: "For big companies and large enterprises to make hiring process easier",
      options: [
        "Resume Review & Edit",
        "Resume Rewrite",
        "Career Questionaire",
        "One-time Revision",
        "3-5 Working Days",
      ],
    },
  ];
  return (
    <section className="bg-process w-full mx-auto max-w-screen-2xl flex flex-col gap-12 md:gap-28 py-28 px-2 xxs:px-4 lg:px-16">
      <div className="flex flex-col gap-4 justify-center items-center">
        <p className="font-semibold text-4xl md:text-5xl w-11/12 md:w-full md:text-center">
          Simple, Transparent{" "}
          <span className="text-secondary-600">Pricing</span>
        </p>
        <p className="text-lg md:text-center w-11/12 md:text-xl md:w-9/12 ">
          At Konectin, we believe in providing value for your investment. Our
          Manual Resume Review service is designed to give you the competitive
          edge you need in your job search. Here's how our pricing works:.
        </p>
      </div>
      <div className="flex flex-col items-center gap-7 md:flex-row justify-between">
        {userData.map((item, index) => (
          <PricingCard
            key={index}
            item={item}
            bgColor="#fafafa"
            tierTxt="#1A1533"
            discountTxt="#F43E3E"
            discountBgColor="#FCCFCF"
            txt="#191A1F"
            durationTxt="#3F4044"
            descTxt="#66666A"
            linkBgColor="#403580"
            optionTxt="#3F4044"
            iconColor="#3F4044"
            iconBgColor="#EEEEEF"
          />
        ))}
        {businessData.map((item, index) => (
          <PricingCard
            key={index}
            item={item}
            bgColor="#403580"
            tierTxt="#F0EFF5"
            discountTxt="#F76E6E"
            discountBgColor="#332A66"
            txt="#FFFFFF"
            durationTxt="#F6F6F7"
            descTxt="#B2B3B4"
            linkBgColor="#FC670B"
            optionTxt="#E7E7E8"
            iconColor="#F5F5F5"
            iconBgColor="#332A66"
          />
        ))}
      </div>
    </section>
  );
}

export function PricingCard({
  item,
  bgColor,
  tierTxt,
  discountTxt,
  discountBgColor,
  txt,
  durationTxt,
  descTxt,
  linkBgColor,
  optionTxt,
  iconColor,
  iconBgColor,
}) {
  const [onHover, setOnHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      className={`h-[648px] w-10/12 md:w-72 bg-no-repeat bg-right rounded-2xl py-11 px-6 ${
        onHover ? "md:scale-110" : ""
      }`}
      style={{
        backgroundImage: `url(${pricingCardBg})`,
        backgroundColor: bgColor,
        boxShadow: "0px 40.74px 32.98px 0px #5243C24B",

      }}
    >
      <div className="h-full rounded-2xl w-full items-center flex flex-col gap-14">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <span className="text-xl" style={{ color: tierTxt }}>
              {item?.tier}
            </span>
            <span
              className={`capitalize text-xs rounded-3xl bg-error-100 text-error-700 font-bold items-center justify-center px-3 ${
                item?.discount ? "flex" : "hidden"
              }`}
              style={{ backgroundColor: discountBgColor, color: discountTxt }}
            >
              {item?.discount}% OFF
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2.5 items-center">
              <span
                className={`line-through text-secondary-600 text-3xl font-semibold ${
                  item?.oldPrice ? "block" : "hidden"
                }`}
              >
                ${item?.oldPrice}
              </span>
              <div>
                <span className="text-7xl font-bold" style={{ color: txt }}>
                  ${item?.price}
                </span>
                <span style={{ color: durationTxt }}> /{item?.duration}</span>
              </div>
            </div>
            <p className="text-neutral-300 text-sm" style={{ color: descTxt }}>
              {item.desc}
            </p>
          </div>
        </div>
        <Link
          to="/services/"
          className="rounded-lg text-white font-bold py-3.5 w-full flex items-center justify-center"
          style={{ backgroundColor: linkBgColor }}
        >
          Choose plan
        </Link>
        <div className="flex flex-col gap-4 w-full">
          <p className="font-semibold text-sm" style={{ color: txt }}>
            Includes:
          </p>
          {item.options.map((dataItem, index) => (
            <div key={index} className="flex gap-4">
              <span
                className="rounded-md h-6 w-6 p-1"
                style={{ backgroundColor: iconBgColor }}
              >
                <IoCheckmark style={{ color: iconColor }} />
              </span>
              <span className="" style={{ color: optionTxt }}>
                {dataItem}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
