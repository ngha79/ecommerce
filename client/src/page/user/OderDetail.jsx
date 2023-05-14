import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { allOderItemByOder } from "../../featured/oder/oderSlice";

const OderDetail = () => {
  const { allOderItem } = useSelector((state) => state.oder);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(allOderItemByOder(location.state));
  }, []);

  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mt-36 px-8 mx-auto">
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
  );
};

export default OderDetail;
