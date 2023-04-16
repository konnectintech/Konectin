import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BlogCard from "../../../../../components/blogCard";
import Pagination from "../../../../../components/pagination";
import { BlogAnalysis } from "../data";

function BlogContent() {
  const [blog, setBlog] = useState([]);
  const [similarContent, setSimilarContent] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { pathname } = useLocation();

  const paginate = (pageNumber) => {
    window.scrollTo({ top: 1150, left: 0, behavior: "smooth" });
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const blogFeed = pathname.split("/")[2];
    const currentBlog = BlogAnalysis.filter((blog) => blog.blogId === blogFeed);

    console.log(currentBlog[0].post.title);

    const sectionBlogs = BlogAnalysis.filter((blog) =>
      blog.post.category.some((cat) => cat === currentBlog[0].post.category[0])
    );

    setBlog(currentBlog[0]);
    setSimilarContent(sectionBlogs);
  }, [pathname]);

  const currentSimilarContent = similarContent.slice(
    currentPage * 6 - 6,
    currentPage * 6
  );

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 pt-8">
        <div className="text-sm space-y-2 text-neutral-300 text-center">
          <h1 className="text-3xl font-semibold mb-1 text-neutral-100">
            {blog.post.title}
          </h1>
          <p>Konectin</p>
          <p>{blog.post.timeFrame}</p>
        </div>
        <div>
          <div className="w-full md:h-[60vh]">
            <img
              className="w-full h-full"
              src={blog.post.image}
              alt={blog.post.title}
            />
          </div>
          <div className="text-start text-xs leading-normal bg-white py-8 rounded-b-md">
            <article className="w-10/12 mx-auto font-semibold pb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              doloremque iste fuga impedit sint optio eum molestiae! Rem
              explicabo dignissimos eos, sint sapiente ipsum quia? Sapiente
              laborum est labore ducimus? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Similique, rem quisquam. Unde eveniet repellat
              atque? Commodi optio ipsa, dicta adipisci dolor nemo eum saepe
              deserunt possimus hic error. Culpa, ipsam?Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Assumenda error doloremque
              commodi consectetur, eos omnis minus ducimus, accusantium
              temporibus dignissimos et atque exercitationem iure autem voluptas
              perferendis corporis accusamus officia.
              <p className="mt-2">{blog.post.body}</p>
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
