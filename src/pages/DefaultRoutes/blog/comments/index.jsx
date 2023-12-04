import axios from "axios";
import { useEffect, useState } from "react";
import CommentDetails from "./commentDetails";
import PostComment from "./post-comment";
import { konectinLogo } from "../../../../assets";

function CommentSection({ blogID, pathname }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = import.meta.env.VITE_CLIENT_SERVER_URL;

  useEffect(() => {
    const getComments = async (blogID) => {
      try {
        const response = await axios.get(`${url}/getComments?blogId=${blogID}`);
        setComments(response.data.comments);
      } catch (err) {
        console.error(err);
      }
    };

    getComments(blogID);
  }, [blogID, url]);

  return (
    <div className="flex flex-col gap-4 mt-6">
      <PostComment
        updateComments={setComments}
        postID={blogID}
        pathname={pathname}
        setLoading={setLoading}
      />

      <div className="flex flex-col gap-4 overflow-y-auto overflow-x-hidden max-h-[320px] scrollbar-hide relative">
        {loading && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-neutral-500 bg-opacity-50 z-50 animate-pulse">
            <img src={konectinLogo} alt="Konectin" />
          </div>
        )}
        {comments.length >= 1 ? (
          comments.map((comment, index) => {
            return (
              <CommentDetails
                key={index}
                id={index}
                setLoading={setLoading}
                comment={comment}
                pathname={pathname}
                updateComments={setComments}
                canReply
              />
            );
          })
        ) : (
          <p>Be the first to comment on this post</p>
        )}
      </div>
    </div>
  );
}

export default CommentSection;
