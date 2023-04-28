import { blogHero } from "../../../assets";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function HeroSection({ isLoading }) {
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
      <div className="bg-neutral-500">
        <LazyLoadImage
          className="block"
          effect="blur"
          src={blogHero}
          alt=" Welcome to Konectin Blog"
        />
      </div>
    </div>
  );
}

export default HeroSection;
