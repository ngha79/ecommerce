import axiosClient from "../axiosClient";

const API_URI = `/cart`;
const API_URI_ITEM = `/cartItem`;

const getCart = async () => {
  const response = await axiosClient.get(`${API_URI}/`);
  return response.data;
};

const deleteAllCartItem = async (cartId) => {
  const response = await axiosClient.delete(
    `${API_URI_ITEM}/allCartItem/${cartId}`
  );
  return response.data;
};

const updateCartItem = async ({ cartItemId, data }) => {
  const response = await axiosClient.put(`${API_URI_ITEM}/${cartItemId}`, {
    data: data,
  });
  return response.data;
};

const deleteCartItem = async (cartItemId) => {
  const response = await axiosClient.delete(`${API_URI_ITEM}/${cartItemId}`);
  return response.data;
};

const createCartItem = async (data) => {
  const response = await axiosClient.request({
    method: "POST",
    url: `${API_URI_ITEM}/`,
    data: data,
  });
  return response.data;
};

const cartService = {
  getCart,
  updateCartItem,
  deleteCartItem,
  createCartItem,
  deleteAllCartItem,
};

export default cartService;
