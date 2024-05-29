import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../../../components/blog/blogCard";
import { Link } from "react-router-dom";

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const url = import.meta.env.VITE_CLIENT_SERVER_URL;

  async function getAllBlogs() {
    setLoading(true);

    try {
      const response = await axios.get(`${url}/getAllBlogs`);
      const { blogs } = response.data;
      setBlogPosts(blogs.results.slice(0, 3));
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLoading) {
      const preloader = new Array(3).fill({
        seo_title: "Loading contents",
        authorName: "Konectin",
        metaDescription: "Loading",
        htmlTitle: "Loading contents",
        updated: new Date().getDate(),
        blurred: true,
      });

      setBlogPosts(preloader);
    }
  }, [isLoading]);

  return (
    <section className="bg-primary-500">
      <div className="w-full lg:w-11/12 relative z-10 mx-auto max-w-screen-2xl flex flex-col gap-10 lg:gap-12 py-16 px-2 xxs:px-4 lg:px-0">
        <div className="flex flex-col gap-3 md:w-8/12">
          <h3 className="bg-gradient-to-r from-white from-5% via-[#3DF110] via-25% to-secondary-600 to-45% bg-clip-text text-transparent font-extrabold text-3xl md:text-4xl">
            Stay Ahead Of The Competition
          </h3>
          <p className="max-w-xl text-neutral-800">
            Explore our blog for insightful articles and updates. Equip yourself
            with the knowledge to outshine the competition. Continue learning,
            keep evolving, and head towards success.
          </p>
        </div>
        <div className="flex flex-col gap-16 items-center">
          <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-6">
            {blogPosts.map((item, index) => (
              <BlogCard key={index} article={item} />
            ))}
          </div>
          <Link
            to="/blog/all"
            className="flex items-center justify-center px-6 py-4 bg-secondary-500 text-white rounded"
          >
            Explore Our Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
