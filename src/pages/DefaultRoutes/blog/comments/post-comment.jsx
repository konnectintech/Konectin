import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import * as TbIcons from "react-icons/tb";
import { useAuth } from "../../../../middleware/auth";

function PostComment({ updateComments, postID, pathname, setLoading }) {
  const { user } = useAuth();
  const [error, setError] = useState("");
  const [comment, setComment] = useState("");

  const url = import.meta.env.VITE_CLIENT_SERVER_RENDER_URL;

  const postComment = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${url}/commentPost?userId=${user._id}&blogId=${postID}`,
        { comment: comment },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      setError("");
      updateComments((prev) =>
        [response.data.comment, ...prev]
          .sort(function (a, b) {
            // Convert the date strings to Date objects
            let dateA = new Date(a.createdAt);
            let dateB = new Date(b.createdAt);

            // Subtract the dates to get a value that is either negative, positive, or zero
            return dateA - dateB;
          })
          .reverse()
      );

      setLoading(false);
      setComment("");
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError(<p className="text-error-500">{err.response.data.message}</p>);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user?._id) {
      // You have to be loggged in to post
      postComment();
    } else {
      setError(
        <p className="text-red-500">
          You have to be logged in to comment.{" "}
          <Link
            onClick={() => sessionStorage.setItem("status", pathname)}
            className="text-primary-500"
            to="/login"
          >
            Click here to log in
          </Link>
        </p>
      );
    }
  };

  return (
    <div className="border-b border-neutral-700 pb-4">
      <div className="flex gap-2">
        <label
          htmlFor="generatedID"
          className="rounded-full bg-neutral-1000 flex items-center justify-center w-8 h-8"
        >
          {user?.fullname !== undefined ? (
            <h3 className="text-capitalize text-neutral-100">
              {user?.fullname.split(" ")[0].charAt(0)}
              {user?.fullname.split(" ")[1].charAt(0)}
            </h3>
          ) : (
            <BiUser />
          )}
        </label>
        <form onSubmit={handleSubmit} className="flex-1 relative">
          <textarea
            id="generatedID"
            name="generatedID"
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onInput={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="md:h-10 pl-4 pr-8 py-3 text-xs w-full rounded-md outline-0 border bg-neutral-1000 border-neutral-500 md:no-scrollbar"
          />
          <button
            type="submit"
            className={`${
              comment.length >= 1 ? "opacity-100" : "opacity-0"
            } absolute transition-opacity duration-500 translate-y-1/2 right-3`}
          >
            <TbIcons.TbSend className="text-secondary-500" size="1.2rem" />
          </button>
        </form>
      </div>
      {error && error}
    </div>
  );
}

export default PostComment;
