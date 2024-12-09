import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="fixed top-12 md:static bg-white p-4 m-2 shadow-xl md:w-2/12 rounded-md">
      <ul className="border-b p-2 space-y-4">
        <li> <Link to="/"> Home </Link> </li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h2 className="font-bold">YOU</h2>
      <ul className="border-b p-2 space-y-2">
        <li>History</li>
        <li>Playlist</li>
        <li>Your videos</li>
        <li>Watch Later</li>
      </ul>
      <h2 className="font-bold">Explore</h2>
      <ul className="p-2 space-y-2">
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Games</li>
        <li>News</li>
        <li>Sports</li>
      </ul>
    </div>
  );
};

export default Sidebar;
