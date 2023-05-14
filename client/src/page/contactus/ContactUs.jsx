import React from "react";

const ContactUs = () => {
  return (
    <div className="h-full mt-36">
      <div className="max-w-7xl mx-auto px-8 flex justify-center">
        <div className="flex flex-col">
          <h1 className="text-6xl py-10 font-poppins ">Contact Us</h1>
          <span className="text-lg">
            Have a question or comment? Don't be shy: Reach out and say hi!
          </span>
          <span className="text-lg">
            <b>Support hours:</b> Monday-Friday, 7am-3pm
          </span>
          <form className="flex flex-col gap-4 py-8">
            <div className="w-full gap-4 flex">
              <input
                type="text"
                placeholder="Name"
                className="border-2 border-gray-400 p-2 outline-none flex-1 focus:border-black hover:border-gray-500"
              />
              <input
                type="email"
                placeholder="Email *"
                className="border-2 border-gray-400 p-2 outline-none  focus:border-black hover:border-gray-500 flex-1 "
              />
            </div>
            <input
              type="text"
              placeholder="Phone number"
              className="border-2 border-gray-400 p-2 outline-none flex-1 focus:border-black hover:border-gray-500"
            />
            <input
              type="text"
              placeholder="Comment"
              className="border-2 border-gray-400 p-2 outline-none flex-1 focus:border-black hover:border-gray-500"
            />
            <div className="py-8">
              <button className="float-left bg-black text-white py-2 px-10 text-lg">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
