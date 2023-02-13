import React from "react";
import Language from "../../SubComponents/Language/Language";
import SearchBar from "../../SubComponents/SearchBar/SearchBar";
import { BsFillHeartFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="flex flex-row gap-8 bg-[#54B435] text-[#ffffff] px-20 py-4">
      <span className="text-xl font-bold tracking-wide cursor-pointer">Farm Rent</span>
      <div className="flex flex-row gap-2 cursor-pointer">
        <span className="pt-1 align-middle">
          <BsFillHeartFill />
        </span>{" "}
        <span>Wishlist</span>
      </div>
      <SearchBar />
      <Language />
      <span>login/signup</span>
    </div>
  );
};

export default Navbar;
