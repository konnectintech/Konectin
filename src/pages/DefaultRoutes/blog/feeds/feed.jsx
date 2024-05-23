import { useEffect, useState } from "react";
import BlogCard from "../../../../components/blog/blogCard";
import Pagination from "../../../../components/pagination";

function Feed({ newBlogs, trendingBlogs }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(9);

  useEffect(() => {
    setCurrentPage(1);
  }, [newBlogs]);

  // Every thing Pagination
  const LastCardOfNewBlog = currentPage * (cardsPerPage - 3); // Get the last new blog in the page
  const FirstCardOfNewBlog = LastCardOfNewBlog - (cardsPerPage - 3); // Get the first new blog in the page

  const paginate = (pageNumber) => {
    window.scrollTo({ top: 550, left: 0, behavior: "smooth" });
    setCurrentPage(pageNumber);
  };

  const currentNewCards = newBlogs.slice(FirstCardOfNewBlog, LastCardOfNewBlog);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold">What's New?</h1>
        <div className="blog-grid-system gap-4">
          {currentNewCards.map((newCard, index) => (
            <BlogCard key={index} article={newCard} />
          ))}
        </div>
      </div>
      {trendingBlogs.length >= 1 && (
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold">What's Trending?</h1>
          <div className="blog-grid-system gap-4">
            {trendingBlogs.map((trendingCard, index) => (
              <BlogCard key={index} article={trendingCard} />
            ))}
          </div>
        </div>
      )}
      <Pagination
        cardsPerPage={cardsPerPage - 3}
        totalCards={newBlogs.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
}

export default Feed;
