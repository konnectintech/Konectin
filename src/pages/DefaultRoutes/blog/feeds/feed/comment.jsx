import { userIcon } from "../../../../../assets";

function BlogComment() {
  return (
    <div className="flex flex-col gap-4 mt-6">
      <div className="flex items-center gap-2 border-b border-neutral-700 pb-4">
        <label
          htmlFor="generatedID"
          className="rounded-full bg-secondary-200 flex items-center justify-center w-8 h-8"
        >
          <img src={userIcon} className="w-4 h-4" alt="" />
        </label>
        <input
          id="generatedID"
          type="text"
          placeholder="Add a comment..."
          className="px-4 py-3 text-xs rounded-md flex-1 outline-0 border border-secondary-200"
        />
      </div>
    </div>
  );
}

export default BlogComment;
