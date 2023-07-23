import * as BsIcon from "react-icons/bs";
import { useTemplateContext } from "../../../../../middleware/resume";
import {
  ResumeTemplateSample1Image,
  ResumeTemplateSampleImage,
} from "../../../../../assets";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.css";

const TemplateOption = ({ sectionName }) => {
  const { templateData, onInputChange } = useTemplateContext();

  const handleSelect = (value) => {
    onInputChange({ section: "selectedTemplate", values: value });
  };

  const template_images = [
    {
      img: ResumeTemplateSample1Image,
      category: "modern",
    },
    {
      img: ResumeTemplateSampleImage,
      category: "modern",
    },
    {
      img: ResumeTemplateSample1Image,
      category: "modern",
    },
    {
      img: ResumeTemplateSampleImage,
      category: "modern",
    },
    {
      img: ResumeTemplateSample1Image,
      category: "artistic",
    },
    {
      img: ResumeTemplateSample1Image,
      category: "artistic",
    },
    {
      img: ResumeTemplateSampleImage,
      category: "artistic",
    },
    {
      img: ResumeTemplateSampleImage,
      category: "artistic",
    },
  ];

  return (
    <div className="flex flex-col items-start w-full max-w-[1000px] justify-start gap-4">
      <h3 className="text-xl lg:text-2xl font-bold capitalize">
        {sectionName}
      </h3>
      <div className="max-w-[100%] mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.7}
          breakpoints={{
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 2.7 },
          }}
        >
          {template_images
            .filter((record) => record.category === sectionName)
            .map((item, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="cursor-pointer flex justify-center items-center text-center"
                >
                  <div
                    className={`
                                ${
                                  templateData.selectedTemplate ===
                                  `${sectionName}_template_${index + 1}`
                                    ? "absolute w-full h-full top-0 bg-neutral-100 bg-opacity-60"
                                    : "-top-full"
                                } left-0 duration-500 flex items-center justify-center`}
                  >
                    {templateData.selectedTemplate ===
                      `${sectionName}_template_${index + 1}` && (
                      <BsIcon.BsCheckCircle
                        size="1.2rem"
                        className="absolute text-neutral-700 bg-primary-400 rounded-full"
                      />
                    )}
                  </div>
                  <img
                    src={item.img}
                    alt={`${sectionName}_template_${index + 1}`}
                    className="w-full h-full"
                    onClick={() =>
                      handleSelect(`${sectionName}_template_${index + 1}`)
                    }
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default TemplateOption;
