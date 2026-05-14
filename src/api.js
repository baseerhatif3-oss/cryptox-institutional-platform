import axios from "axios";

const API = axios.create({
  baseURL:
    "https://crypto-platform-backend-d2az.onrender.com/api",
});

export default API;