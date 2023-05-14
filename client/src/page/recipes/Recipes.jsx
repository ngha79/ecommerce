import React from "react";
import recipes1 from "../../../assets/recipes1.webp";
import { Link } from "react-router-dom";

const Recipes = () => {
  return (
    <div className="px-8 max-w-7xl mx-auto pt-24">
      <h1 className="font-poppins text-5xl py-8">Recipes</h1>
      <div className="flex flex-wrap pb-24">
        <div className="flex w-full md:w-[49%] max-h-[600px] flex-col cursor-pointer p-3">
          <Link to={"/recipes/detail/kombumcha"}>
            <div className="hover:underline overflow-hidden">
              <div
                className="w-full h-[400px] bg-cover bg-repeat hover:scale-105 ease-out duration-300 overflow-hidden"
                style={{ backgroundImage: `url(${recipes1})` }}
              />
              <h1 className="text-center font-poppins text-2xl my-4">
                Grapefruit Kombucha Float
              </h1>
            </div>
            <span className="text-center py-4">
              This tangy, sparkly, nostalgic treat tastes like a creamsicle, and
              takes all of two minutes to make.
            </span>
          </Link>
        </div>
        <div className="flex w-full md:w-[49%] max-h-[600px]  flex-col cursor-pointer p-3">
          <Link to={"/recipes/detail/apple"}>
            <div className="hover:underline overflow-hidden">
              <div
                className="w-full h-[400px] bg-cover bg-repeat hover:scale-105 ease-out duration-300 overflow-hidden"
                style={{ backgroundImage: `url(${recipes1})` }}
              />
              <h1 className="text-center font-poppins text-2xl my-4">
                Apple Cinnamon Toast
              </h1>
            </div>
            <span className="text-center py-4">
              This is a challava good breakfast or snack to welcome fall and the
              jewel of the season: apples.
            </span>
          </Link>
        </div>
        <div className="flex w-full md:w-[49%] max-h-[600px]  flex-col cursor-pointer p-3">
          <Link to={"/recipes/detail/lemonade"}>
            <div className="hover:underline overflow-hidden">
              <div
                className="w-full h-[400px] bg-cover bg-repeat hover:scale-105 ease-out duration-300 overflow-hidden"
                style={{ backgroundImage: `url(${recipes1})` }}
              />
              <h1 className="text-center font-poppins text-2xl my-4">
                Strawberry Lemonade + Yogurt Popsicles
              </h1>
            </div>
            <span className="text-center py-4">
              Strawberry and coconut? This is way more than a summer fling–this
              is a duo that was simply meant to be.
            </span>
          </Link>
        </div>
        <div className="flex w-full md:w-[49%] max-h-[600px]  flex-col cursor-pointer p-3">
          <Link to={"/recipes/detail/home"}>
            <div className="hover:underline overflow-hidden">
              <div
                className="w-full h-[400px] bg-cover bg-repeat hover:scale-105 ease-out duration-300 overflow-hidden"
                style={{ backgroundImage: `url(${recipes1})` }}
              />
              <h1 className="text-center font-poppins text-2xl my-4">
                How to Frosé at Home
              </h1>
            </div>
            <span className="text-center py-4">
              From the very first sip, we knew that we wanted to share this
              melony magic with as many friends as we could.
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
