import React from "react";

const Intro = () => {
  return (
    <div className="bg-gradient-to-b from-[#AFF1DA] to-[#F9EA8F] text-[#3E3E3E]" >
      <div className="mx-8 md:mx-20 pt-10 text-center flex flex-col gap-8 bg-blue-200 z-40">
        <p className="text-3xl md:text-5xl font-bold">
          Helping Farmers,
          <br /> Empowering Nation
        </p>
        <p className="md:text-xl w-10/12 text-lg lg:w-6/12 mx-auto">
          Farm smarter, not harder - Discover the best farming tools on our
          platform. From plows to harvesters, we have everything you need to
          cultivate a successful harvest and take your farm to the next level.
        </p>
        <div className="flex flex-row gap-6 md:gap-8 justify-center text-[#ffffff] text-lg md:text-xl">
          <button className=" pt-1 md:pt-2 pb-2 md:pb-3 px-4 md:px-6 ">Download App</button>
          <button className="pt-2 pb-3 px-4">Visit Website</button>
        </div>
      </div>
      <div className="z-0">
        <img src="/images/harvester.png" className="w-full" />
      </div>
    </div>
  );
};

export default Intro;
