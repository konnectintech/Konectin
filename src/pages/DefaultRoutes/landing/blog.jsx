import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../../../components/blog/blogCard";

function BlogSection() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const read_token = import.meta.env.VITE_READ_TOKEN;

  async function getAllBlogs() {
    try {
      const response = await axios.get(
        `https://api.buttercms.com/v2/posts?auth_token=${read_token}`
      );
      const blogs = response.data.data;
      const shuffled = blogs
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
      setBlogPosts(shuffled.slice(0, 3));

      setLoading(false);
    } catch (err) {
      console.log(err);
      // alert(err.message + ", Please reload the page");
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
        author: { first_name: "Konectin" },
        tags: [{ slug: "1 min read" }],
        title: "Loading contents",
        updated: new Date().getDate(),
        blurred: true,
      });

      setBlogPosts(preloader);
    }
  }, [isLoading]);

  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="header--text text-center">
        <h1 className="text-3xl mb-2">
          <font className="text-secondary-600">Konectin</font> Blog
        </h1>
        <p>
          Konectin provides career talks, tips, advice and articles on
          employment trends to help you succeed. Join us now to access these
          resources.
        </p>
      </div>
      <div className="blog-grid-system gap-3 justify-center">
        {blogPosts.map((blog, index) => (
          <BlogCard key={index} article={blog} />
        ))}
      </div>
      <Link
        to="/blog/all"
        className="px-8 py-2 bg-transparent flex gap-2 items-center justify-center text-black-500 border-primary-500 border rounded-md"
      >
        Learn More
      </Link>
    </div>
  );
}

export default BlogSection;
