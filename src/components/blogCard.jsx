// import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function BlogCard({ article: { post, blogId, timeFrame } }) {
  // const categoryUrl = useRef("");

  // useEffect(() => {
  //   post.category.forEach((item) => {
  //     categoryUrl.current += `${item}/`;
  //     console.log(categoryUrl.current);
  //   });
  // }, [post.category]);

  return (
    <Link
      to={`/blog/${blogId + "/" + post.title.split(" ").join("-")}`}
      className="blog-card overflow-hidden rounded-md text-xs h-full flex flex-col justify-between"
    >
      <div className="bg-neutral-1000 overflow-hidden">
        <img
          className="w-full hover:scale-105 transistion-all duration-300"
          src={post.image}
          alt={post.title}
        />
      </div>

      <div className="bg-white px-3 py-4 flex flex-col justify-between gap-3">
        <hgroup>
          <h2>{post.title}</h2>
          <h3 className="mt-1">Konectin</h3>
        </hgroup>
        <div className="flex items-center justify-between w-full text-neutral-400 text-xs">
          <span>{timeFrame}</span>
          {/* <span>{publishedAt}</span> */}
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
