import React from "react";
import logoblack from "../../../assets/logo2.webp";

const Footer = () => {
  return (
    <footer className="bg-black flex justify-center items-center text-white flex-col overflow-hidden">
      <div className="flex flex-col py-4 w-full max-w-7xl justify-between px-8">
        <div className="flex py-3 flex-col lg:flex-row ">
          <div className="flex-1">
            <h2 className="text-xl py-3 font-poppins">Quick links</h2>
            <ul className="text-gray-400">
              <li className="py-1 cursor-pointer hover:underline hover:text-white">
                Drinks
              </li>
              <li className="py-1 cursor-pointer hover:underline hover:text-white">
                Bundles
              </li>
              <li className="py-1 cursor-pointer hover:underline hover:text-white">
                Recipes
              </li>
              <li className="py-1 cursor-pointer hover:underline hover:text-white">
                About
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h2 className="text-xl py-3 font-poppins">Our mission</h2>
            <span className="text-lg font-Anonymous text-gray-400">
              We offer sustainable access to delicious plant-based nutrition.
            </span>
          </div>
          <div className="flex-1 w-full py-3">
            <img
              src={logoblack}
              className="text-white bg-black lg:float-right "
            />
          </div>
        </div>
        <div className="flex flex-col py-4">
          <h3 className="text-xl font-poppins py-4 flex sm:justify-center lg:justify-start">
            We send delicious emails.{" "}
          </h3>
          <div className="flex sm:justify-center lg:justify-start">
            <div className="flex bg-black p-3 outline-none border-2 md:min-w-[350px] wfull ">
              <input
                type="email"
                placeholder="Email"
                className="bg-black outline-none md:min-w-[300px]"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-screen" />
      <div className="py-6 text-xs">© 2023, taste Powered by Ha</div>
    </footer>
  );
};

export default Footer;
