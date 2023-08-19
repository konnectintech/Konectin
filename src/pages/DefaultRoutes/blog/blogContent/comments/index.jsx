import axios from "axios";
import { Link } from "react-router-dom";
import ShowComments from "./showComments";
import * as TbIcons from "react-icons/tb";
import { useEffect, useState } from "react";
import { userIcon } from "../../../../../assets";
import { useLocalStorage } from "../../../../../middleware/storage";

function BlogComment({ blogID }) {
  const [user] = useLocalStorage("user");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async (blogID) => {
      try {
        let authresult = await axios.get(
          `https://konectin-backend-hj09.onrender.com/user/getComments?blogId=${blogID}`
        );
        setComments(authresult.data.comments);
      } catch (err) {
        setError("Please check internet connection");
      }
    };

    getComments(blogID);
  }, [blogID, comments]);

  const postComment = async (postID, comment) => {
    try {
      await axios.post(
        `https://konectin-backend-hj09.onrender.com/user/commentPost?userId=${user._id}&postId=${postID}`,
        { comment: comment },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      setError("");
      setComments((prev) => [
        ...prev,
        {
          _id: "644b6bac767db54595809066",
          userId: user._id,
          postId: postID,
          comment: comment,
          createdAt: "2023-04-19T23:06:53.794+00:00",
          updatedAt: "2023-04-19T23:06:53.794+00:00",
          __v: 0,
        },
      ]);
      setComment("");
    } catch (err) {
      setError(
        <p className="text-red-500">
          You have to be logged in to comment.{" "}
          <Link className="text-primary-500" to="/login">
            Click here to log in
          </Link>
        </p>
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user?._id) {
      // You have to be loggged in to post
      postComment(blogID, comment);
      setError("");
    } else {
      setError(
        <p className="text-red-500">
          You have to be logged in to comment.{" "}
          <Link className="text-primary-500" to="/login">
            Click here to log in
          </Link>
        </p>
      );
    }
  };

  return (
    <div className="flex flex-col gap-4 mt-6">
      <div className="border-b border-neutral-700 pb-4">
        <div className="flex items-center gap-2">
          <label
            htmlFor="generatedID"
            className="rounded-full bg-secondary-200 flex items-center justify-center w-8 h-8"
          >
            <img src={userIcon} className="w-4 h-4" alt="You" />
          </label>
          <form onSubmit={handleSubmit} className="flex-1 relative">
            <textarea
              id="generatedID"
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onInput={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
              className="md:h-10 pl-4 pr-8 py-3 text-xs w-full rounded-md outline-0 border border-secondary-200 md:no-scrollbar"
            />
            <button
              type="submit"
              className={`${
                comment.length >= 1 ? "opacity-100" : "opacity-0"
              } absolute transistion-opacity duration-500 translate-y-1/2 right-3`}
            >
              <TbIcons.TbSend className="text-secondary-400" size="1.2rem" />
            </button>
          </form>
        </div>
        {error && error}
      </div>

      <div>
        {comments.length >= 1 ? (
          <ShowComments commentArr={comments} />
        ) : (
          <p>Be the first to comment on this post</p>
        )}
      </div>
    </div>
  );
}

export default BlogComment;
