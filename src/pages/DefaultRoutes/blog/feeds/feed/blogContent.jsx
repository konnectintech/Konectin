import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BlogCard from "../../../../../components/blogCard";
import Pagination from "../../../../../components/pagination";
import { blurImage } from "../../../../../assets";
import "../../index.css";
import Share from "./share";
import BlogComment from "./comment";

function BlogContent() {
  const [blog, setBlog] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [allBlogs, setAllBlogs] = useState([]);
  const [similarContent, setSimilarContent] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFull, setOpen] = useState(false);

  const [blogBody, setBlogBody] = useState([]);

  const { pathname } = useLocation();

  const paginate = (pageNumber) => {
    window.scrollTo({ top: 1150, left: 0, behavior: "smooth" });
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://konectin-backend-hj09.onrender.com/user/getAllBlogs")
      .then((res) => {
        const blogs = res.data.blogs;
        setAllBlogs(blogs);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const blogFeed = pathname.split("/")[3];
    const currentBlog = allBlogs.filter((blog) => blog._id === blogFeed);

    const sectionBlogs = allBlogs.filter((blog) =>
      blog.post.category.some((cat) => cat === currentBlog[0].post.category[0])
    );

    setBlog((prevBlog) => ({ ...prevBlog, ...currentBlog[0] }));
    setSimilarContent(sectionBlogs);
  }, [pathname, allBlogs]);

  useEffect(() => {
    if (blog.post) {
      const splittedBody = blog.post?.body.split(" ");
      let firstSentence = "";
      let secondSentence = "";
      for (let i = 0; i < 274; i++) {
        firstSentence += ` ${splittedBody[i]}`;
      }
      for (let i = 274; i < splittedBody.length; i++) {
        secondSentence += ` ${splittedBody[i]}`;
      }
      setBlogBody([firstSentence, secondSentence]);
    }
  }, [blog]);

  const [cardsPerPage, setCards] = useState(6);

  useEffect(() => {
    setCards(isFull ? 3 : 6);
  }, [isFull]);

  const currentSimilarContent = similarContent.slice(
    currentPage * cardsPerPage - cardsPerPage,
    currentPage * cardsPerPage
  );

  return (
    <div className="flex flex-col gap-10">
      {isLoading ? (
        <div className="animate-pulse flex text-neutral-500 flex-col gap-4 pt-8">
          <div className="text-sm space-y-2 text-center">
            <h1 className="text-3xl bg-neutral-500 w-fit mb-1 mx-auto">
              This is a title loading somewhere
            </h1>
            <p className="bg-neutral-500 w-fit mx-auto">Konectin</p>
            <p className="bg-neutral-500 w-fit mx-auto">5 mins read</p>
          </div>
          <div>
            <div className="w-full">
              <img
                className="w-full"
                src={blurImage}
                alt="A blog about something"
              />
            </div>
            <div className="text-start text-xs leading-normal bg-white py-8 rounded-b-md">
              <article className="w-10/12 mx-auto font-semibold pb-3">
                <p className="mt-2 blur">
                  a lot of text Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Sunt, ut. Unde sed odio similique aut
                  eligendi, nobis accusantium? Quibusdam aspernatur iusto
                  cupiditate aliquam debitis doloremque similique quisquam
                  maxime explicabo fugiat.
                </p>
                <p className="mt-2 blur">
                  a lot of text Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Sunt, ut. Unde sed odio similique aut
                  eligendi, nobis accusantium? Quibusdam aspernatur iusto
                  cupiditate aliquam debitis doloremque similique quisquam
                  maxime explicabo fugiat.
                </p>
                <p className="mt-2 blur">
                  a lot of text Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Sunt, ut. Unde sed odio similique aut
                  eligendi, nobis accusantium? Quibusdam aspernatur iusto
                  cupiditate aliquam debitis doloremque similique quisquam
                  maxime explicabo fugiat.
                </p>
              </article>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 pt-8">
          <div className="text-sm space-y-2 text-neutral-300 text-center">
            <h1 className="text-3xl font-semibold mb-1 text-neutral-100">
              {blog.post?.title}
            </h1>
            <p>Konectin</p>
            <p>{blog.readingTime}</p>
          </div>
          <div className="max-w-screen-md mx-auto">
            <div className="w-full h-[65vh] h-full">
              <img
                className="w-full h-full"
                src={blog.post?.image}
                alt={blog.post?.title}
              />
            </div>
            <div className="text-start text-xs leading-normal bg-white py-8 rounded-b-md">
              <div className="flex flex-wrap w-10/12 mx-auto font-semibold">
                <article
                  dangerouslySetInnerHTML={{
                    __html: !isFull ? blogBody[0] : blogBody[0] + blogBody[1],
                  }}
                ></article>
                <div className="pb-3">
                  <font
                    onClick={() => setOpen((prev) => !prev)}
                    className="text-primary-500 cursor-pointer"
                  >
                    {!isFull ? "Read more..." : "Read Less..."}
                  </font>
                </div>
              </div>
              {isFull && (
                <div className="w-10/12 mx-auto">
                  <Share />
                  <BlogComment />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <div>
        <p className="font-semibold text-xl mb-6">Related articles</p>
        <div className="blog-grid-system gap-6 items-stretch">
          {isLoading
            ? new Array(6)
                .fill(0, 0, 6)
                .map((newCard, index) => (
                  <BlogCard
                    key={index}
                    article={newCard}
                    isLoading={isLoading}
                  />
                ))
            : currentSimilarContent.map((blog, index) => (
                <BlogCard key={index} article={blog} isLoading={isLoading} />
              ))}
        </div>
        <Pagination
          cardsPerPage={cardsPerPage}
          totalCards={similarContent.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default BlogContent;
