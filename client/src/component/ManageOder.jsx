import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserByAdmin } from "../featured/user/userSlice";
import moment from "moment";
import {
  allOderItemByOder,
  listAllOder,
  updateCancelOder,
  updateCompleteOder,
  updateDeliveryOder,
} from "../featured/oder/oderSlice";
import { Link, useNavigate } from "react-router-dom";

const ManageOder = () => {
  const { allOder, allOderItem } = useSelector((state) => state.oder);
  const dispatch = useDispatch();
  const [showOderItem, setShowOderItem] = useState(false);
  useEffect(() => {
    return () => dispatch(listAllOder({ page: 0 }));
  }, []);

  const handleGetAllUserByPage = (e, page) => {
    e.preventDefault();
    dispatch(listAllOder({ page: page }));
  };

  const handleUpdateCancelOder = (e, oderId) => {
    e.preventDefault();
    dispatch(updateCancelOder({ oderId }));
  };

  const handleUpdateDeliveryOder = (e, oderId) => {
    e.preventDefault();
    dispatch(updateDeliveryOder({ oderId }));
  };

  const handleUpdateCompleteOder = (e, oderId) => {
    e.preventDefault();
    dispatch(updateCompleteOder({ oderId }));
  };

  const handleShowOderItem = (oder) => {
    dispatch(allOderItemByOder(oder));
    setShowOderItem(true);
  };

  return (
    <>
      {showOderItem ? (
        <div className="p-8">
          <div className="py-8">
            <h1 className=" pb-8 text-3xl font-poppins font-bold">All Oders</h1>
            <h2
              className="mb-8 cursor-pointer hover:underline"
              onClick={() => setShowOderItem(false)}
            >
              Back
            </h2>
            <div className="flex flex-col">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 overflow-hidden font-poppins">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                      <th scope="col" className="px-6 py-3 ">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>

                      <th scope="col" className="px-6 py-3">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Image
                      </th>
                      <th scope="col" className="px-6 py-3 hidden md:block">
                        Size
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {allOderItem &&
                      allOderItem.map((oder) => (
                        <tr className="bg-white border-b" key={oder.id}>
                          <td
                            scope="row"
                            className="px-6 py-4 max-w-[150px] font-medium text-gray-900 break-words hover:text-blue-300 hover:cursor-pointer"
                          >
                            <Link to={"/product"} state={oder.product}>
                              {oder.name}
                            </Link>
                          </td>

                          <td
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            ${oder.price}
                          </td>

                          <td
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            {oder.quantity}
                          </td>
                          <td
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            <div className="max-h-[200px] max-w-[150px]">
                              <img
                                src={oder?.product?.image_url}
                                className="w-full h-full"
                              />
                            </div>
                          </td>
                          <td
                            scope="row"
                            className="px-6 py-4 hidden md:flex h-[200px] font-medium items-center text-gray-900 whitespace-nowrap "
                          >
                            {oder?.product?.size}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-8">
          <h1 className="py-8">All Oder</h1>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 overflow-hidden">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 hidden lg:block ">
                    Shipping Fee
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Discount
                  </th>
                  <th scope="col" className="px-6 py-3">
                    User
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Created At
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Update
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Show
                  </th>
                </tr>
              </thead>
              <tbody>
                {allOder &&
                  allOder.map((oder) => (
                    <tr
                      className="bg-white border-b w-auto max-h-[100px] overflow-hidden"
                      key={oder.id}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {oder.status}
                      </th>
                      <th
                        scope="row"
                        className="hidden lg:block px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {oder.shippingFee}
                      </th>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {oder.total}$
                      </th>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap break-words"
                      >
                        {oder?.discount?.discountCode}
                      </th>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap break-words"
                      >
                        {oder?.user?.email}
                      </th>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap break-words"
                      >
                        {moment(oder?.createdAt).format("dd/mm/yyyy")}
                      </th>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap break-words flex gap-4"
                      >
                        <button
                          className="p-2 bg-red-500 hover:bg-red-400 text-white rounded-lg"
                          onClick={(e) => handleUpdateCancelOder(e, oder.id)}
                        >
                          Cancel
                        </button>
                        <button
                          className="p-2 bg-orange-500 hover:bg-orange-400 text-white rounded-lg"
                          onClick={(e) => handleUpdateDeliveryOder(e, oder.id)}
                        >
                          Delivery
                        </button>
                        <button
                          className="p-2 bg-blue-500 hover:bg-blue-400 text-white rounded-lg"
                          onClick={(e) => handleUpdateCompleteOder(e, oder.id)}
                        >
                          Complete
                        </button>
                      </th>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap break-words"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 cursor-pointer"
                          onClick={() => handleShowOderItem(oder.id)}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </th>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-12">
            <div className=" flex flex-1 items-center justify-end pt-4">
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                {[...Array(Math.ceil(allOder.length / 16))].map((page, i) => (
                  <a
                    href="#"
                    key={i}
                    onClick={(e) => handleGetAllUserByPage(e, i)}
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    {i + 1}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ManageOder;
