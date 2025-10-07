import axios, { AxiosError } from "axios";



/*
  TODO:
    Pridat nove axios instance pro admin service.
    Pridat novy VITE_ADMIN_API_URL variable.
*/

const ApiUrl = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");

const cliApi = axios.create({
  baseURL: ApiUrl,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});


const isCancel = (err: any): boolean => {
  if (!err) return false;

  return axios.isCancel(err);
};

export { isCancel, cliApi, AxiosError };
