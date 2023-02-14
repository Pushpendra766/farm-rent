import React from "react";

import Category from "../Category/Category";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router";

const CategorySection = () => {
  const userRef = React.useRef(null);
  const { innerWidth } = window;
  const history = useNavigate();
  return (
    <div
      className="flex relative align-middle m-2 py-1 rounded-xl border-lightest-grey border-1 shadow-xl my-6"
      style={{ width: "98vw" }}
    >
      <div className="w-6/12 flex flex-col items-center p-1 rounded-md mx-1 justify-center">
        <img
          className="w-full rounded"
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <p className="text-xl py-1">Best of Tractors</p>
        <button
          className="bg-dark-green border-yellow border-1 text-yellow outline-0 py-1"
          onClick={() => {
            history("/Category/Tractors");
          }}
        >
          View All
        </button>
      </div>
      <div
        className="flex overflow-x-scroll items-center scrollbar-hide"
        ref={userRef}
      >
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
      <div
        className="absolute right-5 bg-lightest-grey p-2 rounded-full top-1/3 z-10 cursor-pointer opacity-70 transition-all hover:opacity-100"
        onClick={() => {
          userRef.current.scrollBy(500, 0);
        }}
      >
        <AiOutlineArrowRight size={25} color="white" />
      </div>
      <div
        className="absolute left-72 bg-lightest-grey p-2 rounded-full top-1/3 z-10 cursor-pointer opacity-70 transition-all hover:opacity-100"
        onClick={() => {
          userRef.current.scrollBy(-500, 0);
        }}
      >
        <AiOutlineArrowLeft size={25} color="white" />
      </div>
    </div>
  );
};

export default CategorySection;
