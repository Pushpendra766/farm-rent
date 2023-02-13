import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({additionalClass}) => {
  return (
    <div className={`w-full mx-auto flex flex-row ${additionalClass}`}>
      <input
        className="rounded-md w-full px-2 py-1 text-[#000000]"
        type="text"
        placeholder="Search for equipments or tools"
      />
      <span className="pt-2 cursor-pointer">
        <BsSearch className="relative right-6 text-primary" />
      </span>
    </div>
  );
};

export default SearchBar;
