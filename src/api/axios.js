import axios from "axios";

const API = axios.create({
  baseURL:
    "https://crypto-backend-dojp.onrender.com/api",
});

/* ======================
   AUTO TOKEN
====================== */

API.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem(
        "token"
      );

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(
      error
    );
  }
);

/* ======================
   ERROR HANDLING
====================== */

API.interceptors.response.use(
  (response) => response,

  (error) => {
    console.log(
      "API ERROR:",
      error.response?.data ||
        error.message
    );

    return Promise.reject(
      error
    );
  }
);

export default API;