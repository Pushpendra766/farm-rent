import React from "react";

const HowItWorks = () => {
  return (
    <div className="py-10">
      <h1 className="text-5xl font-bold text-center">How It Works</h1>
      <div className="flex flex-row justify-around py-10">
        <div className="text-center">
          <h2 className="text-xl font-semibold">
            1. Visit Farm.Rent and book/add your farming tool.
          </h2>
          <p className="w-6/12 text-lg mx-auto">
            List your equipment on the website if you want to give you tools on
            rent. Book equipment from existing equipment present on the website.
          </p>
        </div>
        {/* <div className="mr-0">
          <img src="images/farmer.jpg" className="w-2/12 mr-0" />
        </div> */}
      </div>
    </div>
  );
};

export default HowItWorks;
