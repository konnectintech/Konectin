import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function BlogCard({
  article: { image, title, _id, readingTime, updatedAt, blurred },
}) {
  return (
    <Link
      to={`/blog/${title.split(" ").join("-") + "/" + _id}`}
      className="blog-card overflow-hidden rounded-md text-xs w-full h-full flex flex-col justify-between"
    >
      <div className="bg-neutral-500 min-h-[150px] overflow-hidden">
        <LazyLoadImage
          effect="blur"
          className="w-full hover:scale-105 transistion-all duration-300"
          src={image}
          alt={title}
        />
      </div>

      <div
        className={`${
          blurred ? "blurry-text" : ""
        } bg-white px-3 py-4 flex flex-col justify-between gap-2`}
      >
        <hgroup>
          <h2>{title}</h2>
          <h3 className="mt-1">Konectin</h3>
        </hgroup>
        <div className="flex items-center justify-between w-full text-xs">
          <span>{readingTime}</span>
          <span>{new Date(updatedAt).toDateString()}</span>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
