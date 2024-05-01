import { search } from "../../../../assets";

export default function FilterDropdown({
  isFilterOpen,
  toggleFilter,
  searchQuery,
  handleSearch,
  handleSort,
}) {
  const sortHandler = (sort) => {
    toggleFilter();
    handleSort(sort);
  };

  return (
    isFilterOpen && (
      <>
        <div
          className="fixed top-0 left-0 h-screen w-full"
          onClick={toggleFilter}
        ></div>
        <div className="absolute right-0 top-14 w-56 px-3 py-4 flex flex-col gap-2 rounded bg-white">
          <div className="h-[34px] border border-solid border-black rounded p-1.5 flex justify-center items-center gap-1">
            <input
              type="text"
              className="focus:outline-none placeholder:text-neutral-500 w-5/6 text-sm"
              name="custom-search"
              id="custom-search"
              placeholder="Custom search"
              value={searchQuery}
              onChange={handleSearch}
            />
            <button
              onClick={() => handleSearch(searchQuery)}
              className="rounded-full bg-[#f5f5f5] w-6 h-6 flex justify-center items-center"
            >
              <img src={search} alt="Custom search" />
            </button>
          </div>
          <div
            onClick={() => sortHandler("oldest")}
            className="h-[34px] p-1.5 hover:bg-[#f5f5f5] cursor-pointer rounded"
          >
            <p>Oldest to Newest</p>
          </div>
          <div
            onClick={() => sortHandler("newest")}
            className="h-[34px] p-1.5 hover:bg-[#f5f5f5] cursor-pointer rounded"
          >
            <p>Newest to Oldest</p>
          </div>
          <div className="h-[34px] p-1.5 hover:bg-[#f5f5f5] cursor-pointer rounded">
            <p>Latest Edit</p>
          </div>
        </div>
      </>
    )
  );
}
