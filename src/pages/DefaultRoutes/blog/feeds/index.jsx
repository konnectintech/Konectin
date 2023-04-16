// import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import HeroSection from "../hero";
import Feed from "./feed";
import { BlogAnalysis } from "./data";

function Feeds() {
  const feedList = [
    { name: "All articles", link: "all" },
    { name: "Career", link: "career" },
    { name: "Start ups", link: "start-up" },
    { name: "soft skills", link: "soft-skills" },
  ];

  const [newBlogs, setNewBlogs] = useState([]);
  const [trendingBlogs, setTrendingBlogs] = useState([]);

  let params = useParams();

  useEffect(() => {
    const category = params.feed;

    if (category === "all") {
      setNewBlogs(BlogAnalysis);
    } else {
      const sectionBlogs = BlogAnalysis.filter((blog) =>
        blog.post.category.includes(category)
      );

      setNewBlogs(sectionBlogs);
    }

    let likesArray = BlogAnalysis.map((blog) => {
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
      let filteredBlog = BlogAnalysis.filter((blog) => {
        return highestLikes.some((num) => blog.likes === num);
      });
      filteredBlog = filteredBlog.reverse().splice(0, 3);

      return filteredBlog;
    });

    // setNewBlogs(newBlog);
    // setTrendingBlogs(trendingBlog);
    // axios
    //   .get("http://localhost:5000/user/getAllBlogs")
    //   .then(async (res) => {
    //     const allBlogs = await res.data.blogs;
    //     let currentFeed; // Filter all blogs using the params feed
    //     console.log(res);
    //   })
    //   .catch((err) => console.log(err));
  }, [params]);

  return (
    <>
      <HeroSection />
      <div className="flex flex-col gap-8">
        <div className="flex gap-6 text-sm sm:text-md sm:gap-8 items-center">
          {feedList.map((feedItem, index) => (
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
          ))}
        </div>
        <Feed
          newBlogs={newBlogs}
          trendingBlogs={trendingBlogs}
          gridNumber={9}
        />
      </div>
    </>
  );
}

export default Feeds;
