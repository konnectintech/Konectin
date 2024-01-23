import { blogHero, blogHero1, blogHero2, blogHero3 } from "../../../assets";
import { LazyLoadImage } from "react-lazy-load-image-component";

// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "react-lazy-load-image-component/src/effects/blur.css";

function HeroSection({ isLoading }) {
  const images = [blogHero, blogHero1, blogHero2, blogHero3];
  return (
    <div className="flex flex-col gap-4 text-center">
      <div className={isLoading ? "text-neutral-500" : ""}>
        <h1 className="text-3xl mb-1">
          Welcome to{" "}
          <font
            className={isLoading ? "text-neutral-500" : "text-secondary-600"}
          >
            Konectin
          </font>{" "}
          Blog
        </h1>
        <p>Career talks, discussions, posts and articles.</p>
      </div>
      <div className="bg-neutral-900">
        <Swiper
          style={{
            "--swiper-pagination-color": "#FD853C",
            "--swiper-pagination-bullet-inactive-color": "#fff",
            "--swiper-pagination-bullet-inactive-opacity": "0.7",
            "--swiper-pagination-bullet-size": "6px",
            "--swiper-pagination-bullet-horizontal-gap": "2px",
          }}
          // install Swiper modules
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="max-h-[400px] h-full relative rounded-md"
        >
          {images.map((image) => (
            <SwiperSlide key={image} className="relative rounded-md">
              <LazyLoadImage
                className="block h-full w-full bg-cover rounded-md"
                effect="blur"
                src={image}
                alt="Welcome to Konectin Blog"
              />
              {/* <h1 className="absolute text-4xl bottom-20 lg:bottom-1/2 font-bold px-6 text-start text-white z-50">
                Working Together To <br /> Keep{" "}
                <span className="text-secondary-500">Konectin</span> Safe
              </h1> */}
              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-black from-25% sm:from-45% to-transparent" />
            </SwiperSlide>
          ))}
          <h1 className="absolute sm:text-4xl !leading-normal bottom-8 sm:bottom-12 font-bold px-6 text-start text-white z-50">
            Working Together To <br /> Keep{" "}
            <span className="text-secondary-500">Konectin</span> Safe
          </h1>
        </Swiper>
      </div>
    </div>
  );
}

export default HeroSection;
