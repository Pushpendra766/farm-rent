import React from "react";
import Language from "../../SubComponents/Language/Language";
import SearchBar from "../../SubComponents/SearchBar/SearchBar";
import { BsFillHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router";

const Navbar = () => {
  const history = useNavigate();
  return (
    <div className="bg-gradient-to-r from-[#0BAB64] to-[#3BB78F] items-center">
      <div className="flex flex-row gap-4 lg:gap-8  text-[#ffffff] px-4 pr-8 md:px-10 lg:px-20  py-4">
        <div
          className="text-xl md:text-2xl font-bold tracking-wide cursor-pointer whitespace-nowrap"
          onClick={() => history("/")}
        >
          Farm <span className="text-[#F0FF42]">Rent</span>
        </div>
        <div className="md:hidden w-full"></div>
        <div className="flex flex-row gap-2 cursor-pointer mt-2">
          <span className="pt-1 align-middle">
            <BsFillHeartFill />
          </span>{" "}
          <span className="hidden lg:flex">Wishlist</span>
        </div>
        <SearchBar additionalClass="hidden md:flex" />
        <Language />
        <span className="flex flex-row gap-4 hidden md:flex">
          <button className="">Login</button>
          <button className="whitespace-nowrap">Sign Up</button>
        </span>
      </div>
      <div className="pb-2 mx-4">
        <SearchBar additionalClass="md:hidden" />
      </div>
    </div>
  );
};

export default Navbar;
