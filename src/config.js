import axios from "axios";



/*
  TODO:
    Pridat nove axios instance pro admin service.
    pridat novy VITE_ADMIN_API_URL variable.

*/

const ApiUrl = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");

const cliApi = axios.create({
  baseURL: ApiUrl,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});


const isCancel = (err) =>
  err?.code === "ERR_CANCELED" ||
  err?.name === "CanceledError" ||
  (axios.isCancel ? axios.isCancel(err) : false);

export { isCancel, cliApi };
