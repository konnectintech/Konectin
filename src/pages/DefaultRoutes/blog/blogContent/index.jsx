/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import * as Io5Icons from "react-icons/io5";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import CommentSection from "../comments";
import Share from "../../../../components/blog/share";
import Pagination from "../../../../components/pagination";
import BlogCard from "../../../../components/blog/blogCard";

import "../index.css";

function BlogContent() {
  const [blog, setBlog] = useState({});
  const [liked, setLiked] = useState(false);
  const [blogActions, setBlogActions] = useState({
    views: 0,
    shares: 0,
    likes: 0,
  });

  const [isLoading, setLoading] = useState({
    post: true,
    actions: true,
    related: true,
    liked: false,
  });

  const [similarContent, setSimilarContent] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [isFull, setOpen] = useState(false);
  const { id } = useParams();
  const { pathname } = useLocation();

  const url = import.meta.env.VITE_CLIENT_SERVER_URL;
  const user = JSON.parse(localStorage.getItem("user")) || "";

  const paginate = (pageNumber) => {
    window.scrollTo({ top: 1150, left: 0, behavior: "smooth" });
    setCurrentPage(pageNumber);
  };

  // Get the blog on page load
  useEffect(() => {
    setLoading({ post: true, related: true, actions: true });

    async function getBlog() {
      try {
        const response = await axios.get(`${url}/getBlog?blogId=${id}`);
        const { posts } = response.data;

        setBlog(posts);
        getBlogActions();
        addViews();
        setLoading((prev) => ({ ...prev, post: false }));
      } catch (err) {
        console.log(err);
      }
    }

    async function addViews() {
      try {
        const response = await axios.put(
          `${url}/updateNumOfReads?blogId=${id}`
        );

        setBlogActions((prev) => ({
          ...prev,
          views: response.data.data.numOfReads,
        }));
      } catch (err) {
        console.log(err);
      }
    }

    async function getBlogActions() {
      try {
        const response = await axios.get(`${url}/getBlogActions?blogId=${id}`);
        const { views, shares, likes } = response.data.data;

        likes.forEach((item) => {
          if (item === user._id) {
            setLiked(true);
          }
        });

        setBlogActions({ likes: likes.length, views, shares });
        setLoading((prev) => ({ ...prev, actions: false }));
      } catch (err) {
        console.log(err);
      }
    }

    getBlog();
    setOpen(false);
  }, [id]);

  // Get similar contents
  useEffect(() => {
    async function getRelatedBlogs(main) {
      try {
        const response = await axios.get(`${url}/getAllBlogs`);
        const { results } = response.data.blogs;
        const relatedBlogs = results.filter((blog) =>
          blog.tagIds.some((tag) =>
            main.tagIds && main.tagIds.includes(tag) && blog.id !== main.id
              ? true
              : false
          )
        );
        setSimilarContent(relatedBlogs);
        setLoading((prev) => ({ ...prev, related: false }));
      } catch (err) {
        console.log(err);
      }
    }

    getRelatedBlogs(blog);
  }, [blog]);

  useEffect(() => {
    if (isLoading.related) {
      const preloader = new Array(3).fill({
        blurred: true,
      });

      setSimilarContent(preloader);
    }

    if (isLoading.post) {
      const preloader = {
        rssBody: `
        <h1 class="blurry-text w-full mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, facere ipsum! Odio dolorum quasi cupiditate accusantium, omnis fuga, qui molestiae possimus nesciunt quisquam magnam? Est placeat quisquam repudiandae facilis vel.</h1>
        <h1 class="blurry-text w-full"></h1>
        <h1 class="blurry-text w-11/12"></h1>

        <br />

        <h1 class="blurry-text w-full"></h1>
        <h1 class="blurry-text w-full"></h1>
        <h1 class="blurry-text w-full"></h1>
        <h1 class="blurry-text w-1/4"></h1>
        
        <br />
        
        <h1 class="blurry-text w-1/3"></h1>
        
        <h1 class="blurry-text w-full"></h1>
        <h1 class="blurry-text w-full"></h1>
        <h1 class="blurry-text w-full"></h1>
        <h1 class="blurry-text w-11/12"></h1>
        <h1 class="blurry-text w-1/2"></h1>

        <br />

        <h1 class="blurry-text w-5/6"></h1>
        <h1 class="blurry-text w-3/4"></h1>
        <h1 class="blurry-text w-5/12"></h1>
        <h1 class="blurry-text w-7/12"></h1>
        <h1 class="blurry-text w-2/3"></h1>
        
        <br />

        <h1 class="blurry-text w-full"></h1>
        `,
        htmlTitle: "Loading contents",
        authorName: "Konectin",
        metaDescription: "Loading",
        updated: new Date().getDate(),
        blurred: true,
      };

      setBlog(preloader);
    }
  }, [isLoading]);

  const [cardsPerPage, setCards] = useState(similarContent.length <= 5 ? 3 : 6);

  useEffect(() => {
    setCards(isFull ? 3 : similarContent.length <= 5 ? 3 : 6);
  }, [isFull, similarContent]);

  const currentSimilarContent = similarContent.slice(
    currentPage * cardsPerPage - cardsPerPage,
    currentPage * cardsPerPage
  );

  const handleLike = async () => {
    setLoading((prev) => ({ ...prev, liked: !prev.liked }));

    try {
      await axios.post(
        `${url}/likePost?blogId=${id}&userId=${user._id}`,
        {},
        {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        }
      );

      setLoading((prev) => ({ ...prev, liked: !prev.liked }));

      console.log(isLoading.liked);

      setBlogActions((prev) => ({
        ...prev,
        likes: liked ? prev.likes - 1 : prev.likes + 1,
      }));
      setLiked((prev) => !prev);
    } catch (err) {
      console.log(isLoading.liked);
      setLoading((prev) => ({ ...prev, liked: !prev.liked }));
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col gap-10 w-full">
      <div
        className={`flex flex-col gap-4 pt-8 ${
          isLoading.post && "animate-pulse"
        }`}
      >
        <div className="text-sm space-y-2 text-neutral-300 text-center">
          <h1
            title={blog.htmlTitle}
            className={`text-3xl !leading-normal font-semibold mb-1 text-neutral-100 max-w-4xl mx-auto ${
              isLoading.post && "blurry-text w-10/12 h-[26px]"
            }`}
          >
            {blog.htmlTitle}
          </h1>
          <p
            className={`text-secondary-500 ${
              isLoading.post && "blurry-text w-fit mx-auto px-12"
            }`}
          >
            {/* {blog.authorName} */}
            Konectin
          </p>
          <p
            className={isLoading.post ? "blurry-text w-fit mx-auto" : "mx-auto"}
          >
            {blog.metaDescription}
          </p>
        </div>
        <div className="w-full mx-auto">
          <div className="w-full bg-neutral-700 h-[550px] overflow-hidden rounded-t-2xl">
            <img
              className="w-full h-full mx-auto"
              src={blog.featuredImage}
              alt={blog.htmlTitle}
            />
          </div>
          <div className="text-start text-xs leading-normal bg-white pt-4 pb-8 rounded-b-md">
            <div className="flex flex-wrap px-6 lg:w-11/12 mx-auto">
              {/* Like and share */}
              <div className="font-bold text-primary-500 flex w-full justify-between items-center mb-3">
                <div className="flex justify-between items-center gap-2">
                  <div
                    className={
                      isLoading.actions
                        ? "blurry-text p-2"
                        : "bg-neutral-1000 p-2 w-fit flex items-center justify-center gap-1"
                    }
                  >
                    <FaIcons.FaEye />
                    <p>{blogActions.views}</p>
                  </div>

                  <div
                    className={
                      isLoading.actions
                        ? "blurry-text p-2"
                        : "bg-neutral-1000 p-2 cursor-pointer w-fit flex items-center justify-center gap-1"
                    }
                    onClick={handleLike}
                  >
                    <motion.div
                      initial={{ scale: 1, rotate: 0 }}
                      animate={
                        isLoading.liked
                          ? {
                              scale: [1, 0.5, 0.5, 1, 1],
                              rotate: [0, 180, 360, 180, 0],
                            }
                          : {}
                      }
                      transition={{
                        duration: 1,
                        ease: "easeInOut",
                      }}
                    >
                      {!isLoading.actions && (
                        <Io5Icons.IoHeartSharp
                          strokeWidth="25px"
                          className={`${
                            liked ? "text-error-500" : "text-neutral-50"
                          } cursor-pointer stroke-primary-500 text-base md:text-lg`}
                        />
                      )}
                    </motion.div>
                    <p>{blogActions.likes}</p>
                  </div>
                </div>
                <Share
                  numOfShares={blogActions.shares}
                  pathname={pathname}
                  {...blog}
                  updateBlogActions={setBlogActions}
                  isLoading={isLoading.actions}
                />
              </div>

              <article
                className={
                  !isFull ? "line-clamp-[14] blog-article" : "blog-article"
                }
                dangerouslySetInnerHTML={{
                  __html: blog.rssBody,
                }}
              ></article>
              {!isLoading.post && (
                <div className="pb-3">
                  <font
                    onClick={() => setOpen((prev) => !prev)}
                    className="text-secondary-500 cursor-pointer"
                  >
                    {!isFull ? "Read more..." : "Read Less..."}
                  </font>
                </div>
              )}
            </div>
            {isFull && (
              <div className="px-6 lg:w-11/12 mx-auto">
                <CommentSection blogID={blog.id} pathname={pathname} />
              </div>
            )}
          </div>
        </div>
      </div>

      <div>
        <p
          className={
            isLoading.related
              ? "blurry-text w-fit text-xl mb-6"
              : "font-semibold text-xl mb-6"
          }
        >
          Related articles
        </p>
        <div
          className={`blog-grid-system gap-4 items-stretch ${
            isLoading.related && "animate-pulse"
          }`}
        >
          {currentSimilarContent.length >= 1
            ? currentSimilarContent.map((blog, index) => (
                <BlogCard key={index} article={blog} isLoading={isLoading} />
              ))
            : "No related article found"}
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
