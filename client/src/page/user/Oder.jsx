import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOderUser } from "../../featured/oder/oderSlice";
import { Link, useNavigate } from "react-router-dom";

const Oder = () => {
  const { allOderUser } = useSelector((state) => state.oder);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => dispatch(getAllOderUser(user.id));
  }, []);
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mt-40 px-8 mx-auto">
      <div className="py-8">
        <h1 className=" pb-8 text-3xl font-poppins font-bold">All Oders</h1>
        <h1
          className=" pb-8 cursor-pointer hover:underline w-max"
          onClick={() => navigate(-1)}
        >
          Back
        </h1>
        <div className="flex flex-col">
          <div className="relative overflow-x-auto">
            <table className="w-full  text-sm text-left text-gray-500 overflow-hidden font-poppins">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Shipping Fee
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Created At
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Detail
                  </th>
                </tr>
              </thead>
              <tbody>
                {allOderUser &&
                  allOderUser.map((oder) => (
                    <tr className="bg-white border-b cursor-pointer">
                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {oder.status}
                      </td>

                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {oder.shippingFee}
                      </td>

                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {oder.total}
                      </td>
                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {oder.createdAt}
                      </td>
                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        <Link
                          to={`/user/oder/detail`}
                          className="w-full"
                          state={oder.id}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oder;
