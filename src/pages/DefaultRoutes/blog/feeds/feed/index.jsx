import { useEffect, useState } from "react";
import BlogCard from "../../../../../components/blogCard";
import Pagination from "../../../../../components/pagination";

function Feed({ newBlogs, trendingBlogs, gridNumber, isLoading }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(gridNumber);

  useEffect(() => {
    console.log(newBlogs);
  }, [newBlogs]);

  // Every thing Pagination
  const LastCardOfNewBlog = currentPage * (cardsPerPage - 3); // Get the last new blog in the page
  const FirstCardOfNewBlog = LastCardOfNewBlog - (cardsPerPage - 3); // Get the first new blog in the page

  const paginate = (pageNumber) => {
    window.scrollTo({ top: 350, left: 0, behavior: "smooth" });
    setCurrentPage(pageNumber);
  };

  const currentNewCards = newBlogs.slice(FirstCardOfNewBlog, LastCardOfNewBlog);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold">What's New?</h1>
        <div className="blog-grid-system gap-4">
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
            : currentNewCards.map((newCard, index) => (
                <BlogCard key={index} article={newCard} isLoading={isLoading} />
              ))}
        </div>
      </div>
      {trendingBlogs.length >= 1 && (
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold">What's Trending?</h1>
          <div className="blog-grid-system gap-4">
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
              : trendingBlogs.map((trendingCard, index) => (
                  <BlogCard
                    key={index}
                    article={trendingCard}
                    isLoading={isLoading}
                  />
                ))}
          </div>
        </div>
      )}
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={newBlogs.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
}

export default Feed;
