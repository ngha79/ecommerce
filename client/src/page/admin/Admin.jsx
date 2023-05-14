import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import HeaderAdmin from "../../component/headerAdmin/HeaderAdmin";

const Admin = () => {
  return (
    <div className="font-poppins lg:ml-72">
      <HeaderAdmin />
      <Outlet />
    </div>
  );
};

export default Admin;
