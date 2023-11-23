import axios from "axios";
import { useEffect, useState } from "react";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as TbIcons from "react-icons/tb";
import ReactTimeAgo from "react-time-ago";
import SubComments from "./subComments";

function ShowComments({ commentArr, user, changeComment }) {
  const [comments, setComments] = useState([]);
  const [subComment, setSubComment] = useState([]);
  const url = import.meta.env.VITE_CLIENT_SERVER_URL;

  useEffect(() => {
    for (let i = 0; i < commentArr.length; i++) {
      setSubComment((prevSub) => [...prevSub, { content: "", isReply: false }]);
    }

    setComments(commentArr);
  }, [commentArr, url]);

  const handleSubmit = (e, id) => {
    e.preventDefault();

    if (user?._id) {
      axios
        .post(
          `${url}/replyComment?userId=${user._id}&commentId=${id}`,
          { comment: subComment },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        )
        .then((res) => {
          changeComment((prev) =>
            prev.map((comment, i) => {
              if (i === id) {
                return {
                  ...comment,
                  reply: [
                    ...comment.reply,
                    {
                      _id: res.data.comment,
                      userId: user._id,
                      fullname: user.fullname,
                      commentId: id,
                      comment: comment,
                      likes: [],
                      createdAt: new Date(),
                      updatedAt: new Date(),
                    },
                  ],
                };
              }

              return comment;
            })
          );
        })
        .catch((err) => console.error(err));
    }
  };

  const setReplyingTo = (index) => {
    setSubComment((prev) =>
      prev.map((content, id) => {
        if (index === id) {
          return { ...content, isReply: !content.isReply };
        } else {
          return content;
        }
      })
    );
  };

  const likeComment = (id) => {
    const comment = comments[id];
    if (user?._id) {
      comment.likes.forEach((item) => {
        if (item._id === user._id) {
          return;
        }
      });

      axios
        .post(
          `${url}/likeComment?commentId=${comment._id}&userId=${user._id}`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        )
        .then((res) => {
          changeComment((prev) =>
            prev.map((comment, i) => {
              if (i === id) {
                return {
                  ...comment,
                  likes: [
                    ...comment.likes,
                    {
                      email: user.email,
                      fullname: user.fullname,
                      typeOfUser: "Regular",
                      _id: user._id,
                    },
                  ],
                };
              }

              return comment;
            })
          );
        });
    }
  };

  const shareComment = (id) => {
    const comment = comments[id];
    if (user?._id) {
      axios
        .post(
          `${url}/updateComment?commentId=${comment._id}&userId=${user._id}`,
          { shares: comment.shares + 1 },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        )
        .then((res) => {
          changeComment((prev) =>
            prev.map((comment, i) => {
              if (i === id) {
                return {
                  ...comment,
                  shares: comment.shares + 1,
                };
              }

              return comment;
            })
          );
        });
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 overflow-y-auto overflow-x-hidden max-h-[320px] scrollbar-hide">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="relative flex flex-col w-full h-full border-b border-neutral-700 pb-4"
          >
            <div className="flex items-start gap-2">
              <div className="rounded-full bg-neutral-1000 flex items-center justify-center w-8 h-8">
                {comment.fullname !== "" ? (
                  <h3 className="text-capitalize text-neutral-100">
                    {comment.fullname.split(" ")[0].charAt(0)}
                    {comment.fullname.split(" ")[1].charAt(0)}
                  </h3>
                ) : (
                  <BiIcons.BiUser />
                )}
              </div>
              <div className="flex flex-col w-full">
                <div className="flex items-center gap-2">
                  <h3 className="text-[13px] font-semibold">
                    {comment.fullname !== ""
                      ? `${comment.fullname.split(" ")[0]}. 
                  ${comment.fullname.split(" ")[1].charAt(0)}`
                      : "Unknown User"}
                  </h3>
                  <h6 className="text-[8px] text-neutral-500">
                    <ReactTimeAgo
                      date={new Date(comment.updatedAt)}
                      locale="en-US"
                      timeStyle="twitter"
                    />
                  </h6>
                </div>

                <p className="text-[11px] text-neutral-300">
                  {comment.comment}
                </p>

                <ul className="text-[9px] text-neutral-500 list-disc flex space-x-4 relative left-4 mt-1">
                  <li>
                    <span className="relative -left-1">
                      {comment.reply.length} reply
                    </span>
                  </li>
                  <li>
                    <span className="relative -left-1">
                      {comment.likes.length} likes
                    </span>
                  </li>
                  <li>
                    <span className="relative -left-1">
                      {comment.shares} shares
                    </span>
                  </li>
                </ul>

                <div className="flex items-center text-lg text-neutral-100 gap-2 mt-1">
                  <FaIcons.FaRegComment
                    onClick={() => setReplyingTo(index)}
                    size={14}
                    className="cursor-pointer"
                  />
                  <BiIcons.BiHeart
                    onClick={() => likeComment(index)}
                    className={`${
                      comment.likes.some((item) => item._id === user._id)
                        ? "text-error-500 "
                        : ""
                    }cursor-pointer`}
                  />
                  <AiIcons.AiOutlineShareAlt
                    onClick={() => shareComment(index)}
                    className="cursor-pointer"
                  />
                </div>

                {comment.reply.length >= 1 && (
                  <div className="mt-4">
                    {comment.reply.map((comment, index) => (
                      <SubComments commentId={comment} index={index} />
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="relative">
              <form
                onSubmit={(e) => handleSubmit(e, comment._id)}
                className={`${
                  subComment[index].isReply
                    ? "opacity-100 relative left-0"
                    : "opacity-0 absolute left-full"
                } transition-all duration-500 flex items-center gap-2 my-2 pr-3`}
              >
                <div className="rounded-full bg-neutral-1000 flex items-center justify-center w-8 h-8">
                  {user?.fullname !== undefined ? (
                    <h3 className="text-capitalize text-neutral-100">
                      {user?.fullname.split(" ")[0].charAt(0)}
                      {user?.fullname.split(" ")[1].charAt(0)}
                    </h3>
                  ) : (
                    <BiIcons.BiUser />
                  )}
                </div>
                <input
                  id="subComment"
                  name="subComment"
                  type="text"
                  value={
                    subComment[index].content ? subComment[index].content : ""
                  }
                  onChange={(e) =>
                    setSubComment((content, i) => {
                      if (index === i) {
                        return { ...content, content: e.target.value };
                      }
                      return content;
                    })
                  }
                  onInput={(e) =>
                    setSubComment((content, i) => {
                      if (index === i) {
                        return { ...content, content: e.target.value };
                      }
                      return content;
                    })
                  }
                  placeholder="Add a comment..."
                  className="pl-4 pr-8 py-3 text-xs flex-1 rounded-md outline-0 bg-neutral-1000 border border-neutral-500"
                />
                <button
                  type="submit"
                  className={`${
                    subComment.length >= 1
                      ? "opacity-100 right-6"
                      : "opacity-0 right-3"
                  } absolute duration-500`}
                >
                  <TbIcons.TbSend
                    className="text-secondary-500"
                    size="1.2rem"
                  />
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ShowComments;
