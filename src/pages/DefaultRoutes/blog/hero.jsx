import { blogHero, blurImage } from "../../../assets";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function HeroSection({ isLoading }) {
  return (
    <div className="flex flex-col gap-4 text-center">
      <div>
        <h1
          className={
            isLoading
              ? "bg-neutral-500 text-neutral-500 w-fit mx-auto mb-1"
              : "text-3xl mb-1"
          }
        >
          Welcome to{" "}
          <font
            className={
              isLoading
                ? "bg-neutral-500 text-neutral-500"
                : "text-secondary-600"
            }
          >
            Konectin
          </font>{" "}
          Blog
        </h1>
        <p className={isLoading ? "bg-neutral-500 w-fit mx-auto" : ""}>
          Career talks, discussions, posts and articles.
        </p>
      </div>
      {isLoading ? (
        <img src={blurImage} alt=" Welcome to Konectin Blog" />
      ) : (
        <LazyLoadImage
          effect="blur"
          src={blogHero}
          alt=" Welcome to Konectin Blog"
        />
      )}
    </div>
  );
}

export default HeroSection;
