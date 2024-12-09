import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttons = [
    "all",
    "movies",
    "music",
    "games",
    "sports",
    "songs",
    "podcasts",
    "software",
    "program",
    "Education",
    "news",
  ];

  return (
    <div className="hidden md:block">
      {buttons.map((item) => (
        <Button key={item} btnName={item} />
      ))}
    </div>
  );
};

export default ButtonList;
