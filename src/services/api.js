import axios from "axios";

const API = axios.create({
  baseURL: "https://crypto-platform-backend-d2az.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;