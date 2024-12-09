import React from "react";

const ThumbnailCard = ({ videoInfo }) => {
  const { title, thumbnails, channelTitle } = videoInfo.snippet;
  const { viewCount } = videoInfo.statistics;

  return (
    <div className="w-full m-4 rounded-lg">
      <img className="rounded-lg w-full" src={thumbnails.medium.url} alt="Thumbnail" />
      <div className="p-2">
      <h2 className="font-bold line-clamp-2">{title}</h2>
      <p>{channelTitle}</p>
      <p>{viewCount} views</p>
      </div>
    </div>
  );
};

export default ThumbnailCard;
