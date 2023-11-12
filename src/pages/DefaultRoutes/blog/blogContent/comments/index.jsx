import axios from "axios";
import { Link } from "react-router-dom";
import ShowComments from "./showComments";
import * as TbIcons from "react-icons/tb";
import { useEffect, useState } from "react";
import { userIcon } from "../../../../../assets";

function BlogComment({ blogID }) {
  const user = JSON.parse(localStorage.getItem("user")) || "";
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [comments, setComments] = useState([]);
  const url = import.meta.env.VITE_CLIENT_SERVER_URL;

  useEffect(() => {
    const getComments = async (blogID) => {
      try {
        let response = await axios.get(`${url}/getComments?blogId=${blogID}`);
        let arr = response.data.comments;

        for (let i = 0; i < arr.length; i++) {
          let comment = arr[i];

          if (comment.fullname) {
            arr[i] = comment;
          }

          axios
            .get(`${url}/getUser?userId=${comment.userId}`)
            .then((res) => {
              arr[i] = { ...comment, fullname: res.data.user.fullname };

              if (comment.reply.length >= 1) {
                let replies = comment.reply;

                for (let i = 0; i < replies.length; i++) {
                  let reply = replies[i];

                  if (reply.fullname) {
                    replies[i] = reply;
                  }

                  axios
                    .get(`${url}/getUser?userId=${reply.userId}`)
                    .then((res) => {
                      arr[i] = {
                        ...comment,
                        reply: { ...reply, fullname: res.data.user.fullname },
                      };
                    });
                }
              }

              setComments((prev) => [
                ...prev,
                { ...comment, fullname: res.data.user.fullname },
              ]);
            })
            .catch((err) => {
              console.error(err);
              arr[i] = comment;
            });
        }
      } catch (err) {
        console.error(err);
      }
    };

    getComments(blogID);
  }, [blogID, url]);

  const postComment = async (postID, comment) => {
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
      setComments((prev) => [
        {
          _id: response.data.comment,
          userId: user._id,
          fullname: user.fullname,
          blogId: postID,
          comment: comment,
          likes: [],
          reply: [],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        ...prev,
      ]);

      setComment("");
    } catch (err) {
      console.error(err);
      setError(<p className="text-error-500">{err.response.data.message}</p>);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user?._id) {
      // You have to be loggged in to post
      postComment(blogID, comment);
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
            className="rounded-full bg-neutral-1000 flex items-center justify-center w-8 h-8"
          >
            {user?.fullname !== "" ? (
              <h3 className="text-capitalize text-neutral-100">
                {user?.fullname.split(" ")[0].charAt(0)}
                {user?.fullname.split(" ")[1].charAt(0)}
              </h3>
            ) : (
              <img src={userIcon} className="w-4 h-4" alt="You" />
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

      <div>
        {comments.length >= 1 ? (
          <ShowComments
            user={user}
            commentArr={comments}
            changeComment={setComments}
          />
        ) : (
          <p>Be the first to comment on this post</p>
        )}
      </div>
    </div>
  );
}

export default BlogComment;
