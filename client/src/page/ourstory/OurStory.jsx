import React from "react";
import heart from "../../../assets/heart.webp";
import bottle from "../../../assets/bottle.webp";
import plant from "../../../assets/plant.webp";
import story2 from "../../../assets/story2.webp";

const OurStory = () => {
  return (
    <div className="mx-auto max-w-7xl p-8 mt-36">
      <div className="bg-bgstory bg-no-repeat bg-cover py-32">
        <div className="border-2 p-8 m-8 border-black max-w-xl mx-auto text-center break-words bg-white">
          <span className="font-poppins text-2xl p-8 ">
            Our mission is to offer widespread, sustainable access to delicious
            plant-based nutrition.
          </span>
        </div>
      </div>

      <div className="py-8">
        <h1 className="text-4xl font-poppins py-10">Kepping it green</h1>
        <div className="flex gap-4 lg:flex-row flex-col">
          <div className="flex flex-col justify-center flex-1 border-2 border-black items-center text-center">
            <div className="h-[270px]">
              <img src={bottle} className="w-32 py-10" />
            </div>
            <h2 className="text-center font-poppins text-2xl">
              Bottled in recycled glass
            </h2>
            <span className="break-words p-6">
              We use glass bottles rather than porous plastic because it's
              better for you, better for the planet, and a pleasure to drink
              from. Don't you think?
            </span>
          </div>
          <div className="flex flex-col justify-center flex-1 border-2 border-black items-center text-center">
            <div className="h-[270px]">
              <img src={plant} className="w-32 py-10" />
            </div>
            <h2 className="text-center font-poppins text-2xl">Plant-based</h2>
            <span className="break-words p-6">
              All our drinks are made from plants. Placing plants at the center
              of our diet is a simple way to improve our health and our beloved
              environment.
            </span>
          </div>
          <div className="flex flex-col justify-center flex-1 border-2 border-black items-center text-center">
            <div className="h-[270px]">
              <img src={heart} className="text-xl w-32 py-10" />
            </div>
            <h2 className="text-center font-poppins text-2xl">
              Made with love
            </h2>
            <span className="break-words p-6">
              We’re intentional about our processes and our ingredients. Health,
              happiness, and loving care for the earth are always our highest
              priorities.
            </span>
          </div>
        </div>
      </div>

      <div className="bg-bgstory1 bg-no-repeat bg-cover py-32 my-12">
        <div className="flex flex-col border-2 p-8 border-black max-w-xl mx-auto text-center break-words bg-white">
          <span className="font-poppins text-3xl py-4">
            Always organic + non-GMO
          </span>
          <span className="text-base">
            We make our beverages exclusively from organic ingredients: they're
            non-GMO and grown without chemical fertilizers, pesticides, or
            herbicides, for healthy juices and a healthy planet.
          </span>
        </div>
      </div>

      <div className="my-12 flex md:flex-row flex-col md:overflow-hidden md:max-h-[350px] items-center">
        <div className="flex-1 flex items-center min-h-[340px] max-h-[350px] overflow-hidden">
          <img src={story2} className="object-cover bg-no-repeat " />
        </div>
        <div className="w-full h-full flex-1 bg-black text-white flex justify-center items-start flex-col border-t-2 border-white">
          <div className="p-16">
            <h1 className="font-poppins md:text-4xl py-4 md:py-8 text-3xl">
              Freshness from farm to bottle
            </h1>
            <span className="max-w-xl text-lg text-gray-400">
              We’re on a mission to make healthy and sustainable the delicious
              new normal. Take a sip and join us.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
