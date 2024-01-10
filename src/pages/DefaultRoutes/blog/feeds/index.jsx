import axios from "axios";
import Feed from "./feed";
import HeroSection from "../hero";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Feeds() {
  const feedList = [
    { name: "All articles", link: "all" },
    { name: "Career", link: "76622502648" },
    { name: "Start ups", link: "81404868843" },
    { name: "soft skills", link: "76622502649" },
  ];

  const [newBlogs, setNewBlogs] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [trendingBlogs, setTrendingBlogs] = useState([]);
  const url = import.meta.env.VITE_CLIENT_SERVER_URL;

  async function getAllBlogs() {
    setLoading(true);
    console.log(url);

    try {
      const response = await axios.get(`${url}/getAllBlogs`);
      const { blogs } = response.data;
      setAllBlogs(blogs.results);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  let params = useParams();

  useEffect(() => {
    getAllBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLoading) {
      const preloader = new Array(6).fill({
        seo_title: "Loading contents",
        authorName: "Konectin",
        metaDescription: "Loading",
        htmlTitle: "Loading contents",
        updated: new Date().getDate(),
        blurred: true,
      });

      setAllBlogs(preloader);
    }
  }, [isLoading]);

  useEffect(() => {
    if (params.feed === "all") {
      setNewBlogs(allBlogs);
    } else {
      const currentFeed = allBlogs.filter(
        (blog) => blog.tagIds && blog.tagIds.includes(parseInt(params.feed))
      );

      setNewBlogs(currentFeed);
    }

    const shuffled = allBlogs
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    setTrendingBlogs(shuffled.slice(0, 3));
  }, [params, allBlogs]);

  return (
    <div
      className={`w-11/12 mx-auto flex flex-col gap-6 sm:gap-10 ${
        isLoading && "text-neutral-500"
      }`}
    >
      <HeroSection isLoading={isLoading} />
      <div className="flex flex-col gap-8">
        <div className="flex no-scrollbar overflow-x-scroll text-sm sm:text-md items-center">
          {feedList.map((feedItem, index) => (
            <Link
              key={index}
              to={isLoading ? "/blog/all" : `/blog/${feedItem.link}`}
              className={`
                ${
                  isLoading
                    ? "text-neutral-500"
                    : params.feed === feedItem.link
                    ? "text-white bg-primary-500 rounded-full"
                    : "text-neutral-200"
                } capitalize px-4 sm:px-5 py-1 min-w-fit`}
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
