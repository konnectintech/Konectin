import * as MdIcons from "react-icons/md";

function Pagination({ cardsPerPage, totalCards, currentPage, paginate }) {
  const pageNumber = [];

  const nextPage = () => {
    if (currentPage !== Math.ceil(totalCards / cardsPerPage))
      paginate(currentPage + 1);
  };

  const previousPage = () => {
    if (currentPage !== 1) paginate(currentPage - 1);
  };

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav className="mt-4 pt-3 border-t-2 border-neutral-500 text-xs flex items-center justify-between">
      <ul className="italic flex gap-2 items-center">
        <MdIcons.MdArrowBackIos
          onClick={previousPage}
          className="cursor-pointer"
          color={currentPage === 1 ? "#B2B3B4" : "#66666A"}
        />
        {pageNumber.map((number) => {
          return (
            <li
              key={number}
              onClick={() => paginate(number)}
              className={`${
                number === currentPage ? "bg-neutral-700 text-primary-500 " : ""
              } px-2 cursor-pointer font-semibold`}
            >
              {number}
            </li>
          );
        })}
        <MdIcons.MdArrowForwardIos
          onClick={nextPage}
          className="cursor-pointer"
          color={
            currentPage === Math.ceil(totalCards / cardsPerPage)
              ? "#B2B3B4"
              : "#66666A"
          }
        />
      </ul>
      <span>
        {currentPage} of {pageNumber.length}
      </span>
    </nav>
  );
}

export default Pagination;
