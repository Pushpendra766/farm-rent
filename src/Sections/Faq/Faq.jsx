import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const Faq = () => {
  return (
    <div className="mobile:my-8 md:my-0">
      <p className="font-semibold text-2xl text-center">FAQs</p>
      <Component />
      <Component />
      <Component />
    </div>
  );
};

const Component = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div
      onClick={() => {
        setOpened(!opened);
      }}
      className="my-3 border-1 md:w-4/12 mobile:w-9/12 mx-auto border-gray rounded-sm cursor-auto"
    >
      <div
        className="flex items-center justify-between py-2 px-3"
        style={opened ? { backgroundColor: "#f9f9f9" } : {}}
      >
        <p>What is Farm Rent?</p>
        {opened ? <AiOutlineUp /> : <AiOutlineDown />}
      </div>
      {opened ? (
        <p className="px-2 py-1">
          Farm Rent is a startup based project which helps the farmers to grow
          there bussiness in easy way.
        </p>
      ) : null}
    </div>
  );
};

export default Faq;
