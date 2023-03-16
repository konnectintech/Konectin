import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import BlogCard from "../../../../../components/blogCard";
import Pagination from "../../../../../components/pagination";
import { newBlogData } from "../data";

function BlogContent() {
  const [blog, setBlog] = useState([]);
  const [similarContent, setSimilarContent] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { pathname } = useLocation();
  const { title } = useParams();

  const paginate = (pageNumber) => {
    window.scrollTo({ top: 1150, left: 0, behavior: "smooth" });
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const blogFeed = newBlogData[pathname.split("/")[2]];
    const blogTitle = title.split("-").join(" ");
    blogFeed.forEach((blog) => {
      if (blog.title === blogTitle) {
        setBlog(blog);
      } else {
        setSimilarContent((prev) => [...prev, blog]);
      }
    });
  }, [title, pathname]);

  const currentSimilarContent = similarContent.slice(
    currentPage * 6 - 6,
    currentPage * 6
  );

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 pt-8">
        <div className="text-sm space-y-2 text-neutral-300 text-center">
          <h1 className="text-3xl font-semibold mb-1 text-neutral-100">
            {blog.title}
          </h1>
          <p>{blog.publisher}</p>
          <p>{blog.timeFrame}</p>
        </div>
        <div>
          <div className="w-full md:h-[60vh]">
            <img className="w-full h-full" src={blog.image} alt={blog.title} />
          </div>
          <div className="text-start text-xs leading-normal bg-white py-8 rounded-b-md">
            <article className="w-10/12 mx-auto font-semibold pb-3">
              {blog.story}
            </article>
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-xl mb-6">Read More</p>
        <div className="blog-grid-system gap-6 items-stretch">
          {currentSimilarContent.map((blog, index) => (
            <BlogCard key={index} article={blog} />
          ))}
        </div>
        <Pagination
          cardsPerPage={6}
          totalCards={similarContent.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default BlogContent;
