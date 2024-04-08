import axios from "axios";

const axiosServices = axios.create({
  baseURL: "http://127.0.0.1:5000"
});

// ==============================|| AXIOS - FOR MOCK SERVICES ||============================== //

axiosServices.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response.status === 401 &&
      !window.location.href.includes("/privateloginurl987")
    ) {
      window.location.pathname = "/privateloginurl987";
    }
    return Promise.reject(
      (error.response && error.response.data) || "Wrong Services"
    );
  }
);

export default axiosServices;
