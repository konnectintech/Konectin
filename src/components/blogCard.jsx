import { Link, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function BlogCard({
  article: {
    featured_image,
    title,
    seo_title,
    author,
    categories,
    slug,
    tags,
    updated,
    blurred,
  },
}) {
  const param = useParams();

  return (
    <Link
      to={blurred ? param : `/blog/${categories[0]?.slug}/${slug}/`}
      className={`${
        blurred && "animate-pulse"
      } blog-card overflow-hidden rounded-md text-xs w-full flex flex-col justify-between`}
    >
      <div className="bg-neutral-700 overflow-hidden flex-1 max-h-[240px]">
        <LazyLoadImage
          wrapperClassName="inline-x"
          effect="blur"
          className="bg-contain w-full h-full aspect-square hover:scale-105 transistion-all duration-300"
          src={featured_image}
          alt={title}
        />
      </div>

      <div
        className={`${
          blurred ? "blurry-text" : "mb-auto"
        } bg-white px-3 py-4 flex flex-col gap-3 justify-between`}
      >
        <h2 className="truncate text-base" title={seo_title}>
          {title}
        </h2>
        <h3 className="my-auto">{author?.first_name}</h3>

        <div className="flex items-center justify-between w-full text-xs text-neutral-400 font-medium">
          <span>{tags[0].slug.split("-").join(" ")}</span>
          <span>
            {new Date(updated).toLocaleString("en-GB", {
              day: "numeric",
              year: "numeric",
              month: "short",
            })}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
