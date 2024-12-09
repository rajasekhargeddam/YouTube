import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { useSelector } from "react-redux";
import { setSearchCache } from "../utils/searchSlice";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCeche = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCeche[searchInput]) {
        setsuggestions(searchCeche[searchInput]);
      } else {
        fetchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [searchInput]);

  const fetchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchInput);
    const json = await data.json();
    setsuggestions(json[1]);
    dispatch(setSearchCache({ [searchInput]: json[1] }));
  };

  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="sticky top-0 bg-white flex justify-between m-2 p-2 shadow-lg md:px-8 rounded-md">
      <div className="flex">
        <img
          onClick={handleToggleMenu}
          className="h-8 cursor-pointer"
          alt="more"
          src="https://cdn.icon-icons.com/icons2/1659/PNG/512/3844438-hamburger-menu-more-navigation_110319.png"
        />
        <img
          className="h-6 md:h-8"
          alt="Youtube-Logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
      </div>
      <div className="relative flex flex-col justify-center w-5/6">
        <div className="flex justify-center items-center">
          <input
            className="border border-gray-400 p-1 pl-4 rounded-l-full w-3/6"
            type="text"
            placeholder="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-2 rounded-r-full">
            <img
              className="h-8 rounded-full"
              alt="search"
              src="https://static.vecteezy.com/system/resources/thumbnails/009/652/218/small/magnifying-glass-icon-isolated-on-white-background-search-illustration-vector.jpg"
            />
          </button>
        </div>
        {showSuggestions && (
          <ul className="absolute top-full flex flex-col justify-center md:w-7/12 place-self-center p-2 bg-white border border-gray-200 rounded-lg shadow-md">
            {suggestions.map((s) => (
              <li key={s} className="p-1 shadow-sm">
                🔍 {s}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="">
        <img
          className="h-8"
          alt="User"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;
