import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { toggleClose } from "../utils/appSlice";
import CommentsSection from "./CommentsSection";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleClose());
  });

  const [param] = useSearchParams();
  return (
    <div className="w-full">
    <div className="w-full md:flex">
      <div className="flex flex-row p-4 w-full">
        <iframe
          className="w-full h-auto aspect-video"
          // width="800"
          // height="450"
          src={"https://www.youtube.com/embed/" + param.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <LiveChat />
    </div>
      <CommentsSection videoId={param.get("v")} />
    </div>
  );
};

export default WatchPage;
