/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import ReplyComment from "./replyComment";
import * as BiIcons from "react-icons/bi";
import * as Io5Icons from "react-icons/io5";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import ReactTimeAgo from "react-time-ago";

function CommentDetails({
  id,
  comment,
  canReply,
  updateComments,
  setLoading,
  pathname,
}) {
  const [name, setName] = useState("");
  const [liked, setLiked] = useState(false);
  const [replies, setReplies] = useState([]);
  const [openReply, setOpenReply] = useState(false);
  const [commentRef, setCommentRef] = useState(comment);

  const user = JSON.parse(localStorage.getItem("user")) || "";
  const url = import.meta.env.VITE_CLIENT_SERVER_URL;

  useEffect(() => {
    updateComments((prev) =>
      prev.map((item, i) => {
        if (i === id) {
          return commentRef;
        }
        return item;
      })
    );
  }, [commentRef]);

  useEffect(() => {
    axios
      .get(`${url}/getUser?userId=${comment.userId}`)
      .then((res) => {
        setName(res.data.user.fullname);
      })
      .catch((err) => {
        console.error(err);
        setName("");
      });
  }, [comment.userId, url]);

  useEffect(() => {
    if (canReply && comment.reply.length >= 1) {
      for (let i = 0; i < comment.reply.length; i++) {
        axios
          .get(`${url}/getComment?commentId=${comment.reply[i]}`)
          .then((res) => {
            if (replies.some((reply) => reply._id === comment._id)) return;
            setReplies((prev) => [...prev, res.data.comment]);
          });
      }
    }

    comment.likes.forEach((item) => {
      if (item._id === user._id) {
        setLiked(true);
      }
    });
  }, []);

  const likeComment = async () => {
    if (user?._id) {
      try {
        await axios.post(
          `${url}/likeComment?commentId=${commentRef._id}&userId=${user._id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );

        setLiked((prev) => !prev);

        if (liked) {
          const likes = [];

          commentRef.likes.forEach((like) => {
            if (like._id !== user._id) {
              likes.push(like);
            }
          });

          setCommentRef((prev) => ({
            ...prev,
            likes: likes,
          }));
        } else {
          setCommentRef((prev) => ({
            ...prev,
            likes: [
              ...commentRef.likes,
              {
                email: user.email,
                fullname: user.fullname,
                typeOfUser: "Regular",
                _id: user._id,
              },
            ],
          }));
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const shareComment = async () => {
    const shareData = {
      title: "Konectin Post",
      text: comment.comment,
      url: pathname,
    };

    try {
      await navigator.share(shareData);

      await axios
        .patch(`${url}/updateCommentShare?commentId=${comment._id}`)
        .then((res) => {
          console.log("Shared");
          setCommentRef((prev) => ({
            ...prev,
            numOfShares: prev.numOfShares + 1,
          }));
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className={`${
        canReply ? "border-b border-neutral-700 pb-4" : "flex flex-col"
      } relative flex flex-col w-full h-full`}
    >
      <div className="flex items-start gap-2">
        <div className="rounded-full bg-neutral-1000 flex items-center justify-center w-8 h-8">
          {name !== "" ? (
            <h3 className="text-capitalize text-neutral-100">
              {name.split(" ")[0].charAt(0)}
              {name.split(" ")[1].charAt(0)}
            </h3>
          ) : (
            <BiIcons.BiUser />
          )}
        </div>

        <div className="flex flex-col w-full">
          <div className="flex items-center gap-2">
            <h3 className="text-[13px] font-semibold">
              {name !== ""
                ? `${name.split(" ")[0]}. 
                  ${name.split(" ")[1].charAt(0)}`
                : "Unknown User"}
            </h3>
            <h6 className="text-[8px] text-neutral-500">
              <ReactTimeAgo
                date={new Date(commentRef.updatedAt)}
                locale="en-US"
                timeStyle="twitter"
              />
            </h6>
          </div>

          <p className="text-[11px] text-neutral-300">{commentRef.comment}</p>

          <ul className="text-[9px] text-neutral-500 list-disc flex space-x-4 relative left-4 mt-1">
            {canReply && (
              <li>
                <span className="relative -left-1">
                  {comment.reply.length} reply
                </span>
              </li>
            )}
            <li>
              <span className="relative -left-1">
                {commentRef.likes.length} likes
              </span>
            </li>
            <li>
              <span className="relative -left-1">
                {commentRef.numOfShares} shares
              </span>
            </li>
          </ul>

          <div className="flex items-center text-lg text-neutral-100 gap-2 mt-1">
            {canReply && (
              <FaIcons.FaRegComment
                onClick={() => setOpenReply((prev) => !prev)}
                size={14}
                className="cursor-pointer"
              />
            )}
            <Io5Icons.IoHeartSharp
              onClick={likeComment}
              strokeWidth="30px"
              className={`${
                liked ? "text-error-500" : "text-white"
              } cursor-pointer stroke-neutral-100`}
            />
            <AiIcons.AiOutlineShareAlt
              onClick={shareComment}
              className="cursor-pointer"
            />
          </div>
          <div className="mt-4 flex flex-col">
            {canReply &&
              replies.length >= 1 &&
              replies.map((comment, index) => (
                <CommentDetails
                  key={index}
                  comment={comment}
                  user={user}
                  updateComments={updateComments}
                />
              ))}
          </div>
        </div>
      </div>

      {canReply && (
        <ReplyComment
          updateComment={setReplies}
          isReply={openReply}
          setLoading={setLoading}
          commentId={commentRef._id}
          pathname={pathname}
        />
      )}
    </div>
  );
}

export default CommentDetails;
