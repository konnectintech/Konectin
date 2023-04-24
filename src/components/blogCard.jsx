import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { blurImage } from "../assets";

function BlogCard({
  article: { post, _id, readingTime, updatedAt },
  isLoading,
}) {
  return isLoading ? (
    <div className="blog-card animate-pulse overflow-hidden rounded-md text-xs h-full flex flex-col justify-between">
      <div className="bg-neutral-1000 overflow-hidden">
        <LazyLoadImage
          effect="blur"
          className="w-full hover:scale-105 transistion-all duration-300"
          src={blurImage}
          alt="blog"
        />
      </div>

      <div className="bg-white px-3 py-4 flex flex-col justify-between gap-2 text-neutral-500">
        <hgroup>
          <h2 className="bg-neutral-500 w-1/2">Something is loading</h2>
          <h3 className="mt-1 bg-neutral-500 w-fit">Konectin</h3>
        </hgroup>
        <div className="flex items-center justify-between w-full text-xs">
          <span className="bg-neutral-500 w-1/4">hi</span>
          <span className="bg-neutral-500 w-1/4">hi</span>
        </div>
      </div>
    </div>
  ) : (
    <Link
      to={`/blog/${post.title.split(" ").join("-") + "/" + _id}`}
      className="blog-card overflow-hidden rounded-md text-xs h-full flex flex-col justify-between"
    >
      <div className="bg-neutral-1000 overflow-hidden">
        <LazyLoadImage
          effect="blur"
          className="w-full hover:scale-105 transistion-all duration-300"
          src={post.image}
          alt={post.title}
        />
      </div>

      <div className="bg-white px-3 py-4 flex flex-col justify-between gap-2">
        <hgroup>
          <h2>{post.title}</h2>
          <h3 className="mt-1">Konectin</h3>
        </hgroup>
        <div className="flex items-center justify-between w-full text-neutral-400 text-xs">
          <span>{readingTime}</span>
          <span>{new Date(updatedAt).toDateString()}</span>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
