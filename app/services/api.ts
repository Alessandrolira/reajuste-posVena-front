import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.10.50:8082",
  headers: {
    "Content-Type": "application/json",
  },
});
