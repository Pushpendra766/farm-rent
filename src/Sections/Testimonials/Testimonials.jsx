import React, { useEffect } from "react";
import { gsap } from "gsap";

const Testimonials = () => {
  return (
    <div className="md:my-6 mobile:mb-8 mobile:mt-4">
      <p className="text-center text-2xl font-semibold">
        {"Testimonials".toUpperCase()}
      </p>
      <div className="md:flex h-[60vh] mx-auto mt-16 w-10/12 items-center justify-evenly">
        <Component />
        <Component />
        <Component />
        <Component />
      </div>
    </div>
  );
};

const Component = () => {
  const boxRef = React.useRef(null);
  useEffect(() => {
    gsap
      .timeline({ repeat: -1, defaults: { duration: 2 } })
      .from(boxRef.current, { x: -25 })
      .to(boxRef.current, { x: 25 })
      .to(boxRef.current, { x: -25 });
  }, []);
  return (
    <div
      ref={boxRef}
      className="mx-4 rounded-xl px-3 py-4"
      style={{ backgroundColor: "#f2f2f2" }}
    >
      <img
        className="rounded-full mx-auto w-8/12 -mt-20"
        src="https://square-vn.com/app/dscms/assets/images/person-1.jpg?v=1653932875"
        alt=""
      />
      <p className="text-center font-semibold mt-1 text-lg">Kayla Rose</p>
      <p className="px-2 text-center">
        A farm rent app helps farmers and landowners manage rent payments and
        leases through an easy-to-use interface that tracks payments, monitors
        lease agreements, and provides payment reminders.
      </p>
    </div>
  );
};

export default Testimonials;
