import React, { useState } from "react";
import { logout } from "../../featured/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const HeaderAdmin = () => {
  const [showLogout, setShowLogout] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/");
  };
  return (
    <div className="border-b z-10 border-slate-200 bg-slate-100 py-2 px-10 w-full font-poppins items-center flex">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          type="text"
          placeholder="Type to search"
          className="outline-none ml-2 p-2 bg-slate-100"
        />
      </div>
      <div
        className="flex cursor-pointer relative justify-end items-end w-full"
        onClick={() => setShowLogout(!showLogout)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>

        {showLogout && (
          <div className="absolute top-12 right-0 z-10 border-slate-100 px-8 py-4 border rounded-md bg-slate-100">
            <button
              className="hover:bg-red-500 hover:text-white bg-slate-200 px-4 py-2 rounded-lg"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderAdmin;
