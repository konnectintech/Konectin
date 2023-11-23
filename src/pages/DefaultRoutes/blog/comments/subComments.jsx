import axios from "axios";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import ReactTimeAgo from "react-time-ago";
import { useEffect, useState } from "react";

function SubComments({ commentId, index }) {
  const [comment, setComment] = useState();
  const url = import.meta.env.VITE_CLIENT_SERVER_URL;

  useEffect(() => {
    const getComment = async (id) => {
      try {
        let response = await axios.get(`${url}/getComment?commentId=${id}`);
        let data = response.data.comments;
        let shares = 0;

        if (data.shares) {
          shares = data.shares;
        }

        await axios
          .get(`${url}/getUser?userId=${data.userId}`)
          .then((res) => {
            setComment({
              ...data,
              fullname: res.data.user.fullname,
              shares,
            });
          })
          .catch((err) => {
            console.error(err);
          });
      } catch (err) {
        console.log(err);
      }
    };

    getComment(commentId);
  }, [commentId, url]);

  return (
    <div key={comment?.comment + index} className="flex items-start gap-2">
      <div className="rounded-full bg-neutral-1000 flex items-center justify-center w-8 h-8">
        {comment?.fullname !== "" ? (
          <h3 className="text-capitalize text-neutral-100">
            {comment?.fullname.split(" ")[0].charAt(0)}
            {comment?.fullname.split(" ")[1].charAt(0)}
          </h3>
        ) : (
          <BiIcons.BiUser />
        )}
      </div>
      <div className="flex flex-col w-full">
        <div className="flex items-center gap-2">
          <h3 className="text-[13px] font-semibold">
            {comment?.fullname !== ""
              ? `${comment?.fullname.split(" ")[0]}. 
                  ${comment?.fullname.split(" ")[1].charAt(0)}`
              : "Unknown User"}
          </h3>
          <h6 className="text-[8px] text-neutral-500">
            {comment?.updatedAt && (
              <ReactTimeAgo
                date={new Date(comment?.updatedAt)}
                locale="en-US"
                timeStyle="twitter"
              />
            )}
          </h6>
        </div>

        <p className="text-[11px] text-neutral-300">{comment?.comment}</p>

        <ul className="text-[9px] text-neutral-500 list-disc flex space-x-4 relative left-4 mt-1">
          <li>
            <span className="relative -left-1">
              {comment?.likes.length} likes
            </span>
          </li>
          <li>
            <span className="relative -left-1">{comment?.shares} shares</span>
          </li>
        </ul>

        <div className="flex text-lg text-primary-500 gap-2 mt-1">
          <BiIcons.BiHeart
          // onClick={() => likeComment(index)}
          // className={`${
          //   comment.likes.some((item) => item._id === user._id)
          //     ? "text-error-500 "
          //     : ""
          // }cursor-pointer`}
          />
          <AiIcons.AiOutlineShareAlt
            // onClick={() => likeComment(comment, index)}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default SubComments;
