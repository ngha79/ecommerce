import axiosClient from "../axiosClient";

const API_URI = `/user`;
const API_URI_AUTH = `/auth`;

const checkAdminUser = async () => {
  const response = await axiosClient.get(`${API_URI}/checkAdmin`);
  return response.data;
};

const getAllUserByAdmin = async ({ page }) => {
  const response = await axiosClient.get(`${API_URI}/?page=${page}`);
  return response.data;
};

const updateUser = async (userData) => {
  const response = await axiosClient.put(`${API_URI}/`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.user));
  }
  return response.data;
};

const createUserByAdmin = async (userData) => {
  const response = await axiosClient.post(`${API_URI_AUTH}/register`, userData);
  return response.data;
};

const updateUserByAdmin = async ({ data, userId }) => {
  const response = await axiosClient.put(`${API_URI}/user/${userId}`, data);
  return response.data;
};

const deleteUserByAdmin = async (userId) => {
  const response = await axiosClient.delete(`${API_URI}/${userId}`);
  return response.data;
};

const updatePasswordUser = async (userData) => {
  const response = await axiosClient.put(
    `${API_URI}/change-password`,
    userData
  );
  return response.data;
};

const userService = {
  updateUser,
  updatePasswordUser,
  getAllUserByAdmin,
  createUserByAdmin,
  updateUserByAdmin,
  deleteUserByAdmin,
  checkAdminUser,
};

export default userService;
