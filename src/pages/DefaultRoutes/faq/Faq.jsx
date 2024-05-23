import React, { useState } from "react";
import { chevronUpArrow, chevronDownArrow } from "../../../assets";
import { FAQ, linkHead } from "./data";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Faq() {
  const [isOpen, setOpen] = useState([]);
  const [active, setActive] = useState(0);
  const [headLink, setHeadLink] = useState(false);

  const handleFAQ = (index) => {
    setOpen((prev) =>
      prev.map((item, id) => {
        if (id === index) {
          return !item;
        }
        return item;
      })
    );
  };

  useEffect(() => {
    const openData = new Array(FAQ[active].length).fill(false);
    setOpen(openData);
  }, [active]);

  return (
    <div className="flex flex-col md:flex-row bg-neutral-800 pt-40 sm:pt-32 relative min-h-screen">
      <div className="w-full md:w-4/12 lg:max-w-[250px] md:min-h-[60vh] md:bg-neutral-1000 md:py-8 px-4 space-y-6">
        <h1 className="text-xl font-bold md:px-4">FAQs</h1>
        <div>
          <div className="md:hidden w-full flex flex-col gap-3 text-sm">
            <div
              onClick={() => setHeadLink((prev) => !prev)}
              className="w-full duration-500 bg-primary-600 text-white py-4 px-4 rounded-t-lg cursor-pointer select-none flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                {linkHead[active].icon}
                <p>{linkHead[active].name}</p>
              </div>
              <div className="cursor-pointer px-2">
                <img
                  src={chevronUpArrow}
                  className={`${
                    headLink ? "rotate-180 duration-300 " : ""
                  }w-5 h-5`}
                  alt="scroll up and down"
                />
              </div>
            </div>
          </div>

          {/* Desktop */}
          <div
            className={`${
              headLink ? "flex bg-neutral-1000" : "hidden"
            } md:flex flex-col md:gap-3 text-sm`}
          >
            {linkHead.map((item, index) => (
              <div
                key={item.name + index}
                onClick={() => {
                  setActive(index);
                  setHeadLink((prev) => !prev);
                }}
                className={`flex gap-2 items-center px-4 py-3 cursor-pointer duration-100 ${
                  active === index
                    ? "text-white bg-primary-600 md:rounded-lg"
                    : "bg-transparent"
                }`}
              >
                <div className="text-lg">{item.icon}</div>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8 flex-1 mt-6 pb-12">
        <p className="md:text-lg font-bold md:bg-neutral-1000 py-4 px-4 md:px-6 rounded-md md:py-8">
          {linkHead[active].name}
        </p>

        <ol className="list-decimal md:mt-8 list-inside space-y-4">
          {FAQ[active].map((value, index) => {
            return (
              <div
                className="w-full space-y-3"
                onClick={() => handleFAQ(index)}
                key={index}
              >
                <div
                  className={`w-full duration-500 ${
                    isOpen[index]
                      ? "bg-primary-600 text-white"
                      : "bg-neutral-1000"
                  } py-4 px-4 rounded-lg cursor-pointer select-none flex items-center justify-between`}
                >
                  <li>{value.question}</li>
                  <div className="cursor-pointer px-2">
                    <img
                      src={isOpen[index] ? chevronUpArrow : chevronDownArrow}
                      className="w-5 h-5"
                      alt="scroll up and down"
                    />
                  </div>
                </div>
                {isOpen[index] && (
                  <div className="w-full bg-neutral-1000 p-3 md:p-4 rounded-lg cursor-pointer select-none flex flex-col justify-between gap-2 md:gap-4">
                    <p>{value.head}</p>
                    <p className="text-sm max-md:mb-4">{value.answer}</p>
                    {value.link && (
                      <Link className="bg-primary-500 px-3 py-2 w-fit text-white text-sm rounded">
                        Learn more
                      </Link>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default Faq;
