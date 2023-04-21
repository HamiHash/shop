import axios from "axios";

const callApi = () => {
  const axiosIstance = axios.create({
    baseURL: "http://localhost:5000/api",
  });

  axiosIstance.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => Promise.reject(err)
  );

  axiosIstance.interceptors.response.use(
    (res) => {
      // manage vali dation
      return res;
    },
    (err) => Promise.reject(err)
  );

  return axiosIstance;
};

export default callApi;
