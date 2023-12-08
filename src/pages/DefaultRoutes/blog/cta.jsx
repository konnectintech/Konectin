import { useState } from "react";
import * as IoIcons from "react-icons/io";
import { BlogCTA1Image, BlogCTA2Image, BlogCTAImage } from "../../../assets";

function CTASection() {
  const [cta, setCta] = useState(2);

  const images = [
    { src: BlogCTAImage, alt: "Get Your Dream Job With The Perfect Resume" },
    { src: BlogCTA1Image, alt: "Working Together To Keep Konectin Safe" },
    { src: BlogCTA2Image, alt: "Study and Work" },
  ];

  return (
    <div className="w-full text-center space-y-4">
      <p className="text-lg">Related Konectin Products</p>
      <div className="w-full relative">
        <div className="w-full flex overflow-hidden gap-2 sm:gap-3 md:gap-6 items-stretch justify-center">
          {images.map((image, id) => (
            <img
              key={id}
              className={`${
                id === cta
                  ? "w-[60%] order-2"
                  : id === cta + 1 || (id === 0 && cta + 1 >= 3)
                  ? "order-3 grayscale-[50%] opacity-60"
                  : "grayscale-[50%] opacity-60"
              }`}
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>
        <div
          className="absolute top-1/2 -translate-y-1/2 left-[6%] md:left-[10%] w-8 h-8 flex items-center justify-center bg-neutral-500 rounded-full hover:bg-white duration-500 cursor-pointer"
          onClick={() => setCta((prev) => (prev === 0 ? 2 : prev - 1))}
        >
          <IoIcons.IoIosArrowBack size="1.3rem" />
        </div>
        <div
          className="absolute top-1/2 -translate-y-1/2 right-[6%] md:right-[10%] w-8 h-8 flex items-center justify-center bg-neutral-500 rounded-full hover:bg-white duration-500 cursor-pointer"
          onClick={() => setCta((prev) => (prev >= 2 ? 0 : prev + 1))}
        >
          <IoIcons.IoIosArrowForward size="1rem" />
        </div>
      </div>
    </div>
  );
}

export default CTASection;
