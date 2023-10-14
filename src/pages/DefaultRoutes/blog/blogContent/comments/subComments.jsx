import * as BiIcons from "react-icons/bi";
import ReactTimeAgo from "react-time-ago";
import { shareIcon } from "../../../../../assets";

function SubComments({ comment, index }) {
  return (
    <div key={comment.comment + index} className="flex items-start gap-2">
      <div className="rounded-full bg-secondary-300 flex items-center justify-center w-8 h-8">
        <h3 className="text-capitalize text-white">
          {comment?.fullname.split(" ")[0].charAt(0)}
          {comment?.fullname.split(" ")[1].charAt(0)}
        </h3>
      </div>
      <div className="flex flex-col">
        <hgroup className="flex items-center gap-2">
          <h3 className="text-[13px] font-semibold">
            {comment?.fullname.split(" ")[0]}.{" "}
            {comment?.fullname.split(" ")[1].charAt(0)}
          </h3>
          <h6 className="text-[8px] text-neutral-500">
            <ReactTimeAgo
              date={comment.updatedAt}
              locale="en-US"
              timeStyle="twitter"
            />
          </h6>
        </hgroup>

        <p className="text-[11px] text-neutral-300">{comment.comment}</p>

        <ul className="text-[9px] text-neutral-500 list-disc flex space-x-4 relative left-4 mt-1">
          <li>
            <span className="relative -left-1">0 shares</span>
          </li>
          <li>
            <span className="relative -left-1">0 likes</span>
          </li>
        </ul>

        <div className="flex text-lg text-primary-500 gap-2 mt-1">
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
      </div>
    </div>
  );
}

export default SubComments;
