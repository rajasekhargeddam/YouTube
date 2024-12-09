import React, { useState } from "react";
import { YOUTUBE_API_KEY, YOUTUBE_COMMENT_API } from "../utils/constants";

const Comments = ({ comment }) => {
  const { authorDisplayName, textDisplay } =
    comment?.snippet?.topLevelComment?.snippet;
  console.log(comment?.snippet?.topLevelComment?.snippet);

  return (
    <div className="flex p-2 bg-gray-200 rounded-md m-2">
      <img
        className="w-8 h-8 mx-4"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="break-words">
        <p className="font-bold text-sm text-justify">{authorDisplayName}</p>
        <p className="text-sm">{textDisplay}</p>
      </div>
    </div>
  );
};

const CommentsSection = ({ videoId }) => {
  const [commentsList, setCommentsList] = useState([]);
  const [openComment, setOpenComment] = useState(false);

  const fetchComments = async () => {
    const data = await fetch(
      YOUTUBE_COMMENT_API + videoId + "&key=" + YOUTUBE_API_KEY
    );
    const json = await data.json();
    console.log(json.items);
    setCommentsList(json.items);
  };

  useState(() => {
    fetchComments();
  }, []);

  return (
    <div className="p-4 md:w-2/3">
      <h1
        className="bg-gray-300 p-2 cursor-pointer"
        onClick={() => setOpenComment(!openComment)}
      >
        Comments :{" "}
      </h1>
      {openComment &&
        commentsList.map((item) => <Comments key={item.id} comment={item} />)}
    </div>
  );
};

export default CommentsSection;
