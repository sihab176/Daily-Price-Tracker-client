import axios from "axios";
import React from "react";

const axiosInstance = axios.create({
  baseURL: `https://assignment-12-server-side-pied.vercel.app`,
});
const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
