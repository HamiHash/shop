import axios from "axios";
import validationError from "../exceptions/validationError";

const callApi = () => {
  const axiosIstance = axios.create({
    baseURL: "http://localhost:5000/api",
  });

  axiosIstance.interceptors.request.use(
    (config) => {
      config.withCredentials = true; //? For cookie and validation (rest is related to backend)
      return config;
    },
    (err) => {
      throw err;
    }
  );

  axiosIstance.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      const res = err?.response;
      if (res) {
        if (res.status === 422) {
          throw new validationError(res.data.errors);
        }
      }

      throw err;
    }
  );

  return axiosIstance;
};

export default callApi;
