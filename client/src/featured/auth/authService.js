import axiosClient from "../axiosClient";

const API_URI = `/auth`;

const login = async (userData) => {
  const response = await axiosClient.post(`${API_URI}/login`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.user));
    localStorage.setItem("token", response.data.token);
  }
  return response.data;
};

const register = async (userData) => {
  const response = await axiosClient.post(`${API_URI}/register`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.user));
    localStorage.setItem("token", response.data.token);
  }
  return response.data;
};

const logout = async () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

const forgotPassword = async (userData) => {
  const response = await axiosClient.post(
    `${API_URI}/forgot-password`,
    userData
  );
  return response.data;
};

const resetPassword = async ({ data, token }) => {
  const response = await axiosClient.patch(
    `${API_URI}/reset-password/${token}`,
    data
  );
  return response.data;
};

const authService = {
  login,
  register,
  logout,
  forgotPassword,
  resetPassword,
};

export default authService;
