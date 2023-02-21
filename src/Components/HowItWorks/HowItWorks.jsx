import React from "react";

const HowItWorks = () => {
  return (
    <div className="py-10 px-40">
      <h1 className="text-4xl font-bold text-center">How It Works</h1>
      <div className="grid grid-cols-3 pt-10 gap-20 text-center justify-items-center">
        <div className="">
          <img src="images/browse.png" width={300} />
          <h2 className="text-xl font-semibold pt-10">
            1. Browse and Choose tools :
          </h2>
          <p className="text-lg">
            Browse our selection of farming tools, equipment, and machinery on
            our website or in-person and select the ones that you need for your
            farm.
          </p>
        </div>
        <div>
          <img src="images/rent.png" width={300}/>
          <h2 className="text-xl font-semibold pt-10">2. Rent tools : </h2>
          <p className="text-lg">
            Reserve the tools you need online or by calling our customer service
            team. We offer flexible rental options, including daily, weekly, and
            monthly rates.
          </p>
        </div>
        <div>
          <img src="images/return.png" width={300}/>
          <h2 className="text-xl font-semibold pt-10">3. Use and return :</h2>
          <p className="text-lg">
            Pick up the tools from our rental location or have them delivered to
            your farm. Use the tools as needed, and when you're finished, return
            them to our rental location.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
