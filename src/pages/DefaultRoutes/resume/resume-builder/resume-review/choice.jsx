import { Link } from "react-router-dom";
import "./review.css";
import { BiCommentDetail } from "react-icons/bi";
import { MdAutoGraph } from "react-icons/md";
import { BiCandles } from "react-icons/bi";
import { useState } from "react";

export default function Choice() {
  const data = [
    {
      icon: <BiCommentDetail className="w-8 h-8 text-secondary-600" />,
      title: "Expert feedback",
      content:
        "Take advantage of Al technology and the knowledge of industry experts. Our seasoned professionals provide tailored feedback to help you improve your resume and make it stand out to potential employers. ",
    },
    {
      icon: <MdAutoGraph className="w-8 h-8 text-secondary-600" />,
      title: "Affordable Price",
      content:
        "Quality résumé review shouldn't break the bank. We offer top-notch services at a price that fits your budget ",
    },
    {
      icon: <BiCandles className="w-8 h-8 text-secondary-600" />,
      title: "Detailed analysis",
      content:
        "We carefully review every piece of information on your resume. Our in-depth review ensures that your skills and experiences are properly highlighted, giving your resume the boost it needs. ",
    },
  ];
  return (
    <section className="bg-primary-600 ">
      <div className="w-full mx-auto max-w-screen-2xl flex flex-col gap-28 py-28 px-2 xxs:px-4 lg:px-16">
        <div className="flex flex-col gap-4 justify-center items-center text-white">
          <p className="font-medium text-5xl ">
            Why Chose <span className="text-secondary-600">Konectin?</span>
          </p>
          <p className="text-xl text-center w-9/12">
            Leverage the expertise of industry professionals and AI technology.
            Our seasoned experts offer tailored feedback to refine your resume,
            ensuring it captures the attention of potential employers
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-20">
          {data.map((item, index) => (
            <ChoiceCard key={index} item={item} />
          ))}
        </div>
        <div>
          <Link>Review Your Resume Now</Link>
        </div>
      </div>
    </section>
  );
}

export function ChoiceCard({ item }) {
  const [onHover, setOnHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      className={`md:w-[392px] min-w-80 ${
        onHover ? "bg-gradient rounded-2xl p-0.5" : ""
      }`}
    >
      <div className="h-full rounded-2xl bg-primary-600 w-full items-center flex flex-col gap-6 md-gap-8 pt-12 pb-8 px-3.5 text-white">
        <div className="w-20 h-20 flex p-[3px] rounded-full bg-gradient">
          <div
            className={`h-full w-full flex items-center justify-center ${
              onHover ? "bg-white" : "bg-primary-600"
            }   rounded-full`}
          >
            {item.icon}
          </div>
        </div>
        <div className="flex flex-col gap-1 md:gap-8 items-center">
          <p className="text-2xl font-semibold">{item.title}</p>
          <p className="text-center">{item.content}</p>
        </div>
      </div>
    </div>
  );
}
