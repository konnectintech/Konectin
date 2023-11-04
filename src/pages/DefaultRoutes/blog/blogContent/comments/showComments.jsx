import axios from "axios";
import { useEffect, useState } from "react";
import { commentIcon, shareIcon, userIcon } from "../../../../../assets";
import * as BiIcons from "react-icons/bi";
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

    setComments(commentArr.slice(0, 3));
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
                      likes: 0,
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

  // const likeComment = () => {
  //   axios.post(
  //     `${url}/likePost?blogId=644070859d8fa0026dc5db65&userId=64b7e9ff8d2155c76034175a`,
  //     { comment: subComment },
  //     {
  //       headers: {
  //         Authorization: `Bearer ${user.token}`,
  //       },
  //     }
  //   );
  // };

  return (
    <>
      <div className="flex flex-col gap-4 overflow-y-auto max-h-[320px] scrollbar-hide">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="flex items-start gap-2 border-b border-neutral-700 pb-4"
          >
            <div className="rounded-full bg-secondary-300 flex items-center justify-center w-8 h-8">
              {comment.fullname !== "" ? (
                <h3 className="text-capitalize text-white">
                  {comment.fullname.split(" ")[0].charAt(0)}
                  {comment.fullname.split(" ")[1].charAt(0)}
                </h3>
              ) : (
                <img src={userIcon} className="w-4 h-4" alt="You" />
              )}
            </div>
            <div className="flex flex-col relative overflow-hidden w-full">
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

              <p className="text-[11px] text-neutral-300">{comment.comment}</p>

              <ul className="text-[9px] text-neutral-500 list-disc flex space-x-4 relative left-4 mt-1">
                <li>
                  <span className="relative -left-1">
                    {comment.reply.length} reply
                  </span>
                </li>
                <li>
                  <span className="relative -left-1">0 shares</span>
                </li>
                <li>
                  <span className="relative -left-1">
                    {comment.likes} likes
                  </span>
                </li>
              </ul>

              <div className="flex text-lg text-primary-500 gap-2 mt-1">
                <img
                  onClick={() =>
                    setSubComment((prev) =>
                      prev.map((content, id) => {
                        if (index === id) {
                          return { ...content, isReply: !content.isReply };
                        } else {
                          return content;
                        }
                      })
                    )
                  }
                  className="w-[17px] cursor-pointer"
                  src={commentIcon}
                  alt="comment"
                />
                <img
                  className="w-[17px] cursor-pointer"
                  src={shareIcon}
                  alt="share"
                />
                <BiIcons.BiLike
                  // onClick={() => likeComment(comment)}
                  className="cursor-pointer"
                />
              </div>

              {comment.reply.length >= 1 && (
                <div className="mt-4">
                  {comment.reply.map((comment, index) => (
                    <SubComments comment={comment} index={index} />
                  ))}
                </div>
              )}

              <div className="relative">
                <form
                  onSubmit={(e) => handleSubmit(e, comment._id)}
                  className={`${
                    subComment[index].isReply
                      ? "opacity-100 relative left-0"
                      : "opacity-0 absolute left-full"
                  } transition-all duration-500 flex-1 my-2`}
                >
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
                    className="pl-4 pr-8 py-3 text-xs w-full rounded-md outline-0 border border-secondary-300"
                  />
                  <button
                    type="submit"
                    className={`${
                      subComment.length >= 1
                        ? "opacity-100 right-9"
                        : "opacity-0 right-3"
                    } absolute duration-500 translate-y-1/2`}
                  >
                    <TbIcons.TbSend
                      className="text-secondary-500"
                      size="1.2rem"
                    />
                  </button>
                  <button className="absolute translate-y-1/2 right-3">
                    <TbIcons.TbX
                      onClick={() =>
                        setSubComment((prev) =>
                          prev.map((content, id) => {
                            if (index === id) {
                              return { ...content, isReply: !content.isReply };
                            } else {
                              return content;
                            }
                          })
                        )
                      }
                      className="text-error-500"
                      size="1.3rem"
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>
      {commentArr.length > comments.length ? (
        <p onClick={() => setComments(commentArr)}>Show more</p>
      ) : commentArr.length >= 4 ? (
        <p onClick={() => setComments(commentArr.slice(0, 3))}>Show less</p>
      ) : null}
    </>
  );
}

export default ShowComments;
