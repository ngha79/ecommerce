import axiosClient from "../axiosClient";

const API_URI = `/discount`;

const applyCoupon = async (name) => {
  const response = await axiosClient.request({
    method: "GET",
    url: `${API_URI}/apply?name=${name}`,
  });
  return response.data;
};

const couponService = {
  applyCoupon,
};

export default couponService;
