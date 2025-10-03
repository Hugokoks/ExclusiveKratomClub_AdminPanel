import axios from "axios";



const ApiUrl = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");


const api = axios.create({

    baseURL: ApiUrl,
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
});

const isCancel = (err) =>
    err?.code === "ERR_CANCELED" ||
    err?.name === "CanceledError" ||
    (axios.isCancel ? axios.isCancel(err) : false);



export { isCancel, api }