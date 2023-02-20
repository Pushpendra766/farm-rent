import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import TractorAnimation from "../TractorAnimation/TractorAnimation";
const Footer = () => {
  return (
    <footer
      className="relative shadow-xl pt-3 pb-6 mb-1 bg-gradient-to-b from-[#63A4FF] to-[#83EAF1]"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-blueGray-700">
              Let's keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <button
                className="bg-lightest-grey text-lightest-grey hover:bg-mid shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <AiFillTwitterCircle
                  style={{ marginLeft: "-11px", marginTop: "4px" }}
                  size={30}
                  color="green"
                />
              </button>
              <button
                className="bg-lightest-grey hover:bg-mid  text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <AiFillInstagram
                  style={{ marginLeft: "-11px", marginTop: "4px" }}
                  size={30}
                  color="green"
                />
              </button>
              <button
                className="bg-lightest-grey  hover:bg-mid  text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <AiFillLinkedin
                  style={{ marginLeft: "-11px", marginTop: "4px" }}
                  size={30}
                  color="green"
                />
              </button>
              <button
                className="bg-lightest-grey hover:bg-mid  text-green shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <AiFillGithub
                  style={{ marginLeft: "-11px", marginTop: "4px" }}
                  size={30}
                  color="green"
                />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex  items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray text-md font-bold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-dark hover:text-yellow font-semibold block pb-2 text-sm"
                      href=""
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-dark hover:text-yellow font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-dark hover:text-yellow font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-dark hover:text-yellow font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray text-md font-bold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-dark hover:text-yellow font-semibold block pb-2 text-sm"
                      href=""
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-dark hover:text-yellow font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-dark hover:text-yellow font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>

          <button className="text-[#ffffff] justify-center text-center rounded-lg-shadow px-10 py-3 flex items-center">
            Contact US
          </button>
        </div>
      </div>
      <TractorAnimation />
      <div className="text-center font-semibold pt-4">
        <p>Code Casters @2023</p>
      </div>
    </footer>
  );
};

export default Footer;
