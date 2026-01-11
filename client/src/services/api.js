import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const createOPD = (data) => API.post("/opd", data);
export const getOPD = () => API.get("/opd");

export const createIPD = (data) => API.post("/ipd", data);
export const getIPD = () => API.get("/ipd");
