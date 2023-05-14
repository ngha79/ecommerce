import axiosClient from "../axiosClient";

const API_URI = `/oder`;
const API_URI_ODER_ITEM = `/oderItem`;

const createOder = async (data) => {
  const response = await axiosClient.request({
    method: "POST",
    url: `${API_URI}/`,
    data: data,
  });
  return response.data;
};

const createOderItem = async (data) => {
  const response = await axiosClient.request({
    method: "POST",
    url: `${API_URI_ODER_ITEM}/`,
    data: data,
  });
  return response.data;
};

const allOderUser = async (userId) => {
  const response = await axiosClient.request({
    method: "GET",
    url: `${API_URI}/user/${userId}`,
  });
  return response.data;
};

const allOderItemByOder = async (oderId) => {
  const response = await axiosClient.request({
    method: "GET",
    url: `${API_URI_ODER_ITEM}/${oderId}`,
  });
  return response.data;
};

const listAllOder = async ({ page }) => {
  const response = await axiosClient.request({
    method: "GET",
    url: `${API_URI}/allOder/${page}`,
  });
  return response.data;
};

const updateCancelOder = async ({ oderId }) => {
  const response = await axiosClient.request({
    method: "PUT",
    url: `${API_URI}/canceled/${oderId}`,
  });
  return response.data;
};

const updateDeliveryOder = async ({ oderId }) => {
  const response = await axiosClient.request({
    method: "PUT",
    url: `${API_URI}/delivery/${oderId}`,
  });
  return response.data;
};

const updateCompleteOder = async ({ oderId }) => {
  const response = await axiosClient.request({
    method: "PUT",
    url: `${API_URI}/completed/${oderId}`,
  });
  return response.data;
};

const oderService = {
  createOder,
  createOderItem,
  allOderUser,
  allOderItemByOder,
  listAllOder,
  updateCancelOder,
  updateDeliveryOder,
  updateCompleteOder,
};

export default oderService;
