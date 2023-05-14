import React, { useEffect, useState } from "react";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../featured/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import {
  resetMessage,
  updatePasswordUser,
  updateUser,
} from "../../featured/user/userSlice";
import { toast } from "react-toastify";
import { resetCart } from "../../featured/cart/cartSlice";
import userService from "../../featured/user/userService";

const User = () => {
  const { user } = useSelector((state) => state.auth);
  const { cart, cartItem } = useSelector((state) => state.cart);
  const { message, isError } = useSelector((state) => state.user);
  const [update, setUpdate] = useState(false);
  const [checkUser, setCheckUser] = useState();
  const [changePassword, setChangePassword] = useState(false);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.address);
  const [phone, setPhone] = useState(user.phone);
  const [name, setName] = useState(user.name);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/");
    dispatch(resetCart());
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const userData = { email, address, phone, name };
    dispatch(updateUser(userData));
    setUpdate(false);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    const userData = { currentPassword, newpassword, repassword };
    dispatch(updatePasswordUser(userData));
    handleReset();
  };

  const handleReset = () => {
    setChangePassword(false);
    setCurrentPassword("");
    setNewPassword("");
    setRePassword("");
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
    }
    if (isError) {
      toast.error(isError);
    }
    dispatch(resetMessage());
  }, [handleChangePassword]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    async function checkAdminUser() {
      const response = await userService.checkAdminUser();
      setCheckUser(response.user);
    }
    return () => {
      if (!checkUser) {
        checkAdminUser();
      }
    };
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-8 mb-8 mt-48 overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        {changePassword ? (
          <>
            <h3 className="text-lg font-semibold leading-6 text-gray-900">
              Update account
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Change password.
            </p>
          </>
        ) : (
          <>
            <h3 className="text-lg font-semibold leading-6 text-gray-900">
              User Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Personal details.
            </p>
          </>
        )}
      </div>
      <div className="border-t border-gray-200">
        {!changePassword ? (
          !update ? (
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 flex justify-between">
                  <span>{name}</span>
                  {checkUser && (
                    <Link to={"/admin"}>
                      <button className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-400">
                        Manage Shop
                      </button>
                    </Link>
                  )}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {email}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Address</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {address}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Phone number
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {phone}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Account</dt>
                <div className="w-full flex justify-between sm:col-span-2 gap-4">
                  <button
                    className="px-4 py-2 bg-sky-500 text-white"
                    onClick={() => setChangePassword(true)}
                  >
                    Change Password
                  </button>
                  <button
                    className="px-4 py-2 bg-green-500 text-white"
                    onClick={() => setUpdate(true)}
                  >
                    Update Account
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Oder</dt>
                <div className="w-[50%] flex justify-between sm:col-span-2">
                  <Link to={"/user/oder"}>
                    <button className="px-4 py-2 bg-green-500 text-white">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </dl>
          ) : (
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <input
                  type="text"
                  className="border border-gray-400 outline-none p-2"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <input
                  type="email"
                  className="border border-gray-400 outline-none p-2"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Address</dt>
                <input
                  type="text"
                  className="border border-gray-400 outline-none p-2"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Phone number
                </dt>
                <input
                  type="text"
                  className="border border-gray-400 outline-none p-2"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Account</dt>
                <div className="w-[50%] flex justify-between sm:col-span-2">
                  <button
                    className="px-4 py-2 bg-green-500 text-white"
                    onClick={handleUpdateUser}
                  >
                    Update
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white"
                    onClick={() => setUpdate(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </dl>
          )
        ) : (
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Current password
              </dt>
              <input
                type="password"
                className="border border-gray-400 outline-none p-2"
                placeholder="Current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                New password
              </dt>
              <input
                type="password"
                className="border border-gray-400 outline-none p-2"
                placeholder="New password"
                value={newpassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">RePassword</dt>
              <input
                type="password"
                className="border border-gray-400 outline-none p-2"
                placeholder="Renew Password"
                value={repassword}
                onChange={(e) => setRePassword(e.target.value)}
              />
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Account</dt>
              <div className="w-[50%] flex justify-between sm:col-span-2">
                <button
                  className="px-4 py-2 bg-green-500 text-white"
                  onClick={handleChangePassword}
                >
                  Update
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white"
                  onClick={handleReset}
                >
                  Cancel
                </button>
              </div>
            </div>
          </dl>
        )}
      </div>
    </div>
  );
};

export default User;
