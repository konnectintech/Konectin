import * as BsIcon from "react-icons/bs";

const Suggestions = ({
  jobTitle,
  handleAddSuggestion,
  responsibilities,
  selected,
}) => {
  return (
    <section className="flex flex-col gap-2 mt-2">
      <p className="text-neutral-200 font-extralight tracking-[-0.01em] text-sm">
        Showing {responsibilities.length} results for{" "}
        <span className="font-bold">{jobTitle}</span>
      </p>
      <div className="bg-neutral-1000 border border-neutral-500 overflow-y-auto rounded h-full max-h-[190px] min-h-[100px]">
        {responsibilities.map((item, index) => {
          return item.error ? (
            <div
              key={index}
              className={`p-3 w-full flex gap-4 items-start border-b border-neutral-500 animate-pulse`}
            >
              <div>
                <div className="h-12 w-12 bg-neutral-500 bg-opacity-70 rounded" />
              </div>
              <div className="w-full space-y-1">
                <div className="h-4 bg-neutral-500 bg-opacity-70 w-full rounded" />
                <div className="h-4 bg-neutral-500 bg-opacity-70 w-full rounded" />
                <div className="h-4 bg-neutral-500 bg-opacity-70 w-24 rounded" />
              </div>
            </div>
          ) : (
            <div
              key={index}
              className={`${
                selected.includes(item.content)
                  ? "bg-primary-700 text-white"
                  : "text-neutral-100"
              } border-b border-neutral-500 p-3 w-full`}
            >
              <div
                className={`${
                  item.loading ? "opacity-10" : "flex items-start gap-4 w-full"
                }`}
              >
                {!item.loading && selected.includes(item.content) ? (
                  <div className="bg-green-700 text-white text-xs font-extralight tracking-wide p-1 rounded-md">
                    <BsIcon.BsCheck size="1.5rem" color="white" />
                  </div>
                ) : (
                  <div
                    onClick={() => handleAddSuggestion(item)}
                    className="bg-primary-500 text-white text-xs font-extralight tracking-wide p-2 rounded-md cursor-pointer"
                  >
                    Add
                  </div>
                )}

                <p
                  className={`${
                    item.loading ? "blurry-text animate-pulse" : ""
                  } text-xs font-light`}
                >
                  {item.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Suggestions;
