import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import ThumbnailCard from "./ThumbnailCard";
import { Link } from "react-router-dom";
import { toggleOpen } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videoApi, setVideoApi] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.innerWidth >= 750 && dispatch(toggleOpen());
  } , [dispatch] );

  const fetchData = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideoApi(json.items);
  };

  if(videoApi.length === 0) return <Shimmer/>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mr-4">
      {videoApi.map((item) => (
        <Link to={"/watch?v="+item.id} key={item.id}>
          <ThumbnailCard videoInfo={item} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
