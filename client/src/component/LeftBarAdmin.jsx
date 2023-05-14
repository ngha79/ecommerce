import React from "react";
import logo from "../../assets/logo2.webp";
import { Link } from "react-router-dom";

const LeftBarAdmin = () => {
  return (
    <div className="bg-slate-800 hidden  text-white p-8 w-72 flex-1 flex-col lg:flex font-poppins h-screen fixed">
      <div>
        <Link to={"/admin"}>
          <h1 className="flex justify-center">
            <img src={logo} />
          </h1>
        </Link>
        <div className="py-12 text-lg ">
          <Link to={"/admin/"}>
            <h1 className="cursor-pointer my-1 hover:bg-slate-500 rounded-lg p-2 duration-300">
              Dashboard
            </h1>
          </Link>
          <Link to={"/admin/product"}>
            <h1 className="cursor-pointer my-1 hover:bg-slate-500 rounded-lg p-2 duration-300">
              Product
            </h1>
          </Link>
          <Link to={"/admin/user"}>
            <h1 className="cursor-pointer my-1 hover:bg-slate-500 rounded-lg p-2 duration-300">
              User
            </h1>
          </Link>
          <Link to={"/admin/oder"}>
            <h1 className="cursor-pointer my-1 hover:bg-slate-500 rounded-lg p-2 duration-300">
              Oder
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftBarAdmin;
