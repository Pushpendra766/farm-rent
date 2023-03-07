import React from "react";

const Login = () => {
  return (
    <div className="py-40 bg-[#feffeb]">
      <div
        className="py-6 px-10 xl:w-4/12 lg:w-6/12 md:w-7/12 w-10/12 mx-auto border-2 border-[#1a4d2d] rounded-md gap-4 flex flex-col bg-gradient-to-b from-[#AFF1DA] to-[#F9EA8F]"
      >
        <h2 className="text-center text-xl font-semibold">Login</h2>
        <div>
          <label>Email : </label>
          <input
            type="email"
            className="border rounded-md w-full px-2 py-1 bg-[#feffeb] border-[#1a4d2d]"
          ></input>
        </div>

        <div>
          <label>Password : </label>
          <input
            type="password"
            className="border rounded-md w-full px-2 py-1 bg-[#feffeb] border-[#1a4d2d]"
          ></input>
        </div>
        <button className="hover:scale-100 py-2">Login</button>
      </div>
    </div>
  );
};

export default Login;
