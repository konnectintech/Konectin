import axios from "axios";
import { useEffect } from "react";
import { userIcon } from "../../../../../assets";
import { useLocalStorage } from "../../../../../middleware/storage";

function BlogComment({ blogID }) {
  const [user] = useLocalStorage("user");

  useEffect(() => {
    const getComments = async (blogID) => {
      try {
        let authresult = await axios.get(
          `https://konectin-backend-hj09.onrender.com/user/getComments?blogId=${blogID}`,
          {
            blogId: blogID,
          },
          {
            headers: {
              Authorization: "bearer " + user.token,
            },
          }
        );
        console.log(authresult);
      } catch (err) {
        console.error(err);
      }
    };

    getComments(blogID);
  }, [blogID, user]);

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
