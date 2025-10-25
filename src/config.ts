import axios, { AxiosError } from "axios";

/*
  TODO:
    Pridat nove axios instance pro admin service.
    Pridat novy VITE_ADMIN_API_URL variable.
*/

const cliApiURL = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");
const adminApiURL = (import.meta.env.VITE_ADMIN_API_URL || "").replace(
  /\/+$/,
  ""
);
const assetApiURL = (import.meta.env.VITE_ASSET_API_URL || "").replace(
  /\/+$/,
  ""
);

const cliAPI = axios.create({
  baseURL: cliApiURL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

const adminAPI = axios.create({
  baseURL: adminApiURL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

//////Pridej automaticky token do adminAPI callu
adminAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { cliAPI, adminAPI, AxiosError, assetApiURL };
