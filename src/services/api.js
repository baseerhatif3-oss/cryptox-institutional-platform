import axios from "axios";

import {
  getToken,
  removeToken,
} from "../utils/auth";

const API =
  axios.create({

    baseURL:
      "https://your-backend-url.onrender.com/api",
  });

API.interceptors.request.use(

  (config) => {

    const token =
      getToken();

    if (token) {

      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  },

  (error) => {

    return Promise.reject(
      error
    );
  }
);

API.interceptors.response.use(

  (response) =>
    response,

  (error) => {

    if (
      error.response?.status ===
      401
    ) {

      removeToken();

      window.location.href =
        "/login";
    }

    return Promise.reject(
      error
    );
  }
);

export default API;