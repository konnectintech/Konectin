import { Link, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function BlogCard({
  article: {
    id,
    featuredImage,
    htmlTitle,
    authorName,
    metaDescription,
    tagIds,
    updated,
    blurred,
  },
}) {
  const param = useParams();

  return (
    <Link
      to={blurred ? param : `/blog/${tagIds[0]}/${id}/`}
      className={`blog-card overflow-hidden rounded-md text-xs w-full flex flex-col justify-between ${
        blurred ? "cursor-default" : "cursor-pointer"
      }`}
    >
      <div className="bg-neutral-700 overflow-hidden flex-1 max-h-[220px] md:max-h-[290px]">
        <LazyLoadImage
          wrapperClassName="inline-x"
          effect="blur"
          className="min-h-[220px] md:min-h-[290px] aspect-auto hover:scale-105 duration-1000"
          src={featuredImage}
          alt={htmlTitle}
        />
      </div>

      <div className="mb-auto bg-white px-3 py-4 flex flex-col gap-3 justify-between">
        <div className="space-y-1">
          <h2
            className={
              blurred ? "blurry-text" : "truncate text-base font-semibold"
            }
            title={htmlTitle}
          >
            {htmlTitle}
          </h2>
          <h3
            className={blurred ? "blurry-text w-[20ch]" : "text-secondary-600"}
          >
            Konectin
          </h3>
        </div>

        <div className="flex items-center justify-between w-full text-xs text-neutral-400 font-medium">
          <span className={blurred ? "blurry-text w-[10ch]" : "lowercase"}>
            {metaDescription}
          </span>
          <span className={blurred && "blurry-text w-fit"}>
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
