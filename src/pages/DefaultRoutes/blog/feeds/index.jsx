import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import HeroSection from "../hero";
import Feed from "./feed";

function Feeds() {
  const feedList = [
    { name: "All articles", link: "all" },
    { name: "Career", link: "career" },
    { name: "Start ups", link: "start-up" },
    { name: "soft skills", link: "soft-skills" },
  ];

  const [newBlogs, setNewBlogs] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [trendingBlogs, setTrendingBlogs] = useState([]);

  async function getAllBlogs() {
    try {
      const response = await axios.get(
        "https://konectin-backend-hj09.onrender.com/user/getAllBlogs"
      );
      const blogs = response.data.blogs;
      setAllBlogs(blogs);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllBlogs();
  }, []);

  useEffect(() => {
    if (isLoading) {
      const preloader = new Array(6).fill({
        title: "Loading contents",
        readingTime: "1 min read",
        category: ["career", "start-up", "soft-skill"],
        updatedAt: new Date().getDate(),
        blurred: true,
      });

      setAllBlogs(preloader);
    }
  }, [isLoading]);

  let params = useParams();

  useEffect(() => {
    const category =
      params.feed.charAt(0).toUpperCase() +
      params.feed.slice(1, params.feed.length);
    if (category === "All") {
      setNewBlogs(allBlogs);
    } else {
      const currentFeed = allBlogs.filter((blog) =>
        blog.category.includes(category)
      );
      setNewBlogs(currentFeed);
    }

    let readArray = allBlogs.map((blog) => {
      return blog.numOfReads;
    });

    // Get highest read ranking
    const highestRead = readArray
      .sort(function (a, b) {
        return b - a;
      })
      .slice(0, 3);

    // Get first 3 blogs with highest read ranking
    let filteredBlog = allBlogs.filter((blog) => {
      return highestRead.some((num) => blog.numOfReads === num);
    });

    filteredBlog = filteredBlog.reverse().splice(0, 3);
    setTrendingBlogs(filteredBlog);
  }, [params, allBlogs]);

  return (
    <div
      className={`w-11/12 mx-auto max-w-screen-lg flex flex-col gap-10 ${
        isLoading && "text-neutral-500"
      }`}
    >
      <HeroSection isLoading={isLoading} />
      <div className="flex flex-col gap-8">
        <div className="flex gap-6 text-sm sm:text-md sm:gap-8 items-center">
          {feedList.map((feedItem, index) => (
            <Link
              key={index}
              to={`/blog/${feedItem.link}`}
              className={`
                ${
                  isLoading
                    ? "text-neutral-500"
                    : params.feed === feedItem.link
                    ? "border-b-2 border-secondary-600"
                    : "text-neutral-200"
                } capitalize`}
            >
              {feedItem.name}
            </Link>
          ))}
        </div>
        <Feed
          newBlogs={newBlogs}
          trendingBlogs={trendingBlogs}
          gridNumber={9}
        />
      </div>
    </div>
  );
}

export default Feeds;
