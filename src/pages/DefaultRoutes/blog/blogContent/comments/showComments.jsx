import axios from "axios";
import { useEffect, useState } from "react";
import { userIcon } from "../../../../../assets";

function ShowComments({ commentArr }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    commentArr.map((comment) => {
      const getUser = async (comment) => {
        try {
          let res = await axios.get(
            `https://konectin-backend-hj09.onrender.com/user/getUser?userId=${comment.userId}`
          );
          setComments((prev) => [
            ...prev,
            { ...comment, fullname: res.data.user.fullname },
          ]);
        } catch (err) {
          console.error(err);
        }
      };

      return getUser(comment);
    });
  }, [commentArr]);

  return (
    <div className="flex flex-col gap-4">
      {comments.map((comment, index) => (
        <div
          key={index}
          className="flex items-start gap-2 border-b border-neutral-700 pb-4"
        >
          <div className="rounded-full bg-secondary-200 flex items-center justify-center w-8 h-8">
            <img src={userIcon} className="w-4 h-4" alt="You" />
          </div>
          <div>
            <hgroup className="flex items-center gap-2">
              <h3 className="text-[13px] font-semibold">
                {comment.fullname.split(" ")[0]}.{" "}
                {comment.fullname.split(" ")[1].charAt(0)}
              </h3>
              <h6 className="text-[8px] text-neutral-500">
                {Math.abs(new Date() - new Date(comment.updatedAt))}
              </h6>
            </hgroup>

            <p className="text-[11px] text-neutral-400">{comment.comment}</p>
          </div>
        </div>
      ))}
      <p>Hi</p>
    </div>
  );
}

export default ShowComments;
