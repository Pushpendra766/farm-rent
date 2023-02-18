import React from "react";

const Testimonials = () => {
  return (
    <div className="md:my-6 mobile:mb-8 mobile:mt-4">
      <p className="text-center text-2xl font-semibold">Testimonials</p>
      <div className="md:flex mx-auto w-10/12 my-7 items-center justify-evenly">
        <Component />
        <Component scale={true} />
        <Component />
      </div>
    </div>
  );
};

const Component = ({ scale }) => {
  return (
    <div
      className={
        scale === true
          ? "mx-1 mobile:w-11/12 mobile:mx-auto md:w-3/12 rounded-3xl shadow-2xl my-5 scale-125"
          : "mx-1 mobile:w-11/12 mobile:mx-auto md:w-3/12 rounded-3xl shadow-2xl my-5"
      }
      style={{ backgroundColor: "#f2f2f2" }}
    >
      <div className="bg-dark-green px-2 pb-2 flex items-center rounded-xl">
        <img
          className="rounded-full w-3/12 -mt-6 border-4 border-dark-green"
          src="https://square-vn.com/app/dscms/assets/images/person-1.jpg?v=1653932875"
          alt=""
        />
        <p className="text-white font-semibold ml-3 text-base">Sharad Bidve</p>
      </div>
      <p className="py-2 px-5 text-sm">
        A farm rent app helps farmers and landowners manage rent payments and
        leases through an easy-to-use interface that tracks payments, monitors
        lease agreements, and provides payment reminders.
      </p>
    </div>
  );
};

export default Testimonials;
