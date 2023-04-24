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

  useEffect(() => {
    setLoading(true);
    console.log("Fetching all blogs");
    axios
      .get("https://konectin-backend-hj09.onrender.com/user/getAllBlogs")
      .then((res) => {
        const blogs = res.data.blogs;
        setAllBlogs(blogs);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  let params = useParams();

  useEffect(() => {
    const category = params.feed;
    if (category === "all") {
      setNewBlogs(allBlogs);
    } else {
      const currentFeed = allBlogs.filter((blog) =>
        blog.post.category.includes(category)
      );
      setNewBlogs(currentFeed);

      let likesArray = allBlogs.map((blog) => {
        return blog.likes;
      });

      setTrendingBlogs(() => {
        // Get highest likes ranking
        const highestLikes = likesArray
          .sort(function (a, b) {
            return b - a;
          })
          .slice(0, 3);

        // Get first 3 blogs with highest likes ranking
        let filteredBlog = allBlogs.filter((blog) => {
          return highestLikes.some((num) => blog.likes === num);
        });
        filteredBlog = filteredBlog.reverse().splice(0, 3);

        return filteredBlog;
      });
    }
  }, [params, allBlogs]);

  return (
    <div
      className={`w-11/12 mx-auto max-w-screen-lg flex flex-col gap-16 ${
        isLoading ? "animate-pulse text-neutral-500" : ""
      }`}
    >
      <HeroSection isLoading={isLoading} />
      <div className="flex flex-col gap-8">
        <div className="flex gap-6 text-sm sm:text-md sm:gap-8 items-center">
          {feedList.map((feedItem, index) =>
            isLoading ? (
              <div key={index} className="bg-neutral-500">
                {feedItem.name}
              </div>
            ) : (
              <Link
                key={index}
                to={`/blog/${feedItem.link}`}
                className={
                  params.feed === feedItem.link
                    ? "border-b-2 border-secondary-600 capitalize"
                    : "text-neutral-200 capitalize"
                }
              >
                {feedItem.name}
              </Link>
            )
          )}
        </div>
        <Feed
          newBlogs={newBlogs}
          trendingBlogs={trendingBlogs}
          gridNumber={9}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

export default Feeds;
