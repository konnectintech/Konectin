import { Link } from "react-router-dom";
import "./review.css";
import { BiCommentDetail } from "react-icons/bi";
import { MdAutoGraph } from "react-icons/md";
import { BiCandles } from "react-icons/bi";
import { useState } from "react";
import { CustomButton } from "../../../../../components/button";

export default function Choice() {
  const data = [
    {
      icon: (
        <BiCommentDetail className="w-5 h-5 md:w-8 md:h-8 text-secondary-600" />
      ),
      title: "Expert feedback",
      content:
        "Take advantage of Al technology and the knowledge of industry experts. Our seasoned professionals provide tailored feedback to help you improve your resume and make it stand out to potential employers. ",
    },
    {
      icon: (
        <MdAutoGraph className="w-5 h-5 md:w-8 md:h-8 text-secondary-600" />
      ),
      title: "Affordable Price",
      content:
        "Quality résumé review shouldn't break the bank. We offer top-notch services at a price that fits your budget ",
    },
    {
      icon: <BiCandles className="w-5 h-5 md:w-8 md:h-8 text-secondary-600" />,
      title: "Detailed analysis",
      content:
        "We carefully review every piece of information on your resume. Our in-depth review ensures that your skills and experiences are properly highlighted, giving your resume the boost it needs. ",
    },
  ];
  return (
    <section className="bg-primary-600 ">
      <div className="w-full mx-auto max-w-screen-2xl flex flex-col gap-12 py-28 px-7 lg:px-16">
        <div className="flex flex-col gap-4 justify-center items-center text-white">
          <h4 className="font-medium !leading-snug text-3xl md:text-4xl">
            Why Chose <span className="text-secondary-600">Konectin?</span>
          </h4>
          <p className="text-center w-11/12 md:w-9/12">
            Leverage the expertise of industry professionals and AI technology.
            Our seasoned experts offer tailored feedback to refine your resume,
            ensuring it captures the attention of potential employers
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:h-[400px] justify-between gap-20">
          {data.map((item, index) => (
            <ChoiceCard key={index} item={item} />
          ))}
        </div>
        <Link to="/services/resume/review" className="mx-auto md:w-72 block">
          <CustomButton primary colorType="secondary">
            Review Your Resume Now
          </CustomButton>
        </Link>
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
      className={`md:w-[392px] min-w-80 select-none ${
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
