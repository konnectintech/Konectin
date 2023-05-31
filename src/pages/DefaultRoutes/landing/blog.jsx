import { Link } from "react-router-dom";

function BlogSection({ data }) {
  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="header--text text-center">
        <h1 className="text-3xl mb-2">
          <font className="text-secondary-600">Konectin</font> Blog
        </h1>
        <p>
          Career talk, tips and advice, articles around the employment world and
          so much more.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {data?.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden flex flex-col gap-3 pb-4"
          >
            <div className="bg-neutral-1000 overflow-hidden">
              <img
                className="w-full hover:scale-105 duration-300"
                src={blog.image}
                alt={blog.title}
              />
            </div>

            <h2 className="px-4 text-xl font-medium mb-3">{blog.title}</h2>

            <div className="px-4 text-neutral-300 justify-self-end mt-auto">
              <div className="flex gap-2 items-center mt-auto">
                <img src={blog.info.bloggerImage} alt={blog.info.bloggerName} />
                <small>{blog.info.bloggerName}</small>
                <div className="w-2 h-2 rounded-xl bg-red-500"></div>
                <small>{blog.info.date}</small>
              </div>
            </div>
          </div>
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
