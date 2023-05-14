import axiosClient from "../axiosClient";

const API_URI = `/product`;
const API_URI_COMMENT = `/review`;

const getAllProduct = async ({ page, min, max, name, price }) => {
  const response = await axiosClient.get(
    `${API_URI}?page=${page}&min=${min || ""}&max=${max || ""}&name=${
      name || ""
    }&price=${price || ""}`
  );
  return response.data;
};

const getAllProductbySlug = async ({ slug, page, min, max, name, price }) => {
  const response = await axiosClient.get(
    `${API_URI}/slug/?slug=${slug}&page=${page}&min=${min || ""}&max=${
      max || ""
    }&name=${name || ""}&price=${price || ""}`
  );
  return response.data;
};

const getProductById = async (productId) => {
  const response = await axiosClient.get(`${API_URI}/product/${productId}`);
  return response.data;
};

const getProductBestSeller = async () => {
  const response = await axiosClient.get(`${API_URI}/best-seller`);
  return response.data;
};

const getProductBundle = async () => {
  const response = await axiosClient.get(`${API_URI}/bundle`);
  return response.data;
};

const getProductSearch = async ({ search, page, min, max, name, price }) => {
  const response = await axiosClient.get(
    `${API_URI}/search/?search=${search}&page=${page}&min=${min || ""}&max=${
      max || ""
    }&name=${name || ""}&price=${price || ""}`
  );
  return response.data;
};

const createProduct = async (data) => {
  const response = await axiosClient.request({
    method: "POST",
    url: `${API_URI}/`,
    headers: { "Content-type": "multipart/form-data" },
    data: data,
  });
  return response.data;
};

const deleteProduct = async (productId) => {
  const response = await axiosClient.request({
    method: "DELETE",
    url: `${API_URI}/${productId}`,
  });
  return response.data;
};

const updateProduct = async ({ productId, data }) => {
  const response = await axiosClient.request({
    method: "PUT",
    url: `${API_URI}/${productId}`,
    data: data,
  });
  return response.data;
};

const createComment = async ({ data }) => {
  const response = await axiosClient.request({
    method: "POST",
    url: `${API_URI_COMMENT}/`,
    headers: { "Content-type": "multipart/form-data" },
    data: data,
  });
  return response.data;
};
const deleteComment = async (commentId) => {
  const response = await axiosClient.request({
    method: "DELETE",
    url: `${API_URI_COMMENT}/${commentId}`,
  });
  return response.data;
};

const getAllCommentByProduct = async ({ page, productId }) => {
  const response = await axiosClient.request({
    method: "GET",
    url: `${API_URI_COMMENT}/product/${productId}/${page}`,
  });
  return response.data;
};

const getProductFlavor = async (type, productId) => {
  const response = await axiosClient.request({
    method: "GET",
    url: `${API_URI}/flavor/${type}/${productId}`,
  });
  return response.data;
};
const productService = {
  getAllProduct,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProductbySlug,
  getProductBundle,
  getProductBestSeller,
  getProductSearch,
  createComment,
  deleteComment,
  getAllCommentByProduct,
  getProductFlavor,
};

export default productService;
